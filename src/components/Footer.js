import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5)
    },
    paper: {
      padding: theme.spacing(6),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      border: '1px solid blue',
    }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
        <Grid item xs={3}>
            <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>2</Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>3</Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>4</Paper>
        </Grid>
    </Grid>
  );
}