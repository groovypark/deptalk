import React, { Component } from 'react'
import TextArea from './TextArea';
import ChattingList from './ChattingList'

export default class ChattingRoom extends Component {
  state = {
    chattingList: []
  }
  handleCreate = (chat) => {
    const { chattingList } = this.state;
    this.setState({
      chattingList: chattingList.concat({
        ...chat
      })
    })
  }
  render() {
    return (
      <div>
        <TextArea onCreate={this.handleCreate}/>
        <ChattingList data={this.state.chattingList}/>
      </div>
    )
  }
}