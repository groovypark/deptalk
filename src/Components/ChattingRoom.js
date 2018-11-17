import React, { Component } from 'react';
import ChatForm from './ChatForm';
import ChatInfoList from './ChatInfoList'
import UserInfoList from './UserInfoList';
import axios from 'axios';

class ChattingRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      user: this.props.location.state.user,
    }

    // this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    // 소켓 연결 전에 이전 메세지들 불러오기
    axios.get(`http://125.132.216.192:8000/api/chat/1/${this.state.user}`).then(res => {
      console.log(res.data);
      const data = res.data;
      const list = []
      data.forEach(msg => {
        const messages = {
          user: msg.user,
          message: msg.message,
          is_active: msg.is_active
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
      console.log('event', event);
    }
  }

  sendMessage(newChat) {
    // let id = 0;
    const newMessage = {
      message: newChat
    }
    this.setState({ message: newMessage });
    console.log('in room', newMessage);
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(newMessage));
    }
  }
  render() {
    console.log('check state', this.state);
    console.log('check', this.state.list);
    return (
      <div>
        <p>{this.props.location.state.user[0].nickname}</p>
        <div style={{width:'30%', float:'left'}}>
          <UserInfoList data={this.state.userList}/>
        </div>
        <div style={{width:'70%', float:'right'}}>
          <ChatInfoList data={this.state.list} />
        </div>
        <div style={{position:'absolute', bottom:'0', width:'100%', height:'70px'}}>
          <ChatForm onSubmit={this.sendMessage.bind(this)} />
        </div>
      </div>
    )
  }
}

export default ChattingRoom;