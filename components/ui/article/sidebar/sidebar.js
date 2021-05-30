import React from "react";
import { createUseStyles } from "react-jss";
import useSidebar from "../../../../hooks/useSidebar";
import Section from "./section";
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link'

const useStyles = createUseStyles({
  sidebar: {
    justifySelf: "stretch",
    background: "rgb(245, 247, 249) none repeat scroll 0% 0%",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "flex-end",
    borderRight: "1px solid rgb(230, 236, 241)",
    zIndex: "1",
  },
  mobileSidebar: {
    transform: "scaleX(0)",
    position: "absolute",
    top: "0px",
    left: "0px",
    height: "100%",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 250ms ease 0s",
  },
  content: {
    width: "250px",
    paddingLeft: "24px",
  },
  enterActive: {
    transform: "scaleX(0)",
  },
  enterDone: {
    transform: "scaleX(1)",
  },
  exitActive: {
    transform: "scaleX(0)",
  },
  controls: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "24px",
    marginTop: "10px"
  },
  close: {
    transform: "rotate(45deg)",
    fontSize: "40px",
    cursor: "pointer"
  },
  home: {
    marginLeft: "0px",
    cursor: "pointer",
    outline: "none",
    letterSpacing: "0.75px",
    color: "rgb(36, 42, 49)",
    transition: "color 100ms ease-out 0s",
    textDecoration: "none",
    fontWeight: "600",
    color: "#000",
    "&:hover": {
      color: "rgb(66, 179, 244)",
    }
  },
});

const renderCategories = (categories) => {
  return categories.map(c => <Section key={c.id} category={c} />)
}

const Sidebar = ({ onClick, show, isMobile }) => {
  const classes = useStyles()
  const { data, isLoading, isError } = useSidebar()

  if (isError) return "An error has occured.";

  return (
    <CSSTransition 
      in={show} 
      timeout={0} 
      classNames={{ 
        enterActive: isMobile ? classes.enterActive : null,
        enterDone: isMobile ? classes.enterDone : null,
        exitActive: isMobile ? classes.exitActive : null
      }}>
        <aside className={`${classes.sidebar} ${isMobile && classes.mobileSidebar}`}>
          <div className={classes.content}>
            <div className={classes.controls}>
              {isMobile && 
                <Link href={`/`}>
                  <a className={classes.home}>Go Home</a>
                </Link>
              }
              {isMobile && <span className={classes.close} onClick={onClick}>+</span>}
            </div>
            {isLoading ? "Loading" : renderCategories(data.categories)}
          </div>
        </aside>
    </CSSTransition>
  )
}

export default Sidebar;