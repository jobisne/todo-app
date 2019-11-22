import React, { Component } from 'react';
import {Link, withRouter } from 'react-router-dom';

class Landing extends Component{
 
  render(){
    const loginRegLink = (
      <div>
         <Link to="/login" style={linkStyle}>Login</Link> |
         <Link to="/register" style={linkStyle}>Register</Link>
      </div>
     
    )
    const userLink = (
      <Link to="/myapp" style={linkStyle}>MyTodo</Link>
    )
    return(
      <div style={headerStyle}>
        {console.log(this.props.logged)}
        {!this.props.logged ? userLink : loginRegLink}
      </div>
    )
  }
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}
const linkStyle = {
color: '#fff',
textDecoration: 'none'
}
export default withRouter(Landing);