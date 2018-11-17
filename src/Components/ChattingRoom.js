import React, { Component } from 'react'
import ChatForm from './ChatForm';
import ChatInfoList from './ChatInfoList'

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
        <ChatForm onCreate={this.handleCreate} />
        <ChatInfoList data={this.state.chattingList}/>
      </div>
    )
  }
}

export default ChattingRoom;