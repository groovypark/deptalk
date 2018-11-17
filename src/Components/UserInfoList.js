import React, { Component } from 'react'
import UserInfo from './UserInfo';

export default

class UserInfoList extends Component {
  static defaultProps = {
    data: [{
          id: 0,
          name: '비버',
        },
        {
          id: 1,
          name: '수빈',
        }
      ]
  }

  render() {
    const { data } = this.props;
    const list = data.map(
      (info, index) => (<UserInfo key={index} info={info}/>)
    );

    return (
      <ul className="user__list">
        {list}
      </ul>
    );
  }
}
