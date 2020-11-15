import React, { useState } from "react";
import { createUseStyles } from 'react-jss'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const tabletBreak = '@media (max-width: 1250px)';

// Import custom styles to customize the style of Google Map
const styles = require('./GoogleMapStyles.json')

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexFlow: "row nowrap",
    flex:"1",
    paddingTop: "30px",
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gridTemplateRows: "1fr",
    [tabletBreak]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "300px 1fr",
      paddingBottom: "50px"
    }
  },
  form: {
    width: "70%",
    margin: "0 auto",
    "& p": {
      fontWeight: "300",
      color: "rgba(255, 255, 255, 0.7)"
    },
    "& ul": {
      fontWeight: "300",
      color: "rgba(255, 255, 255, 0.7)"
    },
    "& input, textarea": {
      backgroundColor: "rgba(0,0,0,0)",
      padding: "10px",
      border: "0px",
      borderBottom: "1px solid #5b5959",
      width: "100%",
      transition: "border 0.5s ease",
      color: "#fff",
      fontSize: "16px",
      outline: "none"
    },
    "& input:hover, textarea:hover": {
      borderBottom: "1px solid #fff"
    },
    gridRow: "1",
    [tabletBreak]: {
      gridRow: "2"
    }
  },
  h1: {
    margin: "50px auto",
    fontFamily: "Moderat",
    fontWeight: "300",
    fontSize: "36px",
    letterSpacing: "1.5px",
    color: "#d9e8ed",
    textAlign: "center",
    borderBottom: "2px solid #fff",
    padding: "10px 0px",
    width: "min-content"
  },
  label: {
    color: "#d9e8ed",
    letterSpacing: "0px",
    fontSize: "20px",
    display:"block",
    marginTop: "75px",
    marginBottom: "30px"
  },
  labelNoMargin: {
    color: "#d9e8ed",
    letterSpacing: "0px",
    fontSize: "20px",
    display:"block",
    marginBottom: "30px"
  },
  textArea: {
    minHeight: "75px",
    resize: "none",
  },
  btnContainer: {
    marginTop: "50px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    backgroundColor: "rgba(0,0,0,0)",
    border: "1px solid #fff",
    padding: "10px 30px",
    color: "#fff",
    outline: "none",
    margin: "0 auto",
    cursor: "pointer",
    background: "linear-gradient(to left, transparent 50%, #fff 50%) right",
    backgroundSize: "200%",
    transition: ".25s ease-out",
    "&:hover": {
      backgroundPosition: "left",
      color: "black"
    }
  }
})

const MyMapComponent = withScriptjs(withGoogleMap(() =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 44.6445212, lng: -63.5690116 }}
    defaultOptions={{
      disableDefaultUI: true, // disable default map UI
      draggable: true, // make map draggable
      keyboardShortcuts: false, // disable keyboard shortcuts
      scaleControl: true, // allow scale controle
      scrollwheel: true, // allow scroll wheel
      styles: styles // change default map styles
    }}
  >
    <Marker position={{ lat: 44.6445212, lng: -63.5690116 }} />
  </GoogleMap>
))

export default function Contact() {
  const classes = useStyles()
  const [state, setState] = useState({
    name: "",
    email: ""
  })

  function onChange(e) {
    setState({
      ...state, 
      [e.target.name]: e.target.value
    });
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={classes.container}>

      <form className={classes.form}>
        <h1 className={classes.h1}>CONTACT</h1>

        <label className={classes.labelNoMargin} htmlFor="yourName">Your Name</label>
        <input type="text" value={state.name} name="name" onChange={onChange} />

        <label className={classes.label} htmlFor="yourEmail">Your Email</label>
        <input type="text" value={state.email} name="email" onChange={onChange} />

        <label className={classes.label} htmlFor="message">Reason for Contact</label>
        <textarea className={classes.textArea} value={state.message} name="message" onChange={onChange} />
        
        <div className={classes.btnContainer}>
          <button type="submit" className={classes.btn} onSubmit={onSubmit}>Send</button>
        </div>
      </form>

      <MyMapComponent 
        isMarkerShown={false}   
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCm3PjK9imtdpSYUG7y91mRm31lpqiUpo8&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: "100%" }} />} 
        containerElement={<div style={{ height:"100%" }} />}
        mapElement={<div style={{ height: "100%" }} />} />

    </div>
  )
}