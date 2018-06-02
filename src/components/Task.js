import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = {
  paper: {
    margin: '20px',
    padding: '10px'
  }
}

const Task = (props) => {
  return (
    <div>
      <Paper style={styles.paper} elevation={4}>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <h3>{props.task.title}</h3>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
            <p>{props.task.description}</p>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={5}>
            <p>start:</p>
          </Grid>
          <Grid item xs={6}>due:</Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Task;