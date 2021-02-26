import React from "react";
import { createUseStyles } from "react-jss";
import Article from "../../components/ui/article/article";
import Sidebar from "../../components/ui/article/sidebar/sidebar";
import Section from "../../components/ui/article/sidebar/section";
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
    gridTemplateColumns: "1fr 1fr 1fr",
    color: "#000"
  },
  asideRight: {
    justifySelf: "stretch"
  },
  h1: {
    fontSize: "32px",
    color: "rgb(36, 42, 49)",
    fontWeight: "500",
    letterSpacing: "normal",
    padding: "0px 88px",
    fontFamily: "Roboto",
  },
})

const Posts = (props) => {
  const classes = useStyles()
  const router = useRouter()

  const onCreate = () => {
    router.push("http://localhost:3000/posts/create");
  }
  
  return (
    <>
      <header className={classes.header}></header>
      <div className={classes.container}>
        <Sidebar>
          {props.categories.map(c => <Section key={c.id} category={c} /> )}
        </Sidebar>
        <div>
          <h1 className={classes.h1}>Most Recent:</h1>
          <input type="button" onClick={onCreate} value="Create Post" />
          {props.posts.map(f => <Article key={f.id} post={f} /> )}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  const categories = await prisma.category.findMany({
    include: {
      topics: {
        select: { id: true, title: true, },
      },
    },
  })
  return { props: { posts, categories } }
}

export default Posts;