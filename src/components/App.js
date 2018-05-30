import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import './App.css';
import Header from './Header';
import Tasks from './Tasks';

class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: '#52c7b8',
          main: '#009688',
          dark: '#00675b',
          contrastText: '#fff'
        },
        secondary: {
          light: '#bef67a',
          main: '#8bc34a',
          dark: '#5a9216',
          contrastText: '#000'
        }
      }
    });
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header/>
          <Tasks/>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;