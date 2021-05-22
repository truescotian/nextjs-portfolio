import React from "react";
import { createUseStyles } from "react-jss";
import prisma from "../../lib/prisma";
import { useRouter } from 'next/router';

import { revalidateTimeout } from "../../utils/utils";

import Sidebar from "../../components/ui/article/sidebar/sidebar";
import PostList from "../../components/ui/list/postList";
import Header from "../../components/ui/blog/header";
import useWindowSize from "../../hooks/useWindowSize";

const tabletBreak = '@media (max-width: 1250px)';

const useStyles = createUseStyles({
  container: {
    height: "calc(100% - 80px)",
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 3fr 1fr",
    color: "#000",
    [tabletBreak]: {
      gridTemplateColumns: "1fr"
    }
  },
  articlesContainer: {
    padding: "0px 88px",
  },
  backdrop: {
    inset: "0px",
    margin: "0px",
    pointerEvents: "auto",
    position: "absolute",
    padding: "0px",
    backgroundColor: "rgba(24, 48, 85, 0.3)",
    boxSizing: "border-box",
    outline: "none",
    height: "100%",
    transition: "background-color 250ms ease-out 0s",
    "& $articlesContainer": {
      zIndex: "-1"
    }
  },
})

const Category = ({ category }) => {
  const classes = useStyles();
  const router = useRouter();
  const { width } = useWindowSize();
  const [toggleHamburger, setToggleHamburger] = React.useState(false);

  if (router.isFallback) return <p>Loading</p>

  return (
    <>
      <Header toggleHamburger={toggleHamburger} setToggleHamburger={setToggleHamburger} />

      <div className={`${classes.container} ${toggleHamburger && width < 1250 && classes.backdrop}`}>
        <Sidebar onClick={() => setToggleHamburger(!toggleHamburger)} isMobile={width < 1250} show={width > 1250 || toggleHamburger}/>
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