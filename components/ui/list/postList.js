import React from "react";
import { createUseStyles } from "react-jss";
import Link from 'next/link'

const useStyles = createUseStyles({
  article: {
    justifySelf: "stretch",
    fontFamily: "Roboto",
    fontWeight: "500",
  },
  container: {
    height: "calc(100% - 80px)",
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 3fr 1fr",
    color: "#000"
  },
  asideRight: {
    justifySelf: "stretch"
  },
  mostRecent: {
    padding: "20px 0px",
    fontSize: "32px",
    fontWeight: "500",
    letterSpacing: "normal",
    fontFamily: "Roboto",
  },
  h1: {
    marginTop:"40px",
    marginBottom:"30px",
    padding: "40px 0px",
    paddingBottom: "0px",
    fontSize: "32px",
    fontWeight: "500",
    letterSpacing: "normal",
    borderTop: "2px solid rgb(230, 236, 241)",
    fontFamily: "Roboto",
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

const PostList = ({ posts }) => {
  const classes = useStyles();
  
  return (
    <>
      {posts.map(f => (
        <article key={f.id} className={classes.article}>
          <h1 className={classes.h1}>
            <Link href={`/posts/${f.id}`}>
              <a>{f.title}</a>
            </Link>
          </h1>
          <h2 className={classes.h2}>{f.subTitle}</h2>
        </article>
      ) )}
    </>
  )
}

export default PostList