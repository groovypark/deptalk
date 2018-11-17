import React, { Component } from 'react'
import UserInfo from './UserInfo';

export default

class UserInfoList extends Component {
  render() {
    const { data } = this.props;
    const activeUser = data.filter(user => user.is_active);
    const list = activeUser.map(
      (info, index) => { return <UserInfo key={index} info={info}/> }
    );

    return (
      <ul className="user__list">
        {list}
      </ul>
    );
  }
}
