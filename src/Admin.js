import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Navbar from "./components/Navbar";
import Title from "./components/Title"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  fixedHeight: {
    minheight: 720,
    padding: "50px",
    width: "70%",
    marginLeft: "15%",
  },
  card: {
    margin: "20px",
    padding: "20px",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  list: {
    width: 200,
    height: 230,
    overflow: "auto",
  },
  table: {
    marginTop: "50px",
  },
  button: {
    marginTop: "50px",
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Admin() {
  const classes = useStyles();
  const [createClass, setCreateClass] = React.useState(false);
  const items = [0, 1, 2, 3, 4, 5, 6];
  const [facultychecked, setfacultyChecked] = React.useState([]);

  const handlefacultyToggle = (value) => () => {
    const currentIndex = facultychecked.indexOf(value);
    const newChecked = [...facultychecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setfacultyChecked(newChecked);
    console.log(newChecked);
  };

  const [studentchecked, setstudentChecked] = React.useState([]);

  const handlestudentToggle = (value) => () => {
    const currentIndex = studentchecked.indexOf(value);
    const newChecked = [...studentchecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setstudentChecked(newChecked);
    console.log(newChecked);
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.fixedHeight}>
                <Title>Admin Dashboard</Title>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  endIcon={<AddIcon />}
                  onClick={() => setCreateClass(true)}
                >
                  Create
                </Button>
                {createClass ? (
                  <Paper variant="outlined" className={classes.card}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={4} lg={4}>
                        <TextField
                          id="outlined-basic"
                          label="Course Name"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={4} lg={4}>
                        <Paper variant="outlined">
                        <Typography align="center">Teacher</Typography>
                          <List
                            dense
                            component="div"
                            role="list"
                            className={classes.list}
                          >
                            {items.map((value) => {
                              const labelId = `transfer-list-item-${value}-label`;

                              return (
                                <ListItem
                                  key={value}
                                  role="listitem"
                                  button
                                  onClick={handlefacultyToggle(value)}
                                >
                                  <ListItemIcon>
                                    <Checkbox
                                      checked={
                                        facultychecked.indexOf(value) !== -1
                                      }
                                      tabIndex={-1}
                                      disableRipple
                                      inputProps={{
                                        "aria-labelledby": labelId,
                                      }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText
                                    id={labelId}
                                    primary={`List item ${value + 1}`}
                                  />
                                </ListItem>
                              );
                            })}
                            <ListItem />
                          </List>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} md={4} lg={4}>
                        <Paper variant="outlined">
                          <Typography align="center">Student</Typography>
                          <List
                            dense
                            component="div"
                            role="list"
                            className={classes.list}
                          >
                            {items.map((value) => {
                              const labelId = `transfer-list-item-${value}-label`;

                              return (
                                <ListItem
                                  key={value}
                                  role="listitem"
                                  button
                                  onClick={handlestudentToggle(value)}
                                >
                                  <ListItemIcon>
                                    <Checkbox
                                      checked={
                                        studentchecked.indexOf(value) !== -1
                                      }
                                      tabIndex={-1}
                                      disableRipple
                                      inputProps={{
                                        "aria-labelledby": labelId,
                                      }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText
                                    id={labelId}
                                    primary={`List item ${value + 1}`}
                                  />
                                </ListItem>
                              );
                            })}
                            <ListItem />
                          </List>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                ) : (
                  <div></div>
                )}

                <TableContainer>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
