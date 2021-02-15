import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from 'next/router'


const Create = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  
  const handleContent = (content, editor) => {
    setContent(content);
  }

  function createMarkup () {
    return { __html: content }
  }

  const onSubmit = async e => {
    e.preventDefault();
    
    try {
      const body = {
        title: title,
        subTitle: subTitle,
        content: content,
        published: true,
        authorId: 1,
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

export default Create;
