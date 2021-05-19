import React from "react";
import { createUseStyles } from "react-jss";
import prisma from "../../lib/prisma";
import { useRouter } from 'next/router';

import { revalidateTimeout } from "../../utils/utils";

import Sidebar from "../../components/ui/article/sidebar/sidebar";
import Section from "../../components/ui/article/sidebar/section";
import PostList from "../../components/ui/list/postList";

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

const Category = ({ category, params }) => {
  const classes = useStyles();
  const router = useRouter();


  if (router.isFallback) return <p>Loading</p>

  return (
    <>
      <header className={classes.header}></header>
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.articlesContainer}>
          <h1 className={classes.mostRecent}>Most Recent:</h1>
          <PostList posts={category.posts} />
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const categories = await prisma.category.findMany({
    select: { id: true}
  })

  const paths = categories.map((category) => ({
    params: { id: category.id.toString() }
  }))

  return { paths, fallback: true }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps({ params }) {
  const category = await prisma.category.findUnique({
    where: { id: Number(params.id) },
    include: {
      posts: {
        include: {
          tags: {
            include: { tag: true }
          }
        },
      },
    },
  })
  return { props: { category, params }, revalidate: revalidateTimeout }
}

export default Category;