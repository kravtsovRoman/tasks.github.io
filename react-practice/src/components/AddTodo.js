import React from 'react';

function AddTodo(props) {

    return (
        <form className="add-todo" onSubmit={props.addTodo}>
            <input type="text" name="todo" placeholder="Новая задача..." />
            <input type="submit" value="Добавьте задачу" />
        </form>
    );
}

export default AddTodo;