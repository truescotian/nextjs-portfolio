import React from "react";
import { createUseStyles } from "react-jss";
import useCategories from "../../../../hooks/useCategories";
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

const Sidebar = () => {
  const classes = useStyles()
  const { categories, isLoading, isError } = useCategories();

  if (isError) return "An error has occured.";
  if (isLoading) return "Loading...";

  return (
    <aside className={classes.sidebar}>
      <div className={classes.content}>
        {categories.map(c => <Section key={c.id} category={c} /> )}
      </div>
    </aside>
  )
}

export default Sidebar;