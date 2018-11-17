import React, { Component } from 'react'
import Textarea from "react-textarea-autosize";
import './ChatForm.css';

export default class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
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
    const text = this.state.text;
    console.log(this.state);
    return (
      <form className="chat__input_container" onSubmit={this.handleSubmit}>
        {/* </form>/<h1 value={this.state.name} onChange={this.handleChange} name="name"/> </h1> */}
        <Textarea className="chat__input_area" value={this.state.text} onChange={this.handleChange} name="chat"/>
        <button className={ text !== undefined && text.length > 1  ? 'chat__input_button_active' : 'chat__input_button' } type="submit">등록</button>
      </form>
    );
  }
}
