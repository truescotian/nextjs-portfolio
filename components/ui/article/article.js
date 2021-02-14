import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  article: {
    justifySelf: "stretch",
    padding: "0px 88px",
    fontFamily: "Roboto",
    fontWeight: "500"
  },
  h1: {
    fontSize: "32px",
    color: "rgb(36, 42, 49)",
    fontWeight: "500",
    letterSpacing: "normal",
    borderBottom: "2px solid rgb(230, 236, 241)",
    padding: "40px 0px"
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
  return (
    <article className={classes.article}>
      <h1 className={classes.h1}>{post.title}</h1>
      <h2 className={classes.h2}>{post.subTitle}</h2>
    </article>
  )
}

export default Article;