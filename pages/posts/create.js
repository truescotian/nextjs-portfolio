import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends React.Component {
  state = {
    content: '',
  }

  handleEditorChange = (content, editor) => {
    this.setState({ content });
  }

  onSubmit = async e => {
    e.preventDefault();

    try {
      const body = {
        title: "some title",
        subTitle: "some sub title",
        content: this.state.content,
        published: true,
        authorId: 1,
      }
      const res = await fetch(`http://localhost:3000/api/posts/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      console.debug(data)
    } catch (error) {
      console.error(error)
    }
  }

  componentDidMount() {
    const content = localStorage.getItem("content")
    this.setState({ content })
  }

  createMarkup = () => {
    return { __html: this.state.content }
  }

  render() {
    return (
      <>
        <div style={{ color: "black" }} dangerouslySetInnerHTML={this.createMarkup()} />
        <Editor
          value={this.state.content}
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
          onEditorChange={this.handleEditorChange}
        />

        <input type="button" onClick={this.onSubmit} value="submit" />
      </>
    );
  }
}

export default App;
