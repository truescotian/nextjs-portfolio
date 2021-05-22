import React from "react";
import { createUseStyles } from "react-jss";
import PostListItem from "./postListItem";
import { useRouter } from 'next/router'
import Link from 'next/link'

const useStyles = createUseStyles({
  container: {
    overflowY: "scroll",
    fontFamily: "Roboto",
    fontWeight: "500",
    marginTop: "30px",
  },
  title: {
    fontWeight: "500",
    fontSize: "14px",
    letterSpacing: "1.2px",
    lineHeight: "1.5",
    color: "rgb(157, 170, 182)",
    display: "block",
    marginBottom: "15px",
    padding: "7px 24px 7px 16px",
    textDecoration: "none"
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
    color: "rgb(66, 179, 244)",
    border: "1px solid rgb(230, 236, 241) !important"
  }
})

const Section = ({ category }) => {
  const classes = useStyles()
  const router = useRouter()
  const { title, posts, id } = category;
  const active = id === parseInt(router.query.id, 10) ? true : false
  return (
    <div className={classes.container}>
      <Link href="/categories/[id]" as={`/categories/${category.id}`}>
        <a className={`${classes.title} ${active && classes.headerSelected}`}>
          {title}
        </a>
      </Link>
      {posts && posts.map(post => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Section;