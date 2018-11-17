import React from 'react';
import './UserInfo.css';

function UserInfo(props) {
  return (
    <li className={ props.info.is_active ? "user__item user__item__active" : "user__item"}>
      <span className="user__name">{props.info.name}</span>
    </li>
  );
}

export default UserInfo;