import React, { Component } from 'react';
import { login } from './UserFunction';

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const logUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    const loginUser = login(logUser);
    if (loginUser) {
      this.props.history.push(`/myapp`);                                                                            
    }    
    this.props.addUser(userReg);
    this.setState({username: ''});
    this.setState({email: ''});
    this.setState({password: ''});

  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="username"
            onChange={this.onChange}
            value={this.state.username}
            placeholder="User Name"
          />
          <input
            type="text"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
            placeholder="Password"
          />
          <input
            type="submit"
            value="Submit"
            
          />
        </form>
      </div>
    );
  }
}

export default Register;
