import React from "react";
import { createUseStyles } from "react-jss";
import Link from 'next/link'
import { useRouter } from 'next/router'

const useStyles = createUseStyles({
  article: {
    justifySelf: "stretch",
    padding: "0px 88px",
    fontFamily: "Roboto",
    fontWeight: "500"
  },
  h1: {
    padding: "20px 0px",
    fontSize: "32px",
    fontWeight: "500",
    letterSpacing: "normal",
    borderBottom: "2px solid rgb(230, 236, 241)",
    "& a": {
      color: "rgb(36, 42, 49)",
      textDecoration: "none"
    }
  },
  h2: {
    color: "rgb(66, 179, 244)",
    fontWeight: "500",
    letterSpacing: "0.3px",
    fontSize: "16px",
  }
})

const Article = ({ post }) => {
  const classes = useStyles()
  const router = useRouter()

  const onDelete = async () => {
    await fetch(`http://localhost:3000/api/posts/${post.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        router.push(`http://localhost:3000/posts`)
      })
  }
  
  function createMarkup () {
    return { __html: post.content }
  }
  
  return (
    <article className={classes.article}>
      <h1 className={classes.h1}>
        <Link href={`/posts/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </h1>
      <h2 className={classes.h2}>{post.subTitle}</h2>

      <input type="button" onClick={onDelete} value="Delete" />

      <div style={{ color: "black !important" }} dangerouslySetInnerHTML={createMarkup()} />

    </article>
  )
}

export default Article;