/* eslint-disable react/no-typos */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
   
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={() => {
              this.props.markComplete(id)
            }}
          />
          {'   '}
          {title}
          <button onClick={() => {this.props.deleteTodo(id)}} style={btnStyle}>X</button>
        </p>
      </div>
    );
  }
}
//PropTypes
Todoitem.PropTypes = {
  todo: PropTypes.object.isRequired
};
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}


export default Todoitem;
