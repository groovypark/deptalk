import React, { Component } from 'react'
import Textarea from "react-textarea-autosize";

export default class TextArea extends Component {
  state = {
    chat: ''
  }
  handleChange = (e) => {
    this.setState({
      chat: e.target.value
    })
  }
  render() {
    return (
      <div>
        <Textarea value={this.state.chat} onChange={this.handleChange}/>
      </div>
    )
  }
}