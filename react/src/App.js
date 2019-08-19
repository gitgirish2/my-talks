import React, { Component } from 'react';
import Todo from './components/Todo'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [{
        task: 'sample Todo',
        status: 'complete'
      }],
      newTodo: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  handleInput(e) {
    this.setState({
      newTodo: e.target.value
    })
  }

  addTodo() {
    const { todos, newTodo } = this.state

    this.setState({
      todos: [
        ...todos,
        {
          task: newTodo,
          status: 'incomplete'
        }
      ],
      newTodo: ''
    })
  }

  toggleTodo(index) {

    const { todos } = this.state

    todos[index]['status'] = todos[index]['status'] === 'incomplete' ? 'complete' : 'incomplete'

    this.setState({
      todos
    })
  }

  removeTodo(index) {
    let { todos } = this.state

    todos = todos.slice(0, index).concat(todos.slice(index+1))

    this.setState({ todos })
  }

  render() {
    console.log(this.state);
    return (
      <div style={{ padding: 20, margin: 20}}>
        <header>
          TODO-List
        </header>
        <input type="text" onChange={this.handleInput} value={this.state.newTodo} />
        <button onClick={this.addTodo}>Add Todo</button>
        <div>
          TODOS:
          <ul>
          {
            this.state.todos.map((todo, index) => (
              <li key={index}>
                <Todo
                  task={todo.task}
                  status={todo.status}
                  index={index}
                  toggleTodo={this.toggleTodo}
                  removeTodo={this.removeTodo}
                />
              </li>
            ))
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
