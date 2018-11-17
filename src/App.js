import React, { Component, Fragment } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import AddUser from './Components/AddUser';
// import ChattingRoom from './components/ChattingRoom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  getValue(newValue) {
    this.setState({ value: newValue });
  }
  getUsers(newUser) {
    this.setState({ user: newUser });
  }
  render() {
    return (
      <div className="container">
        <div className="user__container">
          <AddUser onChange={this.getValue.bind(this)} onSubmit={this.getUsers.bind(this)} />
          <Link className="button__chat" to={{pathname: '/chatting', state: {user: this.state.value} }}>채팅룸 입장</Link>
        </div>
      </div>
    );
  }
}

export default App;