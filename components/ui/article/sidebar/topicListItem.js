import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useRouter } from 'next/router'

const useStyles = createUseStyles({
  header: {
    fontSize: "14px",
    color: "rgb(59, 69, 78)",
    letterSpacing: "0.3px",
    display: "block",
    cursor: "pointer",
    padding: "7px 24px 7px 16px"
  },
  headerSelected: {
    backgroundColor: "#fff",
    letterSpacing: "0.3px",
    color: "rgb(66, 179, 244)",
    fontSize: "14px",
    cursor: "pointer",
    display: "block",
    padding: "7px 24px 7px 16px",
    border: "1px solid rgb(230, 236, 241) !important"
  }
})

const TopicListItem = ({ topic }) => {
  const classes = useStyles();
  const router = useRouter();

  const onClick = () => {
    console.debug(router)
    router.push(`${router.asPath}?topic=${topic.id}`)
  }

  return (
    <span onClick={onClick} className={classes.header}>{topic.title}</span>
  )
}

export default TopicListItem;