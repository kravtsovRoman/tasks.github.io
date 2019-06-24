import React from 'react';

function AddTodo(props) {

    return (
        <form className="add-todo" onSubmit={props.addTodo}>
            <input type="text" name="todo" placeholder="Добавьте задачу" />
            <input type="submit" />
        </form>
    );
}

export default AddTodo;