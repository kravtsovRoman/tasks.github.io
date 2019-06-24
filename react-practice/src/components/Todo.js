import React from 'react';
import TodoList from './TodoList';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);

        this.state = {
            todos: [
                { id: 1, text: 'buy milk' },
                { id: 2, text: 'another todos...' }
            ]
        }
    }

    handleAddTodo(e) {
        e.preventDefault();
        let idTodo = this.state.todos.length + 1;
        let newTodo = e.target.todo.value;
        this.setState({
            todos: [...this.state.todos, { id: idTodo, text: newTodo }]
        })
        e.target.todo.value = '';
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <TodoList addTodo={this.handleAddTodo} todos={this.state.todos} />
            </div>
        )
    }
}

export default Todo;