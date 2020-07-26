import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import Notifications from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: theme.spacing(3),
    boxShadow: 'none'
  },
  loginButton: {
    color: theme.palette.secondary.main
  },
  icons: {
    paddingRight: theme.spacing(5)
  },
  logo: {

  },
  grow: {
    flexGrow: 1
  },
  root: {
    flexGrow: 1,
  }
}));

const Home = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar>          
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <IconButton className={classes.icons} aria-label="delete">
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons} aria-label="delete">
            <Apps />
          </IconButton>
          <IconButton className={classes.icons} aria-label="delete">
            <Notifications />
          </IconButton>
          <Button variant="outlined" className={classes.loginButton} startIcon={<AccountCircle />}>Fazer Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Home;
