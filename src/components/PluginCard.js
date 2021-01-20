import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import GetAppIcon from '@material-ui/icons/GetApp';
import Cloud from "../img/cloud.svg";
import Account from "../img/account.svg";

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    margin: "5%",
  },
  media: {
    height: 140,
  },
  button: {
    textTransform: "none"
  },
  imageIcon: {
    display: "flex",
    height: "inherit",
    width: "inherit",
  },
  iconRoot: {
    textAlign: "center",
    marginRight: "10px",
    display: "inline-block"
  },
  iconContent: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  }
});

export default function PluginCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={2}>
      <CardActionArea>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={10} lg={10}>
              <Typography
                variant="h5"
                component="h2"
                style={{ display: "inline-block", marginBottom: "25px" }}
              >
                {props.name}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                style={{ display: "inline-block", marginLeft: "10px" }}
              >
                {props.version}
              </Typography>
            </Grid>
            <Grid item md={2} lg={2} className={classes.iconContent}>
            <Icon classes={{ root: classes.iconRoot }}>
                <img className={classes.imageIcon} src={Cloud} />
              </Icon>
              <Typography variant="body1">
              {props.downloads}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            style={{ marginBottom: "25px" }}
          >
            {props.content}
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={10} lg={10} className={classes.iconContent}>
            <Icon classes={{ root: classes.iconRoot }}>
                <img className={classes.imageIcon} src={Account} />
              </Icon>
              <Typography variant="body1" color="textSecondary">
                {props.creator}
              </Typography>
            </Grid>
            <Grid item md={2} lg={2}>
              <Button
                variant="contained"
                color="#505050"
                className={classes.button}
                startIcon={<GetAppIcon />}
              >
                Install
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
