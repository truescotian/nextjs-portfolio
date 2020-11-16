import React, { useState } from "react"
import { createUseStyles } from "react-jss";
import { 
  CSSTransition, 
  TransitionGroup 
} from 'react-transition-group';
import { v4 as uuidv4} from 'uuid';

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexFlow: "row wrap",
    margin: "0 auto"
  },
  blogList: {
    gridColumn: "3",
    margin: "0 auto",
    display: "flex",
    flexFlow: "column nowrap", 
    justifyContent: "flex-start"
  },
  aside: {
    margin: "30px",
    marginRight: "70px",
    marginTop: "30px",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  asideTitle: {
    textAlign: "center",
    color: "#8f9cb9",
    fontWeight: "600",
    margin: "0px",
  },
  hr: {
    width: "100%",
    color: "gray",
    margin: "20px 0px"
  },
  filters: {
    display: "flex",
    flexFlow: "column nowrap",
    listStyleType: "none",
    margin: "0px",
    paddingTop: "10px",
    paddingLeft: "15px",
    "& li": {
      color: "#8f9cb9"
    }
  },
  blogItem: {
    cursor: "pointer",
    display: "relative",
    padding: "10px",
    boxSizing: "border-box",
    marginTop: "30px",
    minWidth: "800px",
    maxWidth: "800px",
    minHeight: "100px",
    border: "1px solid #303f63",
    color: "#fff",
    backgroundColor: "#282e3d",
    boxShadow: "-5px 6px 16px -10px rgb(9, 8, 25)",
    transform: "translateX(-10%)",
    transition: "opacity 1s ease, transform 1s ease, background-color 0.5s ease",
    opacity: "0",
    "&:hover": {
      backgroundColor: "#303f63",
    }
  },
  blogItemDate: {
    position: "absolute",
    top: "0",
    right: "0",
    color: "#fff",
    padding: "5px 10px",
    backgroundColor: "#14171b99",
    borderBottomLeftRadius: "15px",
    margin: "0px"
  },
  h1: {
    color: "#8f9cb9",
    fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "0"
  },
  p: {
    color: "#fff"
  },
  pSmall: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#7c7c7c"
  },
  tagList: {
    listStyleType: "none",
    margin: "0px",
    padding: "0px",
    "& li": {
      display: "inline-block",
      fontWeight: "300",
      padding: "3px 6px",
      fontSize: "12px",
      color: "#fff",
      border: "1px solid #fff",
      borderRadius: "5px",
      marginRight: "15px"
    }
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
    transform: "translateX(-10%)",
    opacity: "0",
  },
})

export default function blog() {
  const classes = useStyles()
  const [items, setItems] = useState([
    { id: uuidv4(), title: "Thing"},
    { id: uuidv4(), title: "Thing"},
    { id: uuidv4(), title: "Thing"},
    { id: uuidv4(), title: "Thing"},
    { id: uuidv4(), title: "Thing"},
    { id: uuidv4(), title: "Thing"},
  ])

  const [tags, setTags] = useState([
    "thing",
    "thing"
  ])

  return (
    <div className={classes.container}>

      <div className={classes.aside}>
        <p className={classes.asideTitle}>{items.length} Posts Published</p>

        <hr className={classes.hr} />

        <p className={classes.asideTitle}>FILTER</p>
        <ul className={classes.filters}>
          {tags.map((tag, i) => (
            <li key={i}>- {tag}</li>
          ))}
        </ul>
      </div>

      <div className={classes.blogList}>
        <TransitionGroup component={null}>
          {items.map(({ id, title }) => (
            <CSSTransition
              key={id}
              in={true} 
              timeout={300}
              unmountOnExit
              classNames={{
                enter: classes.enterActive,
                enterDone: classes.enterDone,
                exit: classes.exitActive
              }}
              appear
            >
              <div className={classes.blogItem}>
                <p className={classes.blogItemDate}>Today</p>
                <h1 className={classes.h1}>This is a title</h1>
                <p className={classes.p}>
                  This is the description of a blog post.
                </p>
                <p className={classes.pSmall}>
                  Tags:
                </p>
                <ul className={classes.tagList}>
                    <li>Thing</li>
                    <li>Thing</li>
                    <li>Thing</li>
                  </ul>
              </div>
          </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
}