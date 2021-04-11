import React, { useEffect, useState } from "react";
import { createUseStyles } from 'react-jss'
import { CSSTransition } from 'react-transition-group';
import { homeData } from "../data/home";

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
    transformOrigin: "right",
    transition: "transform .5s ease",
    transform: "scaleX(0)"
  },
  exit: {
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "20px",
    height: "auto",
    width: "auto",
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
    transform: "scaleX(0)",
  },
  fs: {
    minHeight: "100%",
  }
})

export default function SliderComponent({ setPage, setShow, show, page, pages, ...rest }) {
  const classes = useStyles()
  const [styles, setStyles] = useState({});

  const renderPage = page => {
    if (!page) return null;
    const SpecificPage = pages[page];
    return <SpecificPage {...rest} />;
  } 

  useEffect(() => {
    const d = homeData.find((o) => o.page === page);
    let tempStyles = {};
    if (d?.backgroundImage) {
      tempStyles = {
        background: `url(/${d.backgroundImage})`,
        backgroundSize: "cover",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.89)"
      }
    }
    if (d?.backgroundColor) {
      tempStyles = {...tempStyles, backgroundColor: d.backgroundColor}
    }
    setStyles(tempStyles)
  },[page])


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
        <div className={`${classes.slideUp} ${classes.fs}`} style={{...styles}}>
          <div className={classes.exit} onClick={() => setShow(false)}>+</div>
          {renderPage(page)}
        </div>
    </CSSTransition>
  )
}