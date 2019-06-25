import React from 'react';

function NotEditsTodo(props) {
    return (
        <li>
            <h3>
                <i>{props.count + 1}. </i>
                {props.item.text}
            </h3>
            <div>
                <button className="btn btn-success mr-2" type="button" onClick={() => { props.editTodo(props.item.id) }}>Edit</button>
                <button className="btn btn-danger" type="button" onClick={() => { props.deleteTodo(props.item.id) }}>Delete</button>
            </div>
        </li >
    );
}

export default NotEditsTodo;