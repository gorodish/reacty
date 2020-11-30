import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      border: '1px solid blue',
    },
  }));
  
export default function MainContent() {
    const classes = useStyles();

    return (
        <div>
          <Paper className={classes.paper}>Content</Paper>
        </div>
    )
}