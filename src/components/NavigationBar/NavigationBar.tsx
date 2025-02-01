// src/components/NavigationBar/NavigationBar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavigationBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Application Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          React App
        </Typography>

        {/* Navigation Buttons */}
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
