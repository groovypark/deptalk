import React from 'react';
import './UserInfo.css';

function UserInfo(props) {
  return (
    <li className="user__item"><span className="user__name">{props.info.user}</span></li>
  );
}

export default UserInfo;