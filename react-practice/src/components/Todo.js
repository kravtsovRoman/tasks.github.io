import React from 'react';
import TodoList from './TodoList';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeletetodo = this.handleDeletetodo.bind(this);

        this.state = {
            todos: [
                { id: 1, text: 'buy milk' },
                { id: 2, text: 'another todos' },
                { id: 3, text: 'todos 3' },
                { id: 4, text: 'another todos 4' },
            ],
            count: 5
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

    handleDeletetodo(i) {
        console.log(i)
        this.setState({
            todos: this.state.todos.filter(el => el.id !== i)
        })
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <TodoList deleteTodo={this.handleDeletetodo} addTodo={this.handleAddTodo} todos={this.state.todos} />
            </div>
        )
    }
}

export default Todo;