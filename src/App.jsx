import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();


  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const navigateToHome = () => {
    navigate('/');
    handleDrawerClose();
  };

  return (
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6">HauHau Shop</Typography>
          <Home to="/" style={{ textDecoration: 'none', color: 'white' }} onClick={navigateToHome}></Home>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
  <List>
    <ListItem component={Link} to="/" onClick={handleDrawerClose}>
      <ListItemText primary="Etusivu" />
    </ListItem>
    <ListItem component={Link} to="/meista" onClick={handleDrawerClose}>
      <ListItemText primary="Meistä" />
    </ListItem>
    <ListItem component={Link} to="/tuotteet" onClick={handleDrawerClose}>
      <ListItemText primary="Tuotteet" />
    </ListItem>
    <ListItem component={Link} to="/rekisterointi" onClick={handleDrawerClose}>
      <ListItemText primary="Rekisterointi" />
    </ListItem>
  </List>
</Drawer>
      <Outlet />
    </Container>
  );
}

export default App;