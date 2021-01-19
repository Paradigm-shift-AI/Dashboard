import React, {useState, useEffect} from "react";
import { Paper, Grid } from '@material-ui/core';
import Logo from "../img/exam.svg";
import Logo1 from "../img/red-flag.svg";

function questionInfo({logo, label, count}) {

  const imgStyle = {
    width: "42px",
    height: "42px",
  }

  const countStyle = {
    fontSize: "24px",
    fontFamily: 'Lato',
    color: "#505050",
    margin: "5px",
    marginLeft: "15px"
  }

  const secondaryText = {
    fontSize: "15px",
    fontFamily: 'Lato',
    fontWeight: '200',
    opacity: '0.35'
  }

  return (
    <Paper elevation={0} style={{marginLeft: "15px"}}>
      <Grid container direction="row" alignItems="end">
        <img src={logo} style={imgStyle} />
        <p style={countStyle}> {count} </p>
      </Grid>
      <p style={secondaryText}> {label} </p>
    </Paper>
  )
}

function attendees(props) {

  const paperStyle = {
    padding: "10px",
    backgroundColor: "#FAFAFA",
    marginLeft: "30px",
    textAlign: "center",
    borderRadius: "7.5px",
    alignSelf: "flex-end",
  }

  const countStyle = {
    fontSize: "48px",
    color: "#505050",
    fontFamily: 'Lato',
    margin: "10px",
    marginBottom: "2px"
  }

  const atStyle = {
    fontSize: "12px",
    fontFamily: 'Lato',
    fontWeight: "100",
    color: "#505050",
    marginTop: "0px"
  }

  return (
    <Paper style={paperStyle} elevation={0}>
      <p style={countStyle}>{props.count}</p>
      <p style={atStyle}> Attendees </p>
    </Paper>
  )
}

function Classa(props) {

  const boxStyle = {
    margin: "10px",
    borderRadius: "7.5px",
    boxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.25)",
    padding: "10px"
  }

  const dateStyle = {
    fontSize: "1.5rem",
    fontFamily: 'Lato',
    color: '#414141'
  }

  const [totalQuestion, setTotalQuestion] = useState({
    label: "Total Question",
    logo: Logo
  });

  const [flaggedQuestion, setFlaggedQuestion] = useState({
    label: "Flagged Question",
    logo: Logo1
  });

  return (
    <Paper style={boxStyle} elevation={0}>
      <Grid style={{display: "flex", justifyContent: "space-between"}} container direction="row" alignItems="center">
        <Paper elevation={0}>
          <p style={dateStyle} > {props.date} </p>
          <Grid container direction="row" alignItems="center">
            {questionInfo({logo: Logo, label: "Total Question", count: props.totalQuestion})}
            {questionInfo({logo: Logo1, label: "flagged Question", count: props.flaggedQuestion})}
          </Grid>
        </Paper>
        {attendees({count: props.attend})}
      </Grid>
    </Paper>
  )
}
export default Classa;
