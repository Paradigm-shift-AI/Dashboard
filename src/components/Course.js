import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CardImg from "../img/bookclub.jpg";
import ClassImprove from "../components/ClassImprove.js";
import { withRouter } from "react-router-dom";
import Title from "./Title";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme) => ({
  fixedHeight: {
    minheight: 720,
    padding: "50px",
    width: "70%",
    marginLeft: "15%",
  },
  formControl: {
    margin: theme.spacing(0.7),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(0.7),
  },
  card: {
    backgroundImage: `url(${CardImg})`,
    color: "white",
    margin: "20px",
  },
  chips: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function Course(props) {
  const classes = useStyles();
  const handleChange = (event) => {
    setCourse(event.target.value);
  };
  const data = [
    {
      classname: "MySQL",
      asked: 14,
      flagged: 3,
      Date: "Wed, 13 Dec 2020",
      Attendance: "53",
    },
    {
      classname: "Cross Join",
      asked: 15,
      flagged: 3,
      Date: "Wed, 15 Dec 2020",
      Attendance: "57",
    },
  ];
  const courses = ["DBMS", "OS"];
  const [course, setCourse] = React.useState(courses[0]);

  const plugins = ["SQL", "DBMS", "JDBC"];

  return (
    <Paper className={classes.fixedHeight}>
      <Title>Dashboard</Title>
      <Grid
        container
        spacing={2}
        alignItems="center"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <Grid md={3}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Course
            </InputLabel>
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
        </Grid>
        <Grid md={9} className={classes.chips}>
          {plugins.map((el) => (
            <Chip label={el} variant="outlined" />
          ))}
          <IconButton color="primary" aria-label="add more plugins" href={`/plugins/${course}`}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {data.map((el) => (
          <Grid
            style={{ cursor: "pointer" }}
            item
            md={6}
            key={el.Date}
            onClick={(e) => {
              props.history.push(`/lectures/${course}/${el.Date}`);
            }}
          >
            <ClassImprove
              date={el.Date}
              attend={el.Attendance}
              totalQuestion={el.asked}
              flaggedQuestion={el.flagged}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default withRouter(Course);
