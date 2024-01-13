// TaskForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Paper } from '@mui/material';

const TaskForm = () => {
  const [task, setTask] = useState({
    name: '',
    id: '',
    assignee: '',
    project: '',
    startTime: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8080/tasks', task)
      .then(() => {
        alert('Task created successfully');
        // Reset the form fields after successful submission
        setTask({ name: '', id: '', assignee: '', project: '', startTime: '' });
      })
      .catch(error => {
        console.error('Error creating task:', error);
        alert('Error creating task');
      });
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <Paper style={{ padding: 20, marginTop: 20 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="ID"
              name="id"
              value={task.id}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={task.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Assignee"
              name="assignee"
              value={task.assignee}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Project"
              name="project"
              value={task.project}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Start Time"
              name="startTime"
              value={task.startTime}
              onChange={handleChange}
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Create Task
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default TaskForm;
