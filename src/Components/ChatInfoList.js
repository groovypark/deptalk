import React, { Component } from 'react'
import ChatInfo from './ChatInfo';

export default 

class ChatInfoList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props;
    const list = data.map(
      (info, index) => (<ChatInfo key={index} info={info}/>)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}
