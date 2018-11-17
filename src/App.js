import React, { Component } from 'react';
import './App.css';
// import { Route, Switch } from "react-router-dom";
import AddUser from './components/AddUser';
// import ChattingRoom from './components/ChattingRoom';

class App extends Component {
  render() {
    return (
      <AddUser/>
      // <Switch>
      //   <Route exact path="/" component={AddUser}/>
      //   <Route path="/chatting" component={ChattingRoom}/>
      // </Switch>
    );
  }
}

export default App;
