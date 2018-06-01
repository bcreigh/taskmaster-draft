import React, {Component} from 'react';

import Task from './Task';

class Tasks extends Component {
  state = {
    tasks: [
      {
        title: "Task 1",
        description: "This is a description of task number 1",
        start: new Date("2018-5-1"),
        due: new Date("2018-6-1"),
        done: null,
        complete: false
      }, {
        title: "Task 2",
        description: "This is a description of task number 2",
        start: new Date("2018-5-2"),
        due: new Date("2018-6-2"),
        done: new Date("2018-5-5"),
        complete: true
      }, {
        title: "Task 3",
        description: "This is a description of task number 3",
        start: new Date("2018-5-3"),
        due: new Date("2018-6-3"),
        done: null,
        complete: false
      }
    ]
  }
  render() {
    return (
      <div>
        <h2>Task Header</h2>
        {this
          .state
          .tasks
          .map(task => (< Task task = {
            task
          } />))}
      </div>
    )
  }
}

export default Tasks;