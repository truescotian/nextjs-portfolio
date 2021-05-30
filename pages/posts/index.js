import React from "react";
import { createUseStyles } from "react-jss";
import Head from "next/head"

import Sidebar from "../../components/ui/article/sidebar/sidebar";
import PostList from "../../components/ui/list/postList";
import prisma from "../../lib/prisma";

const useStyles = createUseStyles({
  header: {
    height: "80px",
    width: "100%",
    backgroundColor: "#fff",
    borderBottom: "1px solid rgb(212, 218, 223)",
    boxShadow: "rgba(116, 129, 141, 0.1) 0px 3px 8px 0px",
    boxSizing: "border-box"
  },
  container: {
    height: "calc(100% - 80px)",
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 3fr 1fr",
    color: "#000"
  },
  articlesContainer: {
    padding: "0px 88px"
  },
  mostRecent: {
    display: "flex",
    flexFlow:"row nowrap",
    padding: "20px 0px",
    fontSize: "32px",
    fontWeight: "500",
    letterSpacing: "normal",
    margin: "26.56px 0px",
    padding: "20px 0px"
  }
})

const Posts = (props) => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={classes.header}></header>
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.articlesContainer}>
          <h1 className={classes.mostRecent}>Most Recent</h1>
          <PostList posts={props.posts} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  const posts = await prisma.post.findMany({
    where: { 
      published: true,
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return { props: { posts } }
}

export default Posts;