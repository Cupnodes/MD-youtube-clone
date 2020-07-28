import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Button, List, ListItem, Drawer, ListItemText, Divider, ListItemIcon, Typography, Box, Grid } from '@material-ui/core';
import Preto from "../assets/images/preto.png";
import Thumb1 from '../assets/images/thumb1.png';
import Thumb2 from '../assets/images/thumb2.png';
import Thumb3 from '../assets/images/thumb3.png';
import Thumb4 from '../assets/images/thumb4.png';
import Thumb5 from '../assets/images/thumb5.png';
import Thumb6 from '../assets/images/thumb6.png';
import Thumb7 from '../assets/images/thumb7.png';
import Thumb8 from '../assets/images/thumb8.png';
//import Avatar from '../assets/images/avatar.jpeg';

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

  divider: {
    marginTop: 8,
    marginBottom: 3
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

const thumbs = [Thumb1, Thumb2, Thumb3, Thumb4, Thumb5, Thumb6, Thumb7, Thumb8];

const videos = [
  {
    id: 1,
    title:
      'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg'
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    channel: 'Lucas Nhimi',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg'
  },
  {
    id: 3,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg'
  },
  {
    id: 4,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg'
  },
  {
    id: 5,
    title:
      'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
    channel: 'Lucas Nhimi',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg'
  },
  {
    id: 6,
    title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
    channel: 'Lucas Nhimi',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg'
  },
  {
    id: 7,
    title:
      'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
    channel: 'Lucas Nhimi',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg'
  },
  {
    id: 8,
    title:
      'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
    channel: 'Lucas Nhimi',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg'
  },
];

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
      <Box display='flex'>
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
            <Divider classes={{
              root: classes.divider
            }} />
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

              <Divider classes={{
                root: classes.divider
              }} />
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

        <Box p={8}>
          <Toolbar />
          <Typography variant="h5" color='textPrimary' style={{ fontWeight: 'bold' }}>
            Recommended
            </Typography>
          <Grid container spacing={3}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={thumbs[index]}
                  />

                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default Home;
