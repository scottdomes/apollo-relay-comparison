import React, { Component } from 'react';

export default class Form extends Component {
  state = { name: '', email: '' };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.email);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Add Contact</p>
        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <label>Email</label>
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
