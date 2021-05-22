import React from "react";
import { createUseStyles } from "react-jss";
import Link from 'next/link'

import useWindowSize from "../../../hooks/useWindowSize";

const useStyles = createUseStyles({
  header: {
    height: "80px",
    width: "100%",
    backgroundColor: "#fff",
    borderBottom: "1px solid rgb(212, 218, 223)",
    boxShadow: "rgba(116, 129, 141, 0.1) 0px 3px 8px 0px",
    boxSizing: "border-box",
    color: "#000",
    position: "relative",
    alignItems: "center",
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr",
  },
  home: {
    marginLeft: "20px",
    cursor: "pointer",
    outline: "none",
    textAlign: "center",
    letterSpacing: "0.75px",
    transition: "color 100ms ease-out 0s",
    textDecoration: "none",
    padding: "10px 0px",
    paddingRight: "30px",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "1.5",
    color: "rgb(36, 42, 49)",
    borderRight: "1px solid rgb(230, 236, 241)",
    "&:hover": {
      color: "rgb(66, 179, 244)",
    },
  },
  hamburgerMenu: {
    marginLeft: "20px",
    cursor: "pointer",
    outline: "none"
  }
})

const Header = ({ toggleHamburger, setToggleHamburger }) => {
  const classes = useStyles()
  const { width } = useWindowSize()

  React.useEffect(() => {
    if (width > 1250 && toggleHamburger) {
      setToggleHamburger(false)
    }
  }, [width])

  return (
    <header className={`${classes.header}`}>
      {width > 1250 && 
        <Link href={`/`}>
          <a className={classes.home}>Go Home</a>
        </Link>
      }
      {width < 1250 && <img src="/menu.svg" width={16} height={16} className={classes.hamburgerMenu} onClick={() => setToggleHamburger(!toggleHamburger)} />}
    </header>
  )
}

export default Header;