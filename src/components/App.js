import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Tasks from './Tasks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Tasks/>
      </div>
    )
  }
}

export default App;