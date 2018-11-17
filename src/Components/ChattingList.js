import React, { Component } from 'react'

export default class ChattingList extends Component {
    static defaultProps = {
    chat: ''
  }

  render() {
    const { chat } = this.props;
    const list = chat.map(chat => (<li>{chat}</li>));

    return (
        <ul>{list}</ul>
    );
  }
}
