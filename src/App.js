import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import ChattingRoom from './components/ChattingRoom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={AddUser}/>
        <Route path="/chatting" component={ChattingRoom}/>
      </div>
    );
  }
}

export default App;
