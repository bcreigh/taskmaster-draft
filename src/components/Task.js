import React from 'react';
import Paper from "@material-ui/core/Paper";

const Task = (props) => {
  return (
    <div>
      <Paper>
        <h3>{props.task.title}</h3>
        <p>{props.task.description}</p>
      </Paper>
    </div>
  )
}

export default Task;