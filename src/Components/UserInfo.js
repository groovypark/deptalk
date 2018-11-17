import React, { Component } from 'react';

export default class ChatInfo extends Component {
  static defaultProps = {
    info: {
      user: '이름',
      id: 0
    }
  }
  
  render() {
    const {user} = this.props.info;
    
    return (
      <div>
        <div><b>{user}</b></div>
      </div>
    );
  }
}