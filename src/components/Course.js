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
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { ListItemText, ListItemIcon } from "@material-ui/core";
// import BookIcon from "@material-ui/icons/Book";
import Icon from "@material-ui/core/Icon";
import BrainIcon from "../img/brain-blue.svg";
import Button from "@material-ui/core/Button";
import Book from "../img/book.svg";

const useStyles = makeStyles((theme) => ({
  fixedHeight: {
    minheight: 720,
    padding: "50px",
    width: "80%",
    marginLeft: "10%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
  item: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  imageIcon: {
    display: "flex",
    height: "inherit",
    width: "inherit",
  },
  iconRoot: {
    textAlign: "center",
    marginRight: "10px",
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
        <Grid md={4}>
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
                <MenuItem value={el}>
                  <div className={classes.item}>
                    <Icon classes={{ root: classes.iconRoot }}
                    style={
                      el == course
                        ? { visibility: "visible" }
                        : { visibility: "hidden" }
                    }>
                      <img className={classes.imageIcon} src={Book} />
                    </Icon>
                    {el}
                  </div>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid md={8} className={classes.chips}>
          {plugins.map((el) => (
            <Chip label={el} variant="outlined" />
          ))}
          <Button
            variant="outlined"
            color="#505050"
            className={classes.button}
            endIcon={
              <Icon classes={{ root: classes.iconRoot }}>
                <img className={classes.imageIcon} src={BrainIcon} />
              </Icon>
            }
            href={`/plugins/${course}`}
          >
            Add Plugins
          </Button>
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
