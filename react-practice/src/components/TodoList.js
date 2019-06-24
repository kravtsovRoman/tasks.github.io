import React from 'react';
import AddTodo from './AddTodo';

class TodoList extends React.Component {


	render() {
		return (
			<div className="todo-list">
				<ul>
					{this.props.todos.map((item, i) => {
						return (
							<li key={i + 1}>
								<h3>
									<i>{i + 1}. </i>
									{item.text}
								</h3>
								<button type="button" onClick={() => { this.props.deleteTodo(item.id) }}>Delete</button>
							</li>
						)
					})}
				</ul>
				<AddTodo addTodo={this.props.addTodo} />
			</div >
		)
	}


}


export default TodoList;