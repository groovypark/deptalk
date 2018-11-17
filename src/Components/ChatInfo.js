import React, { Component } from 'react';
import './ChatInfo.css';

function ChatInfo(props) {
  console.log('chatinfo',props);
  if (props.info.user === '나경') {
    return (
      <li className="message__item is_self"><span className="message__user">{props.info.user}</span>{props.info.message}</li>
    );
  } else {
    return (
      <li className="message__item"><span className="message__user">{props.info.user}</span>{props.info.message}</li>
    );
  }

}

export default ChatInfo;