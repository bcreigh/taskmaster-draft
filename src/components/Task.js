import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import moment from 'moment';

const styles = {
  paper: {
    margin: '20px',
    padding: '0 20px'
  },
  desc: {
    marginTop: 0
  },
  start: {
    marginTop: 0
  },
  due: {
    marginTop: 0,
    textAlign: 'right'
  },
  complete: {
    textAlign: 'center',
    marginTop: '6px'
  }
}

const Task = (props) => {
  return (
    <div>
      <Paper style={styles.paper} elevation={4}>
        <Grid container>
          <Grid item xs={1} style={styles.complete}>
            <Checkbox
              checked={props.task.complete}
              color="primary"
              onClick={() => props.completeTask(props.id)}/>
          </Grid>
          <Grid item xs={10}>
            <h3>{props.task.title}</h3>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
            <p style={styles.desc}>{props.task.description}</p>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={5}>
            <p style={styles.start}>
              start date: {moment(props.task.start).format('MM-DD-YYYY')}
            </p>
          </Grid>
          <Grid item xs={6}>
            {props.task.complete
              ? (
                <p style={styles.due}>
                  done date: {moment(props.task.done).format('MM-DD-YYYY')}
                </p>
              )
              : (
                <p style={styles.due}>
                  due date: {moment(props.task.due).format('MM-DD-YYYY')}
                </p>
              )}

          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Task;