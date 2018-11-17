import React, { Component, Fragment } from 'react';
import './AddUser.css';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      users: []
    }
  }
  handleChange(e) {
    console.log('typing', e.target.value);
    this.setState({
      value: e.target.value
    })
    this.props.onChange(this.state.value);
  }
  addUser(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }
  render() {
    return (
      <Fragment>
        <h1 className="user__title">닉네임을 입력해주세요.</h1>
        <form className="user__form">
          <label className="a11y-hidden" htmlFor="nickname">Nickname</label>
          <input className="user__input" type="text" id="nickname" value={this.props.value} onKeyPress={this.addUser.bind(this)} onChange={this.handleChange.bind(this)} minLength="1" maxLength="8" required />
        </form>
      </Fragment>
    );
  }
}

export default AddUser;