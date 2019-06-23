import React from 'react';

function TodoList(props) {

    return (
        <div>
            <ul>
                {props.todos.map((item) => {
                    return (
                        <li key={item.id}>
                            <h3>
                                <i>{item.id}. </i>
                                {item.text}</h3>
                        </li>
                    )
                })}
            </ul>
            <button type="button">Добвить задачу</button>
        </div>
    )

}


export default TodoList;