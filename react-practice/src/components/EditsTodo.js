import React from 'react';

function EditsTodo(props) {
    return (
        <li className="edit-todo">
            <input defaultValue={props.item.text} />
            <button onClick={() => { props.saveTodo(props.item.id) }} type="button" className={'btn btn-primary'}>Save</button>
        </li >
    );
}

export default EditsTodo;