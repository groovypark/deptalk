import React, { Component } from 'react';
import ChatForm from './ChatForm';
import ChatInfoList from './ChatInfoList'
import UserInfoList from './UserInfoList';
import axios from 'axios';

class ChattingRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    console.log(this.props.location.state.user[0].user)
    this.state = {
      user: this.props.location.state.user[0].user,
      // id: 2,
      // chattingList: [{
      //     id: 0,
      //     name: '비버',
      //     chat: '안녕하세요'
      //   },
      //   {
      //     id: 1,
      //     name: '수빈',
      //     chat: '안녕하세요'
      //   }
      // ],
      // userList: [{
      //   id: 0,
      //   user: '비버'
      // }, {
      //   id: 1,
      //   user: '수빈'
      // }]
    }

    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    // 소켓 연결 전에 이전 메세지들 불러오기
    axios.get('http://125.132.216.192:8000/api/chat/1', (res) => {
      this.setState({
        chattingList: res.data
      })
    })

    this.socket = new WebSocket('ws://125.132.216.192:8000/chat/1');
    this.socket.onopen = event => {
      // 유저가 채팅방에 접속함을 알림
      this.socket.send(JSON.stringify({
        type: 'active_user',
        user: this.state.user
      }))
    }

    this.socket.onmesssage = event => {
      console.log(event)
    }
  }

  sendMessage(newChat) {
    // let id = 0;
    const newMessage = {
      // id: id++,
      type: 'send_message',
      user: this.state.user,
      message: newChat
    }
    this.setState({ message: newMessage });
    console.log('in room', newMessage);
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(newMessage));
    }
  }
  render() {
    return (
      <div>
        <p>{this.props.location.state.user[0].nickname}</p>
        <div style={{width:'30%', float:'left'}}>
          <UserInfoList data={this.state.userList}/>
        </div>
        <div style={{width:'70%', float:'right'}}>
          <ChatInfoList data={this.state.chattingList}/>
        </div>
        <div style={{position:'absolute', bottom:'0', width:'100%', height:'70px'}}>
          <ChatForm onSubmit={this.sendMessage.bind(this)} />
        </div>
      </div>
    )
  }
}

export default ChattingRoom;