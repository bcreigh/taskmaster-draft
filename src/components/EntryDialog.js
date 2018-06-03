import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import moment from "moment";

class EntryDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="title"
            label="Task Title"
            type="text"
            fullWidth
            onChange={this.handleTitleChange}
            defaultValue={this.state.title}
          />
          <TextField
            id="description"
            label="Task Description"
            type="text"
            fullWidth
            onChange={this.handleDescriptionChange}
            defaultValue={this.state.description}
          />
          <TextField
            id="start"
            label="Start Date"
            type="date"
            defaultValue={moment(this.state.start).format("YYYY-MM-DD")}
            onChange={this.handleStartChange}
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="due"
            label="Due Date"
            type="date"
            defaultValue={moment(this.state.due).format("YYYY-MM-DD")}
            onChange={this.handleDueChange}
            InputLabelProps={{
              shrink: true
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.props.handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </div>
    );
  }
}

export default EntryDialog;
