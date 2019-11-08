import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';
import '../App.css';

class Todos extends Component {
  
  render() {
   
    return this.props.todos.map((todo) => (
     <Todoitem key={todo.id} todo={todo} markComplete = {this.props.markComplete} />
    ))
  }
}


// eslint-disable-next-line react/no-typos
Todos.PropTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
