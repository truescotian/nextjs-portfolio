import React from "react"
import Head from "next/head"

import prisma from "../../lib/prisma"

import { useRouter } from 'next/router'
import { revalidateTimeout } from "../../utils/utils"

import Article from "../../components/ui/article/article"
import Layout from "../../components/ui/blog/layout"

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) return <p>Loading</p>
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {post && <Article post={post} />}
    </Layout>
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