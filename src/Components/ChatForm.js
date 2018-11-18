import React, { Component } from 'react'
import Textarea from "react-textarea-autosize";
import './ChatForm.css';

export default class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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
      text: ""
    });
    this.props.onSubmit(e.target.value.trim());
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSubmit(e);
    } else if (e.key === 'Enter' && e.shiftKey) {

    }
  }

  render() {
    const text = this.state.text;

    return (
      <form className="chat__input_container"
        // onSubmit={this.handleSubmit}
      >
        <Textarea className="chat__input_area"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyPress}
          name="chat"
        />
        <button className={ text !== undefined && text.length > 1  ? 'chat__input_button_active' : 'chat__input_button' } 
          type="button" onClick={this.handleSubmit}>등록</button>
      </form>
    );
  }
}
