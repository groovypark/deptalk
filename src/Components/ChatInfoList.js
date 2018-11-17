import React from 'react'
import ChatInfo from './ChatInfo';

function ChatInfoList(props) {
    if (props.data !== undefined) {
      const oldMessage = props.data;
      const list = oldMessage.map((info, index) => { return (<ChatInfo key={index} info={info}/>)
      }
      )
    return (
        <ul className="message__list">
          {list}
        </ul>
    );
    } else {
      return <div>empty</div>;
    }
}

export default ChatInfoList;
