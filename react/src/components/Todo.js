import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                <span className={`${this.props.status == 'incomplete' ? '' : 'completed'}`} onClick={() => this.props.toggleTodo(this.props.index)}>{this.props.task}</span>
                <button onClick={() => this.props.removeTodo(this.props.index)}>X</button>
            </div>
        );
    }
}

export default Todo;