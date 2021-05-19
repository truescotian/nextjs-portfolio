import React from "react"
import { createUseStyles } from "react-jss";
import { 
  CSSTransition, 
  TransitionGroup 
} from 'react-transition-group';
import { useRouter } from 'next/router'

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexFlow: "column wrap",
    margin: "0 auto",
    "& > div:not(:first-child)": {
      borderTop: "1px solid grey",
    }
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
    transition: "all .8s cubic-bezier(0.215, 0.61, 0.355, 1) .4s",
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
    transition: "all .6s cubic-bezier(0.215, 0.61, 0.355, 1) .8s",
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
    "&:hover": {
      color: "#526693",
      backgroundPosition: "left bottom"
    }
  },
  btnEnter: {
    opacity: "0",
    transform: "translateX(-500px)"
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
    transform: "translateX(-500px)",
    opacity: "0.2",
  },
  btnExitDone: {
    transform: "translateX(-500px)",
    opactiy: "0"
  },
  btnAppear: {
    transform: "translateX(-100px)",
    opacity: "0"
  },
  btnAppearActive: {
    transform: "translateX(0px)",
    opacity: "1",
  },
  categoryContainer: {
    display: "flex",
    flexFlow: "row nowrap",
  }
})

const Blog = ({ categories }) => {
  const classes = useStyles();
  const router = useRouter()

  function onClickPost(id) {
    router.push(`/posts/${id}`);
  }

  function onClickCategory(id) {
    router.push(`/categories/${id}`)
  }

  return (
    <div className={classes.container}>

      <TransitionGroup component={null}>
        {categories.map(({ id, title, posts }) => (
            <div key={id} className={classes.categoryContainer}>
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
                  <button onClick={() => onClickCategory(id)} className={classes.filterButton}>All articles about {title} -></button>
                </div>
              </CSSTransition>

              <div className={classes.blogList}>
                <TransitionGroup component={null}>
                  {posts.map(({ id, title, subTitle }) => id > 0 ? (
                    <React.Fragment key={id}>
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
                        <div className={classes.blogItem} onClick={() => onClickPost(id)}>
                          <h1 className={classes.h1}>{title}</h1>
                          <p className={classes.p}>{subTitle}</p>
                        </div>
                      </CSSTransition>
                    </React.Fragment>
                  ) : null)}
                </TransitionGroup>
              </div>
            </div>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default Blog;
