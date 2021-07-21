import React, { useState } from 'react'
import { createUseStyles } from "react-jss";
import { Editor } from '@tinymce/tinymce-react'
import { useRouter } from 'next/router'
import prisma from "../../../lib/prisma"

import CreateTag from "../../../components/ui/tag/create"
import CreateCategory from "../../../components/ui/category/create"
import Article from "../../../components/ui/article/article"

import { useSession, getSession } from "next-auth/client"

const useStyles = createUseStyles({
  container: {
    width: "80%",
    margin: "0 auto"
  },
  input: {
    marginTop: "20px",
    "& label": {
      color: "#000",
    }
  },
  btnSubmit: {
    border: "0px",
    padding: "10px 30px",
    margin: "20px 0px",
    float: "right",
    backgroundColor: "rgb(33, 33, 43)",
    color: "#fff"
  }
});

const Create = ({ allTags, allCategories }) => {
  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("")
  const [content, setContent] = useState("")
  const [tagIds, setTagIds] = useState([])
  const [categoryId, setCategoryId] = useState("Select")
  const [toggleAddTag, setToggleAddTag] = useState(false)
  const [tags, setTags] = useState(allTags)
  const [categories, setCategories] = useState(allCategories)
  const [toggleAddCategory, setToggleAddCategory] = useState(false)
  const router = useRouter()
  const [session, loading] = useSession()
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  
  const handleContent = (content, editor) => setContent(content);

  const onToggleAddTag = () => setToggleAddTag(!toggleAddTag);

  const onToggleAddCategory = () => setToggleAddCategory(!toggleAddCategory);

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

  const onSubmit = async e => {
    e.preventDefault()

    if (isLoading) return;

    setIsLoading(true)

    let selectedTags = [];
    for (let i=0;i<tagIds.length;i++) {
      selectedTags = [...selectedTags, { tagId: tagIds[i] }]
    }
    
    try {
      const body = {
        title: title,
        subTitle: subTitle,
        content: content,
        published: true,
        authorId: 1,
        categoryId,
        tagIds: selectedTags
      }
      const res = await fetch(`${window.location.origin}/api/posts/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) {
        throw res;
      }
      const data = await res.json()
      router.push(`${window.location.origin}/posts/${data.id}`)
    } catch (error) {
      console.error(error)
    }

    setIsLoading(false)
  }

  function onCreateTag(tag) {
    onToggleAddTag()
    setTags([...tags, tag]) 
  }

  function onCreateCategory(category) {
    onToggleAddCategory()
    setCategories([...categories, category])
  }

  let isLoggedIn = false

  if (typeof window !== 'undefined' && loading) return null

  if (session) {
    isLoggedIn = true
  }

  if (!isLoggedIn) return <h1 style={{ color: "#000" }}>Unauthorized</h1>;

  return (
    <form className={classes.container} onSubmit={onSubmit}>

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
        <select required id="tagIds" multiple={true} value={tagIds} onChange={handleTagChange}>
          {tags.map(( tag ) => (
            <option value={tag.id} key={tag.id}>{tag.title}</option>
          ))}
        </select>
      </div>

      <br />

      <input type="button" onClick={onToggleAddTag} value="+ Create Tag" />

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

      <input type="button" onClick={onToggleAddCategory} value="+ Create Category" />

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

      <button className={classes.btnSubmit} type="submit">{isLoading ? "Creating..." : "Submit"}</button>
    </form>
  );
}

export async function getServerSideProps(context) {
  const tags = await prisma.tag.findMany({})
  const categories = await prisma.category.findMany({})
  const session = await getSession(context)

  return { props: { allTags: tags, allCategories: categories, session } }
}

export default Create;
