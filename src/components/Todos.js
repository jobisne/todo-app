import React, { Component } from 'react';
import '../App.css';

class Todos extends Component {
  
  render() {
   
    return this.props.todos.map((todo) => (
      <h3>{ todo.title }</h3>
    ))
  }
}

export default Todos;
