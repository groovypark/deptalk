import React, { Component } from 'react';
import './ChatInfo.css';

function ChatInfo(props) {
  console.log('chatinfo',props);
  if (props.info.is_owner) {
    return (
      <li className="message__item"><span className="message__user">{props.info.user}</span><span className="message__text is_self">{props.info.message}</span></li>
    );
  } else {
    return (
      <li className="message__item"><span className="message__user">{props.info.user}</span><span className="message__text">{props.info.message}</span></li>
    )
  }

}

export default ChatInfo;