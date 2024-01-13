// SearchByAssignee.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const SearchByAssignee = () => {
  const [assignee, setAssignee] = useState('');
  const [foundTasks, setFoundTasks] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/tasks/search/byAssignee?assignee=${assignee}`);
      setFoundTasks(response.data);
      setSearched(true);
    } catch (error) {
      console.error('Error searching tasks by assignee:', error);
      setFoundTasks([]);
      setSearched(true);
    }
  };

  return (
    <Paper style={{ padding: 20, marginTop: 20 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <TextField
            label="Assignee"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>
      {searched && (
        <Table style={{ marginTop: 20 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Assignee</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Start Time</TableCell>
              <TableCell>Jaiprakash Property</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foundTasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.id}</TableCell>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.assignee}</TableCell>
                <TableCell>{task.project}</TableCell>
                <TableCell>{task.startTime}</TableCell>
                <TableCell>{task.jaiprakashProperty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
};

export default SearchByAssignee;
