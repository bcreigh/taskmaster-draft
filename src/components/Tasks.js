import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Task from './Task';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.completeTask = this.completeTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }
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

  styles = {
    taskHead: {
      marginTop: '20px',
      marginLeft: '40px'
    },
    fab: {
      textAlign: 'right',
      marginTop: '20px',
      marginRight: '40px'
    }
  }

  addTask() {
    const newTask = {
      title: "New task",
      description: "Description of new task",
      start: new Date(),
      due: new Date(),
      done: null,
      complete: false
    };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  }

  completeTask(index) {
    let newTasks = this
      .state
      .tasks
      .slice();
    let task = this.state.tasks[index];
    task.complete = !task.complete;
    task.done = task.complete
      ? new Date()
      : null;
    newTasks.splice(index, 1, task);
    this.setState({tasks: newTasks});
  }

  render() {
    return (
      <div>
        <Grid container wrap="nowrap">
          <Grid item xs={11}>
            <Typography variant="headline" style={this.styles.taskHead}>
              My Tasks
            </Typography>
          </Grid>
          <Grid item xs={1} style={this.styles.fab}>
            <Button variant="fab" mini color="primary" onClick={this.addTask}>
              <Icon>add</Icon>
            </Button>
          </Grid>
        </Grid>
        {this
          .state
          .tasks
          .map((task, index) => (< Task 
          key = { index }
          id = { index }
          task = { task }
          completeTask = { this.completeTask } 
          />))
        }
      </div>
    )
  }
}

export default Tasks;