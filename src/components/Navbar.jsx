// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" style={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
          Quiz Platform
        </Typography>
        <Button color="inherit" startIcon={<HomeIcon />} onClick={() => navigate('/')} style={{ color: '#fff' }}>
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;