import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      users: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  handleChange(e) {
    console.log('typing', e.target.value);
    this.setState({
      value: e.target.value
    })
  }
  addUser(e) {
    if (e.keyCode === 13) {
      this.setState({
        ...this.state.users,
        users: e.target.value
      })
      console.log('users', this.state.users)
    }
  }
  render() {
    return (
      <form>
        <label htmlFor="nickname">Nickname</label>
        <input className="form__input" type="text" id="nickname" value={this.state.value} minLength="1" maxLength="8" onChange={this.handleChange} onKeyPress={this.addUser} required />
      </form>
    );
  }
}

export default AddUser;
