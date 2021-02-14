import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  sidebar: {
    justifySelf: "stretch",
    background: "rgb(245, 247, 249) none repeat scroll 0% 0%",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "flex-end",
    borderRight: "1px solid rgb(230, 236, 241)"
  },
  content: {
    width: "250px",
    marginTop: "32px",
    paddingLeft: "24px",
  },
})

const Sidebar = ({ children }) => {
  const classes = useStyles()

  return (
    <aside className={classes.sidebar}>
      <div className={classes.content}>
        {children}
      </div>
    </aside>
  )
}

export default Sidebar;