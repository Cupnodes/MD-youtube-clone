import React from 'react';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Home from './components/Home';

class App extends React.Component {

  render() {    

    const theme = createMuiTheme({
      palette: {
        primary: { 
          main: '#f44336'
        },
        secondary: {
          main: '#3f51b5'
        }
      },
      spacing: 4
    });

    return (
      <div>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </div>
    )
  }

}

export default App;
