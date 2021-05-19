import React, { useState } from "react";
import {createUseStyles} from 'react-jss'
import ListItem from "../components/ui/list/listItem";
import { homeData } from "../data/home";
import Contact from "../components/contact";
import SliderComponent from "../components/sliderComponent";
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai"
import Blog from "../components/blog";
import prisma from "../lib/prisma";
import { revalidateTimeout } from "../utils/utils";
import { CSSTransition } from "react-transition-group";

const tabletBreak = '@media (max-width: 1250px)';
const mobileBreak = '@media (max-width: 720px)';

const useStyles = createUseStyles({
  container: {
    height: '100%',
    backgroundColor: "#171717",
    overflow: "auto",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "space-between"
  },
  contentContainer: {
    height: '100%',
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "space-between",
    transition: "transform 0.75s cubic-bezier(0.75, 0.25, 0, 1.05)",
  },
  content: {
    display: 'grid',
    gridTemplateColumns: "1fr 4fr",
    padding: "150px",
    paddingBottom: "0px",
    paddingRight: "0px",
    boxSizing: "border-box",
    [tabletBreak]: {
      gridTemplateColumns: "1fr",
      padding: "20px",
      paddingRight: "0px",
    },
    [mobileBreak]: {
      padding: "20px",
      paddingRight: "0px",
    }
  },
  left: {
    fontSize: "14px",
    letterSpacing: "normal",
  },
  list: {
    display: "flex",
    flexFlow: "column nowrap",
    [mobileBreak]: {
      marginTop: "30px",
    },
    "& li:not(:first-child)": {
      marginTop: "60px"
    }
  },
  span: {
    color: "grey",
    "&:hover": {
      color: "#fff"
    }
  },
  socials: {
    display: "flex",
    flexFlow: "row nowrap",
    width: "min-content",
    margin: "0 auto",
    padding: "0px 20px",
    paddingTop: "10px",
    justifyContent: "center",
    alignItems: "center"
  },
  socialIcon: {
    padding: "10px",
    cursor: "pointer"
  },
  contentEnter: {
    transform: "translateX(-100%)",
  },
  contentEnterActive: {
    transform: "translateX(0px)",
  },
  contentExit: {
    transform: "translateX(0px)",
  },
  contentExitActive: {
    transform: "translateX(-100%)",
  },
  contentExitDone: {
    transform: "translateX(-100%)",
  },
  contentAppear: {
    transform: "translateX(-100px)",
  },
  contentAppearActive: {
    transform: "translateX(0px)",
  },
})

const pages = {
  contact: Contact,
  blog: Blog
};

const Icon = ({ classes, href, children }) => {
  return (
    <a href={href} target="_blank" style={{color: "#fff"}}>
      <div className={classes.socialIcon}>{children}</div>
    </a>
  )
}

const Home = (props) => {
  const classes = useStyles();
  let [page, setPage] = useState(null);
  const [show, setShow] = useState(false);

  function onSetShow(page) {
    setShow(true);
    setPage(page);
  }

  return (
    <main className={classes.container}>

      <CSSTransition
        in={!show}
        classNames={{
          enter: classes.contentEnter,
          enterActive: classes.contentEnterActive,
          exit: classes.contentExit,
          exitActive: classes.contentExitActive,
          exitDone: classes.contentExitDone,
          appear: classes.contentAppear,
          appearActive: classes.contentAppearActive,
        }}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              <div className={classes.left}><span className={classes.span}>Greg Miller</span></div>
              <ol className={classes.list}>
                {homeData.map((o, index) => <ListItem key={index} {...o} onClick={() => onSetShow(o.page)} />)}
              </ol>
            </div>

            <div className={classes.socials}>
              <Icon classes={classes} href={"https://www.linkedin.com/in/gregpmillr/"}>
                <FaLinkedinIn size={"2em"} />
              </Icon>
              <Icon classes={classes} href={"https://github.com/truescotian?tab=repositories"}>
              <AiFillGithub size={"2em"} />
            </Icon>
            </div>
          </div>
      </CSSTransition>


      <SliderComponent setPage={setPage} setShow={setShow} show={show} page={page} pages={pages} {...props} />
    </main>
  )
}

export async function getStaticProps() {
  const categories = await prisma.category.findMany({
    include: { posts: true },
  });

  return { props: { categories }, revalidate: revalidateTimeout }
}

export default Home;