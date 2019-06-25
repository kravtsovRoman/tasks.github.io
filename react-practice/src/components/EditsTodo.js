import React from 'react';

function EditsTodo(props) {
    return (
        <li>
            <form className="add-todo" onSubmit={props.addTodo}>
                <input />
            </form>
        </li >
    );
}

export default EditsTodo;