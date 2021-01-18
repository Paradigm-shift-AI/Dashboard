import React, {useState} from "react";
import { Paper, Grid } from '@material-ui/core';
import Logo from "../img/exam.svg";
import Logo1 from "../img/red-flag.svg";

function questionInfo(props) {

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
        <img src={props.logo} style={imgStyle} />
        <p style={countStyle}> {props.count} </p>
      </Grid>
      <p style={secondaryText}> {props.label} </p>
    </Paper>
  )
}

function attendees(props) {

  const paperStyle = {
    padding: "10px",
    backgroundColor: "#FAFAFA",
    marginLeft: "30px",
    textAlign: "center",
    borderRadius: "7.5px"
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

function Classa() {

  const boxStyle = {
    margin: "10px",
    width: "500px",
    borderRadius: "7.5px",
    boxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.25)",
    padding: "10px"
  }

  const dateStyle = {
    fontSize: "18px",
    fontFamily: 'Lato',
    color: '#414141'
  }

  const [totalQuestion, setTotalQuestion] = useState({
    label: "Total Question",
    count: "15",
    logo: Logo
  });

  const [flaggedQuestion, setFlaggedQuestion] = useState({
    label: "Flagged Question",
    count: "15",
    logo: Logo1
  });

  const [attendeesCount, setAttendeesCount] = useState({
    count: 72
  })

  return (
    <Paper style={boxStyle} elevation={0}>
      <Grid container direction="row" alignItems="center">
        <Paper elevation={0}>
          <p style={dateStyle} > Wed, 13 Dec 2020 </p>
          <Grid container direction="row" alignItems="center">
            {questionInfo(totalQuestion)}
            {questionInfo(flaggedQuestion)}
          </Grid>
        </Paper>
        {attendees(attendeesCount)}
      </Grid>
    </Paper>
  )
}
export default Classa;
