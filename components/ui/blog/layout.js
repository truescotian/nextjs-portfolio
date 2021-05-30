import React from "react"
import { createUseStyles } from "react-jss";

import Sidebar from "../article/sidebar/sidebar"
import Header from "./header"

import useWindowSize from "../../../hooks/useWindowSize"

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

const Layout = ({ children }) => {
  const classes = useStyles();
  const { width } = useWindowSize();
  const [toggleHamburger, setToggleHamburger] = React.useState(false);

  return (
    <>
      <Header toggleHamburger={toggleHamburger} setToggleHamburger={setToggleHamburger} />
      <div className={`${classes.container} ${toggleHamburger && width < 1250 && classes.backdrop}`}>
        <Sidebar onClick={() => setToggleHamburger(!toggleHamburger)} isMobile={width < 1250} show={width > 1250 || toggleHamburger}/>
        <div className={classes.articlesContainer}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout;