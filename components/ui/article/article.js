import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useRouter } from 'next/router'

const useStyles = createUseStyles({
  article: {
    justifySelf: "stretch",
    padding: "0px 88px",
    fontFamily: "Moderat",
    letterSpacing:"normal",
  },
  h1: {
    display: "flex",
    flexFlow:"row nowrap",
    padding: "20px 0px",
    fontSize: "32px",
    fontWeight: "500",
    letterSpacing: "normal",
    borderBottom: "2px solid rgb(230, 236, 241)",
  },
  h2: {
    color: "rgb(66, 179, 244)",
    fontWeight: "500",
    letterSpacing: "0.3px",
    fontSize: "16px",
  },
  delete: {
    marginLeft: "20px",
  },
})

const Article = ({ post }) => {
  const classes = useStyles()

  function createMarkup () {
    return { __html: post.content }
  }
  
  return (
    <article className={classes.article}>
      <h1 className={classes.h1}>
        {post.title}
      </h1>
      <h2 className={classes.h2}>{post.subTitle}</h2>

      <div dangerouslySetInnerHTML={createMarkup()} />
    </article>
  )
}

export default Article;