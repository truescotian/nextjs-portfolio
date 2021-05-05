import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from 'next/router'
import prisma from "../../../lib/prisma";

const Create = ({ allTags, allCategories }) => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagIds, setTagIds] = useState([]);
  const [categoryId, setCategoryId] = useState("Select");
  const router = useRouter();
  
  const handleContent = (content, editor) => setContent(content);

  function createMarkup () {
    return { __html: content }
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

  return (
    <>
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
    </>
  );
}

export async function getServerSideProps({ query }) {
  const tags = await prisma.tag.findMany({})
  const categories = await prisma.category.findMany({})
  return { props: { allTags: tags, allCategories: categories } }
}

export default Create;
