import prisma from "../../../lib/prisma";
import { createUseStyles } from "react-jss";
import { revalidateTimeout } from "../../../utils/utils";
import { useRouter } from 'next/router';
import Sidebar from "../../../components/ui/article/sidebar/sidebar";
import Link from 'next/link'

const useStyles = createUseStyles({
  article: {
    justifySelf: "stretch",
    fontFamily: "Roboto",
    fontWeight: "500",
  },
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
  asideRight: {
    justifySelf: "stretch"
  },
  articlesContainer: {
    padding: "0px 88px"
  },
  mostRecent: {
    padding: "20px 0px",
    fontSize: "32px",
    fontWeight: "500",
    letterSpacing: "normal",
    fontFamily: "Roboto",
  },
  h1: {
    marginTop:"40px",
    marginBottom:"30px",
    padding: "40px 0px",
    paddingBottom: "0px",
    fontSize: "32px",
    fontWeight: "500",
    letterSpacing: "normal",
    borderTop: "2px solid rgb(230, 236, 241)",
    fontFamily: "Roboto",
    "& a": {
      color: "rgb(36, 42, 49)",
      textDecoration: "none"
    }
  },
  h2: {
    color: "rgb(66, 179, 244)",
    fontWeight: "500",
    letterSpacing: "0.3px",
    fontSize: "16px",
  }
})

const PostTopic = ({ posts }) => {
  const classes = useStyles();
  const router = useRouter();

  const onCreate = () => {
    router.push("http://localhost:3000/posts/create");
  }

  if (router.isFallback) return <p>Loading</p>
  return (
    <>
      <header className={classes.header}></header>
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.articlesContainer}>
          <input type="button" onClick={onCreate} value="Create Post" />
          <h1 className={classes.mostRecent}>Most Recent:</h1>
          {posts.map(f => (
            <article key={f.id} className={classes.article}>
              <h1 className={classes.h1}>
                <Link href={`/posts/${f.id}`}>
                  <a>{f.title}</a>
                </Link>
              </h1>
              <h2 className={classes.h2}>{f.subTitle}</h2>
            </article>
          ) )}
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await prisma.post.findMany({
    where: { 
      published: true,
      topics: {
        some: {
          topicId: 1
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    },
  })

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() }
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const id = parseInt(params.id, 10);

  const posts = await prisma.post.findMany({
    where: { 
      published: true,
      topics: {
        some: {
          topicId: id
        }
      }
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

  return { props: { posts }, revalidate: revalidateTimeout }
}

export default PostTopic;