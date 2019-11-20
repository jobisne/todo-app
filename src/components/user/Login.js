import React, { Component } from 'react';
import { login } from './UserFunction';


export class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const logUser = {
      email: this.state.email,
      password: this.state.password
    }

     const yes = login(logUser);
 console.log(yes)
    if (yes) {
      this.props.history.push(`/myapp`);                                   
    } else {
      this.props.history.push(`/`);
    }   
    // this.props.addUser(userReg);
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


export default Login;
