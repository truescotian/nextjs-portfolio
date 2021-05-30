import React from "react"
import prisma from "../../lib/prisma"
import { useRouter } from "next/router"
import Head from "next/head"

import { revalidateTimeout } from "../../utils/utils"

import PostList from "../../components/ui/list/postList"
import Layout from "../../components/ui/blog/layout"

const Category = ({ category }) => {
  const router = useRouter();

  if (router.isFallback) return <p>Loading</p>

  return (
    <Layout>
      <Head>
        <title>Blog - {category.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Most Recent:</h1>
      <PostList posts={category.posts} />
    </Layout>
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