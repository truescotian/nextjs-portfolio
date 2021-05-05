import React from "react";
import { createUseStyles } from "react-jss";
import Sidebar from "../../components/ui/article/sidebar/sidebar";
import PostList from "../../components/ui/list/postList";
import prisma from "../../lib/prisma";
import { useRouter } from 'next/router'

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
})

const Posts = (props) => {
  const classes = useStyles()
  const router = useRouter()

  const onCreate = () => {
    router.push("http://localhost:3000/posts/admin/posts/create");
  }

  return (
    <>
      <header className={classes.header}></header>
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.articlesContainer}>
          <input type="button" onClick={onCreate} value="Create Post" />
          <h1 className={classes.mostRecent}>Most Recent:</h1>
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