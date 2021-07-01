import React, { useState, useEffect } from 'react'
import { createUseStyles } from "react-jss"
import prisma from "../../../lib/prisma"

import Sidebar from "../../../components/ui/article/sidebar/sidebar"
import Section from "../../../components/ui/article/sidebar/section"
import CreateTag from "../../../components/ui/tag/create"
import CreateCategory from "../../../components/ui/category/create"

import Head from "next/head"
import { useRouter } from 'next/router'
import { revalidateTimeout } from "../../../utils/utils"
import Article from "../../../components/ui/article/article"
import { useSession, getSession } from "next-auth/client"
import { Editor } from '@tinymce/tinymce-react'

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
  },
  form: {
    width: "80%",
    margin: "0 auto"
  },
  input: {
    marginTop: "20px",
    "& label": {
      color: "#000",
    }
  },
  btn: {
    border: "0px",
    padding: "10px 30px",
    margin: "20px 0px",
    marginRight: "20px",
    backgroundColor: "rgb(33, 33, 43)",
    color: "#fff"
  }
})

const Post = ({ post, allTags, allCategories }) => {
  const classes = useStyles()
  const router = useRouter()
  const [title, setTitle] = useState(post?.title || "")
  const [subTitle, setSubTitle] = useState(post?.subTitle || "");
  const [content, setContent] = useState(post?.content || "");
  const [tagIds, setTagIds] = useState(post?.tags.map(postTag => postTag.tag.id) || []);
  const [categoryId, setCategoryId] = useState(post?.categoryId || 0);
  const [tags, setTags] = useState(allTags || [])
  const [categories, setCategories] = useState(allCategories || [])
  const [toggleAddTag, setToggleAddTag] = useState(false)
  const [toggleAddCategory, setToggleAddCategory] = useState(false)
  const [session, loading] = useSession()
  const [isLoading, setIsLoading] = useState(false);

  const onToggleAddTag = () => setToggleAddTag(!toggleAddTag);

  const onToggleAddCategory = () => setToggleAddCategory(!toggleAddCategory);

  const onDelete = async () => {
    if (isLoading) return;

    setIsLoading(true);

    await fetch(`http://localhost:3000/api/posts/${post.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        router.push(`http://localhost:3000/posts`)
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
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

  const handleContent = (content, editor) => setContent(content);

  const onSubmit = async e => {
    e.preventDefault();

    if (isLoading) return;
  
    setIsLoading(true)

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
      if (!res.ok) {
        throw res;
      }
      router.push(`http://localhost:3000/posts/${post.id}`)
    } catch (error) {
      console.error(error)
    }

    setIsLoading(false)
  }

  let isLoggedIn = false

  if (typeof window !== 'undefined' && loading) return null

  if (session) {
    isLoggedIn = true
  }

  if (!isLoggedIn) return <h1 style={{ color: "#000" }}>Unauthorized</h1>;

  if (!post) return <Error />

  function onCreateTag(tag) {
    onToggleAddTag()
    setTags([...tags, tag]) 
  }

  function onCreateCategory(category) {
    onToggleAddCategory()
    setCategories([...categories, category])
  }

  if (router.isFallback) return <p>Loading</p>
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      </Head>
      <header className={classes.header}></header>
      <div className={classes.container}>
        <Sidebar>
          {categories.map(c => <Section key={c.id} category={c} /> )}
        </Sidebar>
        <form className={classes.form} onSubmit={onSubmit}>

          <div className={classes.input}>
            <label htmlFor="title">Title</label><br/>
            <input required maxLength="300" type="text" id="title" onChange={e => setTitle(e.target.value)} value={title} /> <br />
          </div>

          <div className={classes.input}>
            <label htmlFor="subTitle">Sub Title</label><br/>
            <input required maxLength="300" type="text" id="subTitle" onChange={e => setSubTitle(e.target.value)} value={subTitle} />
          </div>

          <div className={classes.input}>
            <label htmlFor="tagIds">Tags</label><br/>
            <select id="tagIds" multiple={true} value={tagIds} onChange={handleTagChange}>
              {tags.map(( tag ) => (
                <option value={tag.id} key={tag.id}>{tag.title}</option>
              ))}
            </select>
          </div>

          <br />

          <button onClick={onToggleAddTag}>+ Add Tag</button>

          {toggleAddTag && <CreateTag callback={onCreateTag} /> }

          <div className={classes.input}>
            <label htmlFor="category">Category</label><br/>
            <select id="category" value={categoryId} onChange={e => setCategoryId(parseInt(e.target.value, 10))}>
              <option value="Select" disabled={true}>Select</option>
              {categories.map(( category ) => (
                <option value={category.id} key={category.id}>{category.title}</option>
              ))}
            </select>
          </div>

          <br />

          <button onClick={onToggleAddCategory}>+ Add Category</button>

          {toggleAddCategory && <CreateCategory callback={onCreateCategory} /> }

          <Article post={{
            content,
            title,
            subTitle
          }} />
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
                'insertdatetime media table paste code help wordcount textcolor codesample image'
              ],
              toolbar:
                'undo redo | formatselect | bold italic forecolor backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help | codesample | image',
                codesample_languages: [
                  /*take codesample_languages out to see all of the languages*/
                  { text: 'Go', value: 'go'}
              ],
              image_class_list: [
                {title: 'None', value: ''},
                {title: 'Responsive', value: 'img-responsive'}
              ],
            }}
            onEditorChange={handleContent}
          />

          <input type="button" className={classes.btn} onClick={onDelete} value={`${isLoading ? "Deleting..." : "Delete"}`} />
          <button className={classes.btn} type="submit">{isLoading ? "Saving..." : "Save"}</button>

        </form>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await prisma.post.findMany({
    select: { id: true }
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
  const post = await prisma.post.findUnique({
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