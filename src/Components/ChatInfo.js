import React from 'react';
import './ChatInfo.css';

function ChatInfo(props) {
  console.log('index', props.index);
  console.log('last', props.last);
  if (props.info.is_owner) {
    return (
      <li className={ props.index === props.last ? 'message__item message__item__active last__item' : 'message__item message__item__active' }><span className="message__user">{props.info.user}</span><span className="message__text is_self">{props.info.message}</span></li>
    );
  } else {
    return (
      <li className={ props.index === props.last ? 'message__item last__item' : 'message__item' }><span className="message__user">{props.info.user}</span><span className="message__text">{props.info.message}</span></li>
    )
  }

}

export default ChatInfo;