import React, { Component } from 'react';
import ChatForm from './ChatForm';
import ChatInfoList from './ChatInfoList'
import UserInfoList from './UserInfoList';
import './ChattingRoom.css';
import axios from 'axios';
import { Link } from "react-router-dom";

class ChattingRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.location.state.user,
    }
  }

  componentDidMount() {
    // 소켓 연결 전에 이전 메세지들 불러오기
    axios.get(`http://125.132.216.192:8000/api/chat/1/${this.state.user}`).then(res => {
      const data = res.data;
      const list = []
      data.forEach(msg => {
        const messages = {
          user: msg.user,
          message: msg.message,
          is_active: msg.is_active,
          is_owner: msg.is_owner
        }
        list.push(messages);
      })

      this.setState({
        list
      })
    })

    this.socket = new WebSocket(`ws://125.132.216.192:8000/chat/1/${this.state.user}`);
    this.socket.onopen = event => {

    }

    this.socket.onmessage = event => {
      let data = JSON.parse(event.data);
      data = Object.assign({}, data, {
        is_owner: this.state.user === data.user
      })

      let MessageList = this.state.list;
      MessageList.push(data);

      let newState = Object.assign(this.state, {
        list: MessageList
      });
      this.setState(newState);
    }
  }

  sendMessage(newChat) {
    const newMessage = {
      user: this.state.user,
      message: newChat,
      is_active: true,
      is_owner: false,
    }
    this.setState({ message: newMessage });
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(newMessage));
    }
  }
  render() {
    return (
      <div className="room__container">
        <header>
          <p className="user__self">{this.state.user}</p>
          <Link to={{pathname: '/'}}>
            <button className="user__exit_button"><span className="a11y-hidden">exit</span></button>
          </Link>
        </header>
        <div className="room__chat">
          <div className="room__userlist">
            <UserInfoList data={this.state.userList}/>
          </div>
          <div className="room__chatlist">
            <ChatInfoList data={this.state.list} />
          </div>
        </div>
        <div className="room__textinput">
          <ChatForm onSubmit={this.sendMessage.bind(this)} />
        </div>
      </div>
    )
  }
}

export default ChattingRoom;