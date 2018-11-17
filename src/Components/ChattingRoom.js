import React, { Component } from 'react'
import ChatForm from './ChatForm';
import ChatInfoList from './ChatInfoList'
import UserInfoList from './UserInfoList';

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
      ],
      userList: [{
        id: 0,
        user: '비버'
      }, {
        id: 1,
        user: '수빈'
      }]
    }
    
    this.handeCreate = this.handleCreate.bind(this);
  }
  
  handleCreate = (chat) => {
    const { chattingList } = this.state;
    this.setState({
      chattingList: chattingList.concat({
        id: this.id++, ...chat
      })
    })
  }
  render() {
    return (
      <div>
        <div style={{width:'30%', float:'left'}}>
          <UserInfoList data={this.state.userList}/>
        </div>
        <div style={{width:'70%', float:'right'}}>
          <ChatInfoList data={this.state.chattingList}/>
        </div>
        <div style={{position:'absolute', bottom:'0', width:'100%', height:'70px'}}>
          <ChatForm onCreate={this.handleCreate} />
        </div>
      </div>
    )
  }
}

export default ChattingRoom;