import React from 'react';
import TodoList from './TodoList';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleEditTodo = this.handleEditTodo.bind(this);

        this.state = {
            todos: [
                { id: 1, text: 'buy milk', visible: true },
                { id: 2, text: 'another todos', visible: true },
                { id: 3, text: 'todos 3', visible: true },
                { id: 4, text: 'another todos 4', visible: true },
            ],
            count: 5,
        }
    }

    handleAddTodo(e) {
        e.preventDefault();
        let idTodo = this.state.count + 1;
        console.log(idTodo)
        let newTodo = e.target.todo.value;

        if (!newTodo) return false;
        this.setState({
            todos: [...this.state.todos, { id: idTodo, text: newTodo }],
            count: idTodo
        })
        e.target.todo.value = '';
    }

    handleDeleteTodo(i) {
        console.log('delete', i)
        this.setState({
            todos: this.state.todos.filter(el => el.id !== i)
        })
    }

    handleEditTodo(i) {
        var editsTodo = this.state.todos.filter(el => el.id === i)[0];
        editsTodo.visible = false;

        this.setState({
            // todos: newState
        })

    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <TodoList
                    editTodo={this.handleEditTodo}
                    deleteTodo={this.handleDeleteTodo}
                    addTodo={this.handleAddTodo}
                    todos={this.state.todos} />
            </div>
        )
    }
}

export default Todo;