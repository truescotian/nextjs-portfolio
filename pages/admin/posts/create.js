import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useRouter } from 'next/router'
import prisma from "../../../lib/prisma"

import CreateTag from "../../../components/ui/tag/create"

const Create = ({ allTags, allCategories }) => {
  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("")
  const [content, setContent] = useState("")
  const [tagIds, setTagIds] = useState([])
  const [categoryId, setCategoryId] = useState("Select")
  const [toggleAddTag, setToggleAddTag] = useState(false)
  const [categoryValue, setCategoryValue] = useState("")
  const [tags, setTags] = useState(allTags)
  const [categories, setCategories] = useState(allCategories)
  const [toggleAddCategory, setToggleAddCategory] = useState(false)
  const router = useRouter()
  const classes = useStyles()
  
  const handleContent = (content, editor) => setContent(content);

  function createMarkup () {
    return { __html: content }
  }

  const onToggleAddTag = () => setToggleAddTag(!toggleAddTag);

  const onToggleAddCategory = () => setToggleAddCategory(!toggleAddCategory);

  const onCreateCategory = async () => {
    try {
      const body = {
        title: categoryValue
      }
      const res = await fetch(`http://localhost:3000/api/categories/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      setCategoryValue("")
      onToggleAddCategory();
      setCategories([...categories, data])
      console.debug("Created")
    } catch (error) {
      console.error(error)
    }
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

  const onSubmit = async e => {
    e.preventDefault();

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
      const res = await fetch(`http://localhost:3000/api/posts/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      router.push(`http://localhost:3000/posts/${data.id}`)
    } catch (error) {
      console.error(error)
    }
  }

  const onChangeCategory = e => setCategoryValue(e.target.value)

  function onCreateTag(tag) {
    onToggleAddTag()
    setTags([...tags, tag]) 
  }

  return (
    <>
      <p>Title</p>
      <input type="text" onChange={e => setTitle(e.target.value)} value={title} /> <br />

      <p>Sub Title</p>
      <input type="text" onChange={e => setSubTitle(e.target.value)} value={subTitle} />

      <p>Tags</p>

      <select multiple={true} value={tagIds} onChange={handleTagChange}>
        {tags.map(( tag ) => (
          <option value={tag.id} key={tag.id}>{tag.title}</option>
        ))}
      </select>

      <br />

      <button onClick={onToggleAddTag}>+ Add Tag</button>

      {toggleAddTag && <CreateTag callback={onCreateTag} /> }

      <p>Category</p>

      <select value={categoryId} onChange={e => setCategoryId(parseInt(e.target.value, 10))}>
        <option value="Select" disabled={true}>Select</option>
        {categories.map(( category ) => (
          <option value={category.id} key={category.id}>{category.title}</option>
        ))}
      </select>

      <br />

      <button onClick={onToggleAddCategory}>+ Add Category</button>

      {toggleAddCategory &&
        <div className={classes.createTag}>
          <input type="text" onChange={onChangeCategory} value={categoryValue} name="category" />
          <button onClick={onCreateCategory}>Save</button>
        </div>
      }

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
    </>
  );
}

export async function getServerSideProps({ query }) {
  const tags = await prisma.tag.findMany({})
  const categories = await prisma.category.findMany({})
  return { props: { allTags: tags, allCategories: categories } }
}

export default Create;
