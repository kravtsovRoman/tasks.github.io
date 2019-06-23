import React from 'react';
import TodoList from './TodoList';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, text: 'buy milk' },
                { id: 2, text: 'another todos...' }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <TodoList todos={this.state.todos} />
            </div>
        )
    }
}

export default Todo;