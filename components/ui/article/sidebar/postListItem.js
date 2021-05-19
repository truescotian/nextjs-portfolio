import React from "react";
import { createUseStyles } from "react-jss";
import Link from 'next/link'
import { useRouter } from 'next/router'

const useStyles = createUseStyles({
  header: {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.5",
    color: "rgb(59, 69, 78)",
    letterSpacing: "0.3px",
    display: "block",
    cursor: "pointer",
    padding: "7px 24px 7px 16px",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "rgb(230, 236, 241)"
    }
  },
  headerSelected: {
    backgroundColor: "#fff",
    letterSpacing: "0.3px",
    color: "rgb(66, 179, 244)",
    fontSize: "14px",
    cursor: "pointer",
    display: "block",
    padding: "7px 24px 7px 16px",
    border: "1px solid rgb(230, 236, 241) !important",
    "&:hover": {
      backgroundColor: "#fff"
    }
  }
})

const PostListItem = ({ post }) => {
  const classes = useStyles();
  const router = useRouter()
  const active = post.id === parseInt(router.query.id, 10) ? true : false

  return (
    <Link href="/posts/[id]" as={`/posts/${post.id}`}>
      <a className={`${classes.header} ${active && classes.headerSelected}`}>{post.title}</a>
    </Link>
  )
}

export default PostListItem;