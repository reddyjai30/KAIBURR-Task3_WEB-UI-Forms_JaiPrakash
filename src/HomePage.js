// HomePage.js
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Paper style={{ padding: 20, marginTop: 20 }}>
      <Box textAlign="center">
        <Typography variant="h4">Welcome to the Kaiburr Task Management System</Typography>
        <Typography variant="subtitle1" style={{ marginTop: 20 }}>
          This application provides an interface to manage and track tasks efficiently.
          Users can create, view, search, and delete tasks, as well as assign tasks to team members.
          It's designed to streamline the process of task management for small to medium-sized teams.
        </Typography>
      </Box>
    </Paper>
  );
};

export default HomePage;
