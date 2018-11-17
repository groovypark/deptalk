import React, { Component, Fragment } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import AddUser from './Components/AddUser';
// import ChattingRoom from './components/ChattingRoom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  getUsers(newUser) {
    this.setState({ user: newUser });
  }
  render() {
    return (
      <Fragment>
        <AddUser onChange={this.getUsers.bind(this)} />
        <Link to={{pathname: '/chatting', state: {user: this.state.user} }}>채팅룸 입장</Link>
      </Fragment>
    );
  }
}

export default App;
