import React from "react";
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  h1: {
    margin: "auto auto",
    fontFamily: "Moderat",
    fontWeight: "200",
    letterSpacing: "normal",
    textAlign: "center",
  },
})

export default function AboutMeV2() {
  const classes = useStyles()

  return (
    <h1 className={classes.h1}>About Me</h1>
  )
}