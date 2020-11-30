import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  lower: {
    marginTop: theme.spacing(5)
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '1px solid blue',
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.marginTop}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content l</Paper>
            </Grid>
            <Grid item xs={6}>
              <MainContent />
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Content r</Paper>
            </Grid>
          </Grid>
          <Footer />
        </Grid>
      </Container>
  </div>
);
}