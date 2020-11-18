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
    letterSpacing: "0.4px"
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
    transform: "translateX(-10%)",
    transition: "opacity 1s ease, transform 1s ease, background-color 0.5s ease",
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
    transform: "translateX(-10%)",
    opacity: "0",
  },
  filterButton: {
    color: "#fff",
    backgroundColor: "#000",
    width: "auto",
    textAlign: "center",
    backgroundColor: "#000",
    border: "0px",
    padding: "10px 20px",
    borderRadius: "5px",
    color: "#fff",
    fontWeight: "500",
    backgroundColor: "#131313",
    cursor: "pointer"
  }
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
        <p className={classes.asideTitle}>Engineering</p>

        <p className={classes.asideDescription}>Browse through my selection of engineering articles.</p>

        <button className={classes.filterButton}>All articles about Engineering -></button>
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
                <h1 className={classes.h1}>Please welcome Chris Wong and Kirsten Lambertsen to our Ecosystem Team</h1>
                <p className={classes.p}>
                  This is the description of a blog post.
                </p>
              </div>
          </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
}