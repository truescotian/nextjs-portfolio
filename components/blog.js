import React from "react"
import { createUseStyles } from "react-jss";
import { 
  CSSTransition, 
  TransitionGroup 
} from 'react-transition-group';

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexFlow: "row wrap",
    margin: "0 auto"
  },
  blogList: {
    gridColumn: "3",
    margin: "30px auto",
    display: "flex",
    flexFlow: "column nowrap", 
    justifyContent: "flex-start",
    maxWidth: "800px"
  },
  aside: {
    margin: "30px",
    marginRight: "70px",
    marginTop: "30px",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    transition: "opacity 1s ease, transform 1s ease",
  },
  asideTitle: {
    textAlign: "center",
    color: "#8f9cb9",
    fontWeight: "500",
    letterSpacing: "3px",
    fontSize: "34px",
    margin: "0px",
  },
  asideDescription: {
    letterSpacing: "0.4px",
    color: "#fff"
  },
  hr: {
    width: "100%",
    color: "gray",
    margin: "20px 0px"
  },
  blogItem: {
    cursor: "pointer",
    display: "relative",
    padding: "10px",
    paddingLeft: "20px",
    boxSizing: "border-box",
    minWidth: "800px",
    maxWidth: "800px",
    minHeight: "100px",
    borderLeft: "1px solid #ffffff4d",
    color: "#fff",
    transform: "translateX(10%)",
    transition: "opacity 1s ease, transform 1s ease",
    opacity: "0",
    marginBottom: "40px"
  },
  h1: {
    color: "#fff",
    fontSize: "22px",
    fontWeight: "500",
    letterSpacing: "0"
  },
  p: {
    color: "#ffffff9e",
    fontWeight: "400",
    letterSpacing: "0"
  },
  enterActive: {
    transform: "translateX(0%)",
    opacity: "1",
  },
  enterDone: {
    transform: "translateX(0%)",
    opacity: "1",
  },
  exitActive: {
    transform: "translateX(10%)",
    opacity: "0",
  },
  filterButton: {
    width: "auto",
    textAlign: "center",
    border: "0px",
    padding: "10px 20px",
    borderRadius: "5px",
    color: "#fff",
    fontWeight: "500",
    cursor: "pointer",
    background: "linear-gradient(to left, #131313 50%, #fff 50%)",
    backgroundSize: "200% 100%",
    backgroundPosition: "right bottom",
    transition: "all 0.5s ease",
    "&:hover": {
      color: "#526693",
      backgroundPosition: "left bottom"
    }
  },
  btnEnter: {
    opacity: "0",
    transform: "translateX(-50px)"
  },
  btnEnterActive: {
    opacity: "1",
    transform: "translateX(0px)",
  },
  btnExit: {
    transform: "translateX(0px)",
    opacity: "1"
  },
  btnExitActive: {
    transform: "translateX(-10px)",
    opacity: "0.2",
  },
  btnExitDone: {
    transform: "translateX(-25px)",
    opactiy: "0"
  },
  btnAppear: {
    transform: "translateX(-25px)",
    opacity: "0"
  },
  btnAppearActive: {
    transform: "translateX(0px)",
    opacity: "1",
  }
})

const Blog = ({ categories }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>

      <TransitionGroup component={null}>
        {categories.map(({ id, title, topics }) => (
            <>
              <CSSTransition 
                in={true} 
                unmountOnExit
                classNames={{
                  enter: classes.btnEnter,
                  enterActive: classes.btnEnterActive,
                  exit: classes.btnExit,
                  exitActive: classes.btnExitActive,
                  exitDone: classes.btnExitDone,
                  appear: classes.btnAppear,
                  appearActive: classes.btnAppearActive,
                }}
                appear
              >
                <div className={classes.aside}>
                  <p className={classes.asideTitle}>{title}</p>
                  <p className={classes.asideDescription}>Browse through my selection of {title} articles.</p>
                  <button className={classes.filterButton}>All articles about {title} -></button>
                </div>
              </CSSTransition>

              <div className={classes.blogList}>
                <TransitionGroup component={null}>
                  {topics.map(({ id, posts }) => (
                    <>
                      {posts.map(({ postId, post }) => post ? (
                        <CSSTransition
                          key={id}
                          in={true} 
                          timeout={0}
                          unmountOnExit
                          classNames={{
                            enter: classes.enterActive,
                            enterDone: classes.enterDone,
                            exit: classes.exitActive
                          }}
                          appear
                        >
                          <div className={classes.blogItem}>
                            <h1 className={classes.h1}>{post.title}</h1>
                            <p className={classes.p}>{post.subTitle}</p>
                          </div>
                        </CSSTransition>
                      ): null)}
                    </>
                  ))}
                </TransitionGroup>
              </div>
            </>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default Blog;
