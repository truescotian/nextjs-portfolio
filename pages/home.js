import React, { useState } from "react";
import {createUseStyles} from 'react-jss'
import ListItem from "../components/ui/list/listItem";
import { homeData } from "../data/home";
import AboutMe from "../components/aboutMe";
import SliderComponent from "../components/sliderComponent";

const tabletBreak = '@media (max-width: 1250px)';
const mobileBreak = '@media (max-width: 720px)';

const useStyles = createUseStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: "1fr 4fr",
    height: '100%',
    backgroundColor: "#171717",
    padding: "150px",
    paddingBottom: "0px",
    paddingRight: "0px",
    boxSizing: "border-box",
    overflow: "auto",
    [tabletBreak]: {
      gridTemplateColumns: "1fr",
      padding: "20px",
      paddingRight: "0px",
    },
    [mobileBreak]: {
      padding: "20px",
      paddingRight: "0px",
    }
  },
  left: {
    fontSize: "14px",
    letterSpacing: "normal",
  },
  list: {
    display: "flex",
    flexFlow: "column nowrap",
    [mobileBreak]: {
      marginTop: "30px",
    },
    "& li:not(:first-child)": {
      marginTop: "60px"
    }
  },
  span: {
    color: "grey",
    "&:hover": {
      color: "#fff"
    }
  },
})

const pages = {
  aboutMe: AboutMe
};

const Home = () => {
  const classes = useStyles();
  let [page, setPage] = useState(null);
  const [show, setShow] = useState(false);

  function onSetShow(page) {
    setShow(true);
    setPage(page);
  }

  return (
    <main className={classes.container}>
      <div className={classes.left}><span className={classes.span}>Greg Miller</span></div>
      <ol className={classes.list}>
        {homeData.map((o, index) => <ListItem key={index} {...o} onClick={() => onSetShow(o.page)} />)}
      </ol>
      <SliderComponent setPage={setPage} setShow={setShow} show={show} page={page} pages={pages} />
    </main>
  )
}

export default Home;