import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import AddUser from './Components/AddUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.getValue = this.getValue.bind(this);
  }
  getValue(newValue) {
    this.setState({ value: newValue });
  }
  isInputActive() {
    const value = this.state.value;
    const button = document.querySelector('.button__chat');
    if (value !== undefined && value.length >= 0) {
      button.classList.add('button__chat_active');
    } else if (value !== undefined && value.length === 1) {
      button.classList.remove('button__chat_active');
    }
  }
  render() {
    this.isInputActive();
    return (
      <div className="container">
        <div className="user__container">
          <AddUser onChange={this.getValue} />
          <Link className="button__chat" to={{pathname: '/chatting', state: {user: this.state.value} }}>채팅룸 입장</Link>
        </div>
      </div>
    );
  }
}

export default App;