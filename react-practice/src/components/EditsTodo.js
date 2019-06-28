import React from 'react';

function EditsTodo(props) {
    return (
        <li>
            <form className="edit-todo" onSubmit={(e) => { props.saveTodo(props.item.id, e) }}>
                <input name="edit-text" defaultValue={props.item.text} />
                <input type="submit" className={'btn btn-primary'} value="Save" />
            </form>
        </li>
    );
}

export default EditsTodo;