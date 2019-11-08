import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Night supplication',
        completed: false
      },
      {
        id: 3,
        title: 'Go to mosque',
        completed: false
      }
    ]
  }
// Toggle Complete
  markComplete = (id) => {
    this.setState({ 
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  //Delete Todo
  deleteTodo = (id) => {
    this.setState({ 
      todos: this.state.todos.filter((todo) => todo.id !== id )
    });
    console.log('tes', id)
  }

  render() {
    return (
      <div className="App">
        <Todos  todos = { this.state.todos } markComplete = {this.markComplete} 
        deleteTodo = {this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
