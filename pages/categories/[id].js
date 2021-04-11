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
  }
})

const Category = ({ categories, params }) => {
  const classes = useStyles();
  const router = useRouter();

  const onCreate = () => {
    router.push("http://localhost:3000/posts/create");
  }

  if (router.isFallback) return <p>Loading</p>

  const selectedCategory = categories.find((category) => category.id = parseInt(params.id))

  return (
    <>
      <header className={classes.header}></header>
      <div className={classes.container}>
        <Sidebar>
          {categories.map(c => <Section key={c.id} category={c} /> )}
        </Sidebar>
        <div className={classes.articlesContainer}>
          <input type="button" onClick={onCreate} value="Create Post" />
          <h1 className={classes.mostRecent}>Most Recent:</h1>
          <PostList posts={selectedCategory.posts} />
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
  const categories = await prisma.category.findMany({
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
  return { props: { categories, params }, revalidate: revalidateTimeout }
}

export default Category;