import React from "react";

import Head from "next/head"
import { useRouter } from 'next/router'

import { useSession, getSession } from "next-auth/client"

const Index = () => {
  const [session, loading] = useSession()
  const router = useRouter()

  let isLoggedIn = false

  if (typeof window !== 'undefined' && loading) return null

  if (session) {
    isLoggedIn = true
  }

  function onCreatePost() {
    router.push(`http://localhost:3000/admin/posts/create`);
  }

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <button onClick={onCreatePost}>Create Post</button>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return { props: { session } }
}

export default Index;