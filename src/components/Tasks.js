import React, {Component} from 'react';

import Task from './Task';

class Tasks extends Component {
  state = {}
  render() {
    return (
      <div>
        <h2>Task Header</h2>
        <Task task='Task 1'/>
        <Task task='Task 2'/>
        <Task task='Task 3'/>
      </div>
    )
  }
}

export default Tasks;