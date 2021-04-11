import React from "react";
import { createUseStyles } from "react-jss";
import PostListItem from "./postListItem";

const useStyles = createUseStyles({
  container: {
    overflowY: "scroll",
    fontFamily: "Roboto",
    fontWeight: "500"
  },
  title: {
    fontWeight: "700",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "1.2px",
    color: "rgb(157, 170, 182)",
    display: "block",
    marginBottom: "15px",
    padding: "7px 24px 7px 16px"
  },
  header: {
    fontSize: "14px",
    color: "rgb(59, 69, 78)",
    letterSpacing: "0.3px",
    display: "block",
    cursor: "pointer",
    padding: "7px 24px 7px 16px"
  },
  headerSelected: {
    backgroundColor: "#fff",
    letterSpacing: "0.3px",
    color: "rgb(66, 179, 244)",
    fontSize: "14px",
    cursor: "pointer",
    display: "block",
    padding: "7px 24px 7px 16px",
    border: "1px solid rgb(230, 236, 241) !important"
  }
})

const Section = ({ category }) => {
  const classes = useStyles()
  const { title, posts } = category;
  return (
    <div className={classes.container}>
      <span className={classes.title}>
        {title}
      </span>
      {posts && posts.map(post => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Section;