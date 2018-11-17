import React, { Component } from 'react';
import './ChatInfo.css';

function ChatInfo(props) {
  console.log('chatinfo',props);
    return (
      <li className="message__item"><span clasName="message__user">{props.info.user}</span>{props.info.message}</li>
    );
}

export default ChatInfo;