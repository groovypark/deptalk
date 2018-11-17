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
    if (e.key === 'Enter') {
      e.preventDefault();
      const users = [...this.state.users];
      let id = 0;
      users.push({id: id++, nickname: e.target.value});
      this.setState({users});
      console.log('users', users);
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
