// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, Box, CssBaseline } from '@mui/material';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import SearchByName from './SearchByName';
import SearchByAssignee from './SearchByAssignee';
import HomePage from './HomePage'; // Import the HomePage component

const drawerWidth = 240;

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            KAIBURR Task Management
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: { width: drawerWidth },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/create-task">
              <ListItemText primary="Create Task" />
            </ListItem>
            <ListItem button component={Link} to="/tasks">
              <ListItemText primary="View Tasks" />
            </ListItem>
            <ListItem button component={Link} to="/search-by-name">
              <ListItemText primary="Search by Name" />
            </ListItem>
            <ListItem button component={Link} to="/search-by-assignee">
              <ListItemText primary="Search by Assignee" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/search-by-name" element={<SearchByName />} />
          <Route path="/search-by-assignee" element={<SearchByAssignee />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
