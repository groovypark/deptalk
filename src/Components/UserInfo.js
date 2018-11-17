import React from 'react';

function UserInfo(props) {
  return (
    <li className="user__list"><span className="user__name">{props.info.user}</span></li>
  );
}

export default UserInfo;