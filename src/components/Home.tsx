import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Button, List, ListItem, Drawer, ListItemText, Divider, ListItemIcon, Typography } from '@material-ui/core';
import Preto from "../assets/images/preto.png";

/* Icons Imports */

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import Notifications from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import Whatshot from '@material-ui/icons/Whatshot';
import Subscriptions from '@material-ui/icons/Subscriptions';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import WatchLater from '@material-ui/icons/WatchLater';
import YouTube from '@material-ui/icons/YouTube';
import Theaters from '@material-ui/icons/Theaters';
import Games from '@material-ui/icons/Games';
import LiveTv from '@material-ui/icons/LiveTv';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'; 


const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: theme.spacing(3),
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1
  },

  drawer: {
    width: 240,
    flexShrink: 0,
  },

  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },

  drawerContainer: {
    overflow: 'auto',
  },

  icons: {
    paddingRight: theme.spacing(5)
  },

  grow: {
    flexGrow: 1
  },

  logo: {
    width: 100
  },

  listItemText: {
    fontSize: 14
  },

  loginButton: {
    color: theme.palette.secondary.main
  },

  menuIcon: {
    paddingRight: theme.spacing(8)
  },

  root: {
    flexGrow: 1,
  },

  title: {
    textTransform: 'uppercase',
    paddingLeft: 15
  }
}));

const Home = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" >
            <MenuIcon className={classes.menuIcon} />
            <img src={Preto} alt="logo" className={classes.logo} />
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

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Whatshot />
              </ListItemIcon>
              <ListItemText primary="Trending" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Subscriptions />
              </ListItemIcon>
              <ListItemText primary="Subscriptions" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <VideoLibrary />
              </ListItemIcon>
              <ListItemText primary="Library" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <History />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <WatchLater />
              </ListItemIcon>
              <ListItemText primary="Watch Later" />
            </ListItem>

            <Divider />
            <Typography gutterBottom variant="subtitle1" classes={{
              subtitle1: classes.title
            }}>
              More from Youtube
            </Typography>
            
            <ListItem button>
              <ListItemIcon>
                <YouTube />
              </ListItemIcon>
              <ListItemText primary="YouTube Premium" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Theaters />
              </ListItemIcon>
              <ListItemText primary="Movies" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Games />
              </ListItemIcon>
              <ListItemText primary="Gaming" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <LiveTv />
              </ListItemIcon>
              <ListItemText primary="Live" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <WbIncandescentIcon />
              </ListItemIcon>
              <ListItemText primary="Learning" />
            </ListItem>

          </List>
        </div>
      </Drawer>
    </div>
  )
}

export default Home;
