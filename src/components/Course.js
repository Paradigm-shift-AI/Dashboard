import React, {useEffect,useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import CardImg from "../img/bookclub.jpg";
import ClassImprove from '../components/ClassImprove.js';
import {withRouter} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  fixedHeight: {
    height: 720,
    padding: "50px",
    width: "80%",
    marginLeft: "15%"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
    marginBottom: "100px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  card: {
    backgroundImage: `url(${CardImg})`,
    color: "white",
    margin: "20px",
  },
}));

function Course(props) {
  const classes = useStyles();
  const handleChange = (event) => {
    setCourse(event.target.value);
  };
  const data = [{classname:"MySQL", asked: 14, flagged: 3, Date: "Wed, 13 Dec 2020", Attendance: "53"},
  {classname:"Cross Join", asked: 15, flagged: 3, Date: "Wed, 15 Dec 2020", Attendance: "57"}]
  const courses = ["DBMS", "OS"];
  const [course, setCourse] = React.useState(courses[0]);

  return (
    <Paper className={classes.fixedHeight}>
      <FormControl variant="outlined" className={classes.formControl} >
        <InputLabel id="demo-simple-select-outlined-label">Course</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={course}
          onChange={handleChange}
          label="Course"
        >
          {courses.map((el) => (
            <MenuItem value={el}>{el}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Divider />
      <Grid container spacing={2}>
        {data.map((el) => (
          <Grid style={{cursor: "pointer"}} item md={6} key={el.Date} onClick={(e) => { props.history.push(`/lectures/${course}/${el.Date}`) }}>
            <ClassImprove date={el.Date} attend={el.Attendance} totalQuestion={el.asked} flaggedQuestion={el.flagged}/>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default withRouter(Course);
