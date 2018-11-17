import React, { Component } from 'react'
import Textarea from "react-textarea-autosize";

export default class ChatForm extends Component {
   state = {
    chat: ''
  }
  handleChange = (e) => {
    this.setState({
      chat: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      chat: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* </form>/<h1 value={this.state.name} onChange={this.handleChange} name="name"/> </h1> */}
        <Textarea value={this.state.chat} onChange={this.handleChange} name="chat"/>
        <button type="submit">등록</button>
      </form>
    );
  }
}
