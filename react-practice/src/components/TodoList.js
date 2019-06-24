import React from 'react';
import AddTodo from './AddTodo';

class TodoList extends React.Component {


	render() {
		return (
			<div>
				<ul>
					{this.props.todos.map((item) => {
						return (
							<li key={item.id}>
								<h3>
									<i>{item.id}. </i>
									{item.text}
								</h3>
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