import React from 'react';
import TodoList from './TodoList';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleEditTodo = this.handleEditTodo.bind(this);
        this.handleSave = this.handleSave.bind(this);

        this.state = {
            todos: [
                { id: 1, text: 'buy milk', edit: true },
                { id: 2, text: 'another todos', edit: true },
                { id: 3, text: 'todos 3', edit: true },
                { id: 4, text: 'another todos 4', edit: true },
            ],
            count: 5,
        }
    }

    handleAddTodo(e) {
        e.preventDefault();
        let idTodo = this.state.count + 1;
        let newTodo = e.target.todo.value;

        if (!newTodo) return false;
        this.setState({
            todos: [...this.state.todos, { id: idTodo, text: newTodo, edit: true }],
            count: idTodo
        })
        e.target.todo.value = '';
    }

    handleDeleteTodo(i) {
        this.setState({
            todos: this.state.todos.filter(el => el.id !== i)
        })
    }

    handleEditTodo(i) {
        const editsTodo = this.state.todos.filter(el => el.id === i)[0];
        editsTodo.edit = false;

        this.setState({
            todos: [...this.state.todos]
        })
    }

    handleSave(i, e) {
        e.preventDefault();

        const saveTodo = this.state.todos.filter(el => el.id === i)[0];
        const newValue = e.target.children[0].value;
        saveTodo.edit = true;
        saveTodo.text = newValue;

        this.setState({
            todos: [...this.state.todos]
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
                    saveTodo={this.handleSave}
                    todos={this.state.todos}
                />
            </div>
        )
    }
}

export default Todo;