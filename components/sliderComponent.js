import React from "react";
import { createUseStyles } from 'react-jss'
import { CSSTransition } from 'react-transition-group';

const useStyles = createUseStyles({
  slideUp: {
    display: "flex",
    flexFlow: "column nowrap",
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: "#23272f",
    overflow: 'auto',
    height: "100vh",
    width: "100vw",
    transformOrigin: "top",
    transition: "transform .5s ease",
    transform: "scaleY(0)",
  },
  exit: {
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "20px",
    height: "min-content",
    width: "min-content",
    fontSize: "50px",
    transform: "rotate(45deg)",
    fontWeight: "200",
    cursor: "pointer"
  },
  enterActive: {
    transform: "scaleY(1)",
  },
  enterDone: {
    transform: "scaleY(1)",
  },
  exitActive: {
    transform: "scaleY(0)",
  },
})

export default function SliderComponent({ setPage, setShow, show, page, pages }) {
  const classes = useStyles()

  const renderPage = page => {
    if (!page) return <></>;
    const SpecificPage = pages[page];
    return <SpecificPage />;
  } 

  return (
    <CSSTransition 
        in={show} 
        timeout={500} 
        unmountOnExit
        classNames={{
          enterActive: classes.enterActive,
          enterDone: classes.enterDone,
          exitActive: classes.exitActive
        }}
        onExited={() => setPage(null) }>
        <div className={classes.slideUp}>
          <div className={classes.exit} onClick={() => setShow(false)}>+</div>
          {renderPage(page)}
        </div>
    </CSSTransition>
  )
}