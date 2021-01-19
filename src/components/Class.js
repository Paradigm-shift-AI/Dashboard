import React, {useContext, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Title from "./Title";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import {withRouter} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  fixedHeight: {
    height: 720,
    padding: "40px",
    width: "70%",
    marginLeft: "15%"
  },
  card: {
    margin: "20px",
    padding: "20px",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function Class(props) {
  const classes = useStyles();
  const strongtopics = ["Union", "Joins", "Cross Joins"];
  const weaktopics = ["Inner Join"];
  const [tick, setTick] = React.useState('');

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
      <Paper variant="outlined" className={classes.card}>
        <Grid container spacing={3}>
          <Grid item xs={8} md={8} lg={8}>
            <Title>Ques:</Title>
            <Typography>MongoDB is an example of SQL?</Typography>
            <br/>
            <Title>Ans:</Title>
            <Typography>False</Typography>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <div style={{display:"flex"}}>
            <ToggleButtonGroup
              value={tick}
              exclusive
              // onChange={handleTick}
              aria-label="flagged"
              style={{float:"right", marginRight:"30px"}}
            >
              <ToggleButton value="true" aria-label="right">
                <DoneIcon style={{color:"green"}} />
              </ToggleButton>
              <ToggleButton value="false" aria-label="wrong">
                <CloseIcon style={{color:"red"}}/>
              </ToggleButton>
            </ToggleButtonGroup>
            </div>
            <br/>
            <Typography >
              No. of correct: 5
              <br/>
              No. of incorrect: 6
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  );
}

export default withRouter(Class);
