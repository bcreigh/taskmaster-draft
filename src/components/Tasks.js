import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import Task from "./Task";
import EntryDialog from "./EntryDialog";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.completeTask = this.completeTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.editTask = this.editTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
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
      },
      {
        title: "Task 2",
        description: "This is a description of task number 2",
        start: new Date("2018-5-2"),
        due: new Date("2018-6-2"),
        done: new Date("2018-5-5"),
        complete: true
      },
      {
        title: "Task 3",
        description: "This is a description of task number 3",
        start: new Date("2018-5-3"),
        due: new Date("2018-6-3"),
        done: null,
        complete: false
      }
    ],
    dialogOpen: false,
    edit: false,
    editTask: null,
    editIndex: null
  };

  styles = {
    taskHead: {
      marginTop: "20px",
      marginLeft: "40px"
    },
    fab: {
      textAlign: "right",
      marginTop: "20px",
      marginRight: "40px"
    }
  };

  addTask(task) {
    const newTask = {
      title: task.title,
      description: task.description,
      start: task.start,
      due: task.due,
      done: null,
      complete: false
    };
    this.setState({ tasks: [...this.state.tasks, newTask] });
    this.handleCloseDialog();
  }

  editTask(task, index) {
    this.setState({
      edit: true,
      editTask: task,
      editIndex: index,
      dialogOpen: true
    });
  }

  updateTask(task, index) {
    let newTasks = this.state.tasks.slice();
    newTasks.splice(index, 1, task);
    this.setState({ tasks: newTasks });
    this.handleCloseDialog();
  }

  completeTask(index) {
    let newTasks = this.state.tasks.slice();
    let task = this.state.tasks[index];
    task.complete = !task.complete;
    task.done = task.complete ? new Date() : null;
    newTasks.splice(index, 1, task);
    this.setState({ tasks: newTasks });
  }

  deleteTask(index) {
    let newTasks = this.state.tasks.slice();
    newTasks.splice(index, 1);
    this.setState({ tasks: newTasks });
  }

  handleOpenDialog() {
    this.setState({ dialogOpen: true });
  }

  handleCloseDialog() {
    this.setState({
      edit: false,
      editTask: null,
      editIndex: null,
      dialogOpen: false
    });
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
            <Button
              variant="fab"
              mini
              color="primary"
              onClick={this.handleOpenDialog}
            >
              <Icon>add</Icon>
            </Button>
          </Grid>
        </Grid>
        {this.state.tasks.map((task, index) => (
          <Task
            key={index}
            id={index}
            task={task}
            completeTask={this.completeTask}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
          />
        ))}
        <Dialog open={this.state.dialogOpen} disableBackdropClick={true}>
          <EntryDialog
            handleClose={this.handleCloseDialog}
            addTask={this.addTask}
            updateTask={this.updateTask}
            edit={this.state.edit}
            task={this.state.editTask}
            id={this.state.editIndex}
          />
        </Dialog>
      </div>
    );
  }
}

export default Tasks;
