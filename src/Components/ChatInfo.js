import React, { Component } from 'react';

export default class ChatInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      chat: '',
      id: 0
    }
  }
  
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const {
      name, chat, id
    } = this.props.info;
    
    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{chat}</div>
      </div>
    );
  }
}