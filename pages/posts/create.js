import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from 'next/router'
import prisma from "../../lib/prisma";

const Create = ({ allTopics }) => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [topicIds, setTopicIds] = useState([]);
  const router = useRouter();
  
  const handleContent = (content, editor) => setContent(content);

  function createMarkup () {
    return { __html: content }
  }

  const handleTopicChange = e => {
    const id = parseInt(e.target.value, 10);

    // check if topic is already selected
    let foundIdx = -1;
    for (let i=0; i<topicIds.length;i++) {
      if (topicIds[i] === id) {
        foundIdx = i;
        break;
      }
    }

    // if topic is selected, remove it
    if (foundIdx > -1) {
      let newTopics = topicIds.splice(foundIdx, 1);
      setTopicIds(newTopics);
    } else {
      setTopicIds([...topicIds, id])
    }
  }

  const onSubmit = async e => {
    e.preventDefault();

    let selectedTopics = [];
    for (let i=0;i<topicIds.length;i++) {
      selectedTopics = [...selectedTopics, { topicId: topicIds[i] }]
    }
    
    try {
      const body = {
        title: title,
        subTitle: subTitle,
        content: content,
        published: true,
        authorId: 1,
        topicIds: selectedTopics
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

      <p>Topics</p>

      <select multiple={true} value={topicIds} onChange={handleTopicChange}>
        {allTopics.map(( topic ) => (
          <option value={topic.id} key={topic.id}>{topic.title}</option>
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
  const topics = await prisma.topic.findMany({})
  return { props: { allTopics: topics } }
}

export default Create;
