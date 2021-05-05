import React, { useState } from 'react';
import { createUseStyles } from "react-jss";

import Sidebar from "../../../components/ui/article/sidebar/sidebar";
import Section from "../../../components/ui/article/sidebar/section";
import prisma from "../../../lib/prisma";

import { useRouter } from 'next/router';
import { revalidateTimeout } from "../../../utils/utils";
import { useSession, getSession } from "next-auth/client";
import { Editor } from '@tinymce/tinymce-react';

const useStyles = createUseStyles({
  header: {
    height: "80px",
    width: "100%",
    backgroundColor: "#fff",
    borderBottom: "1px solid rgb(212, 218, 223)",
    boxShadow: "rgba(116, 129, 141, 0.1) 0px 3px 8px 0px",
    boxSizing: "border-box"
  },
  container: {
    height: "calc(100% - 80px)",
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 3fr 1fr",
    color: "#000"
  }
})

const Post = ({ post, allTags, allCategories }) => {
  const classes = useStyles()
  const router = useRouter()
  const [title, setTitle] = useState(post.title)
  const [subTitle, setSubTitle] = useState(post.subTitle);
  const [content, setContent] = useState(post.content);
  const [tagIds, setTagIds] = useState(post.tags.map(postTag => postTag.tag.id));
  const [categoryId, setCategoryId] = useState(post.categoryId);
  const [ session, loading ] = useSession()

  const onDelete = async () => {
    if (loading) return;

    setLoading(true);

    await fetch(`http://localhost:3000/api/posts/${post.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        router.push(`http://localhost:3000/posts`)
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      })
  }

  const handleTagChange = e => {
    const id = parseInt(e.target.value, 10);

    // check if tag is already selected
    let foundIdx = -1;
    for (let i=0; i<tagIds.length;i++) {
      if (tagIds[i] === id) {
        foundIdx = i;
        break;
      }
    }

    // if tag is selected, remove it
    if (foundIdx > -1) {
      let newTags = tagIds.splice(foundIdx, 1);
      setTagIds(newTags);
    } else {
      setTagIds([...tagIds, id])
    }
  }

  function createMarkup () {
    return { __html: content }
  }

  const handleContent = (content, editor) => setContent(content);

  const onSubmit = async e => {
    e.preventDefault();

    let selectedTags = [];
    for (let i=0;i<tagIds.length;i++) {
      selectedTags = [...selectedTags, tagIds[i]]
    }
    
    try {
      const body = {
        id: post.id,
        title: title,
        subTitle: subTitle,
        content: content,
        published: true,
        authorId: 1,
        categoryId,
        tags: selectedTags
      }
      const res = await fetch(`http://localhost:3000/api/posts/${post.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      router.push(`http://localhost:3000/posts/${data.id}`)
    } catch (error) {
      console.error(error)
    }
  }

  let isLoggedIn = false

  if (typeof window !== 'undefined' && loading) return null

  if (session) {
    isLoggedIn = true
  }

  if (router.isFallback) return <p>Loading</p>
  return (
    <>
      <header className={classes.header}></header>
      <div className={classes.container}>
        <Sidebar>
          {allCategories.map(c => <Section key={c.id} category={c} /> )}
        </Sidebar>
        <div>
            <input type="button" className={classes.delete} onClick={onDelete} value={`${loading ? "Deleting..." : "Delete"}`} />

            <p>Title</p>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title} /> <br />

            <p>Sub Title</p>
            <input type="text" onChange={e => setSubTitle(e.target.value)} value={subTitle} />

            <p>Tags</p>

            <select multiple={true} value={tagIds} onChange={handleTagChange}>
              {allTags.map(( tag ) => (
                <option value={tag.id} key={tag.id}>{tag.title}</option>
              ))}
            </select>

            <p>Category</p>

            <select value={categoryId} onChange={e => setCategoryId(parseInt(e.target.value, 10))}>
              <option value="Select" disabled={true}>Select</option>
              {allCategories.map(( category ) => (
                <option value={category.id} key={category.id}>{category.title}</option>
              ))}
            </select>

            <div style={{ color: "black !important" }} dangerouslySetInnerHTML={createMarkup()} />

            <Editor
              value={content}
              apiKey='9c25oo520sw89ieq80brjufk62corkqblol4420sn808a1i0'
              initialValue="<p>This is the initial content of the editor</p>"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help'
              }}
              onEditorChange={handleContent}
            />

            <input type="button" onClick={onSubmit} value="submit" />
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await prisma.post.findMany({
    select: { id: true}
  })

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() }
  }))


  return { paths, fallback: true }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps(context) {
  const tags = await prisma.tag.findMany({})
  const categories = await prisma.category.findMany({})
  const { params } = context;
  const post = await prisma.post.findFirst({
    where: { 
      id: parseInt(params.id) 
    },
    include: {
      tags: {
        include: {
          tag: true
        }
      }
    }
  })
  const session = await getSession(context)
  return { props: { post, session, allTags: tags, allCategories: categories }, revalidate: revalidateTimeout }
}


export default Post;