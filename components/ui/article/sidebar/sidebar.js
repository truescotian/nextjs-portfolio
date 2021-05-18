import React from "react";
import { createUseStyles } from "react-jss";
import useSidebar from "../../../../hooks/useSidebar";
import Section from "./section";

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
});

const renderCategories = categories => {
  return categories.map(c => <Section key={c.id} category={c} />)
}

const Sidebar = () => {
  const classes = useStyles()
  const { data, isLoading, isError } = useSidebar();

  if (isError) return "An error has occured.";

  return (
    <aside className={classes.sidebar}>
      <div className={classes.content}>
        {isLoading ? "Loading" : renderCategories(data.categories)}
      </div>
    </aside>
  )
}

export default Sidebar;