import React, { Component } from 'react'
import Textarea from "react-textarea-autosize";
import './ChatForm.css';

export default class ChatForm extends Component {
  state = {}
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
  // console.log('in chatform', this.state);
    this.props.onSubmit(this.state.text);
  }
  render() {
    return (
      <form className="chat__input_container" onSubmit={this.handleSubmit.bind(this)}>
        {/* </form>/<h1 value={this.state.name} onChange={this.handleChange} name="name"/> </h1> */}
        <Textarea className="chat__input_area" value={this.state.text} onChange={this.handleChange.bind(this)} name="chat"/>
        <button className="chat__input_button" type="submit">등록</button>
      </form>
    );
  }
}
