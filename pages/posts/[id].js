import React from "react";
import { createUseStyles } from "react-jss";
import Article from "../../components/ui/article/article";
import Sidebar from "../../components/ui/article/sidebar/sidebar";
import Section from "../../components/ui/article/sidebar/section";
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
    gridTemplateColumns: "1fr 1fr 1fr",
    color: "#000"
  }
})

const Post = (props) => {
  const classes = useStyles()
  return (
    <>
      <header className={classes.header}></header>
      <div className={classes.container}>
        <Sidebar>
          {props.categories.map(c => <Section key={c.id} category={c} /> )}
        </Sidebar>
        {props.post && <Article post={props.post} />}
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await prisma.post.findMany({
    select: { id: true}
  })
  let paths = []
  for (const post of posts) {
    paths.push({params: { id: post.id.toString() }});
  }

  return {
    paths,
    fallback: false
  }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps({ params }) {
  const post = await prisma.post.findFirst({
    where: { id: parseInt(params.id) },
  })
  const categories = await prisma.category.findMany({
    include: {
      topics: {
        select: { id: true, title: true },
      },
    },
  })
  return { props: { post, categories } }
}


export default Post;