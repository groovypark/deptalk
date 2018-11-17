import React from 'react'

function ChattingRoom(props) {
  const chattingList = []
  chattingList.push(props)
  return (
    <ul>
      {chattingList.map((chat) =>
        <ListItem key={chat.toString()}
                  value={chat} />

      )}
    </ul>
  );
}

function ListItem(props) {
  return <li>{props.value}</li>;
}

export default ChattingRoom;