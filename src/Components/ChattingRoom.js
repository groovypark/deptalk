import React, { Component } from 'react';
import ChatForm from './ChatForm';
import ChatInfoList from './ChatInfoList';
import axios from 'axios';

class ChattingRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      chattingList: [{
          id: 0,
          name: '비버',
          chat: '안녕하세요'
        },
        {
          id: 1,
          name: '수빈',
          chat: '안녕하세요'
        }
      ]
    }
    
    this.handeCreate = this.handleCreate.bind(this);
  }

  componentDidMount() {
    // 소켓 연결 전에 이전 메세지들 불러오기
    axios.get('http://125.132.216.192:8000/api/chat/1', (res) => {
      this.setState({
        chattingList: res.data
      })
    })


    this.socket = new WebSocket('ws://125.132.216.192:8000/chat/1');
    if (this.socket.readyState === WebSocket.OPEN) {
      console.log('connected!');
    } else if (this.socket.readyState === WebSocket.CONNECTING) {
      console.log('connecting...');
    }
  }
  
  handleCreate = (chat) => {
    const { chattingList } = this.state;

    // 소켓이 연결되지 않은 경우 에러 메세지 띄우기
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({
        message: chat,
      }));
    }

    this.setState({
      chattingList: chattingList.concat({
        id: this.id++, ...chat
      })
    })
  }
  render() {
    return (
      <div>
        <ChatForm onCreate={this.handleCreate} />
        <ChatInfoList data={this.state.chattingList}/>
      </div>
    )
  }
}

export default ChattingRoom;