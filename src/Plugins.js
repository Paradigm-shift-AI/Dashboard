import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/Navbar";
import Copyright from "./components/Copyright";
import Title from "./components/Title";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import BrainIcon from "./img/brain.svg";
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';


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
    width: "80%",
    marginLeft: "10%",
  },
  heading: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: 32,
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  imageIcon: {
    display: "flex",
    height: "inherit",
    width: "inherit",
  },
  iconRoot: {
    textAlign: "center",
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    marginTop: "30px" 
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Plugins() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.fixedHeight}>
                <div className={classes.heading}>
                  <Icon classes={{ root: classes.iconRoot }}>
                    <img className={classes.imageIcon} src={BrainIcon} />
                  </Icon>
                  <span>Install Plugins</span>
                </div>
                <Paper component="form" variant="outlined" className={classes.search}>
                  <InputBase
                    className={classes.input}
                    placeholder="Search plugins"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                  <IconButton
                    type="submit"
                    className={classes.iconButton}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
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
