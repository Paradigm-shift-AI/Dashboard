import React, {useContext, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Title from "./Title";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import {withRouter} from "react-router-dom";
import QuesCard from "./QuesCard";
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  fixedHeight: {
    minheight: 720,
    padding: "50px",
    width: "80%",
    marginLeft: "10%",
  },
  card: {
    margin: "20px",
    padding: "20px",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  queshead: {
    padding: "1%",
  }
}));

function Class(props) {
  const classes = useStyles();
  const strongtopics = ["Union", "Joins", "Cross Joins"];
  const weaktopics = ["Inner Join"];

  return (
    <Paper className={classes.fixedHeight}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link component="h2" variant="h6" color="textPrimary" onClick={()=>props.history.push('/dashboard')}>
          {props.match.params.course}
        </Link>
        <Typography component="h2" variant="h6" color="inherit">
        {props.match.params.date}
        </Typography>
      </Breadcrumbs>
      <Paper variant="outlined" className={classes.card}></Paper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <Paper variant="outlined" className={classes.card}>
            <Title>Weak Topics:</Title>
            {weaktopics.map((el) => (
              <Chip label={el} variant="outlined" />
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper variant="outlined" className={classes.card}>
            <Title>Strong Topics:</Title>
            {strongtopics.map((el) => (
              <Chip label={el} variant="outlined" />
            ))}
          </Paper>
        </Grid>
      </Grid>
        <Grid container className={classes.queshead}>
          <Grid item xs={12} md={2} lg={2}>
        Flagged Questions
        </Grid>
        <Grid item xs={12} md={10} lg={10} style={{marginTop:"10px"}}>
        <Divider />
        </Grid>
        </Grid>
      <QuesCard />
    </Paper>
  );
}

export default withRouter(Class);
