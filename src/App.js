import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';

import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Report to sauban',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Night supplication',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Go to mosque',
        completed: false
      }
    ]
  };
  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Delete Todo
  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
    // console.log('tes', id)
  };
  //Add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
    // console.log(title);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                  <AddTodo addTodo={this.addTodo} />
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
