import React, { Component, Fragment } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import AddUser from './Components/AddUser';
// import ChattingRoom from './components/ChattingRoom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <AddUser/>
        <Link to="chatting">채팅룸 입장</Link>
      </Fragment>
      // <Switch>
      //   <Route exact path="/" component={AddUser}/>
      //   <Route path="/chatting" component={ChattingRoom}/>
      // </Switch>
    );
  }
}

export default App;
