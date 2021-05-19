import React from "react";
import { createUseStyles } from "react-jss";
import Article from "../../components/ui/article/article";
import Sidebar from "../../components/ui/article/sidebar/sidebar";
import prisma from "../../lib/prisma";

import { useRouter } from 'next/router';
import { revalidateTimeout } from "../../utils/utils";

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

const Post = ({ post }) => {
  const classes = useStyles();
  const router = useRouter();

  if (router.isFallback) return <p>Loading</p>
  return (
    <>
      <header className={classes.header}></header>
      <div className={classes.container}>
        <Sidebar />
        {post && <Article post={post} />}
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await prisma.post.findMany({
    select: { id: true}
  })

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() }
  }))

  return { paths, fallback: true }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps(context) {
  const { params } = context;
  const post = await prisma.post.findFirst({
    where: { id: parseInt(params.id) },
  })
  return { props: { post }, revalidate: revalidateTimeout }
}


export default Post;