import React from 'react';
import AddTodo from './AddTodo';
import EditsTodo from './EditsTodo';
import NotEditsTodo from './NotEditsTodo';

class TodoList extends React.Component {

	render(props) {
		return (
			< div className="todo-list" >
				<ul>
					{this.props.todos.map((item, i) => {
						return (

							item.edit ?
								<NotEditsTodo
									item={item}
									count={i}
									key={i}
									editTodo={this.props.editTodo}
									deleteTodo={this.props.deleteTodo}
								/> :
								<EditsTodo
									item={item}
									key={i}
									count={i}
									saveTodo={this.props.saveTodo}
								/>
						)
					})}
				</ul>
				<AddTodo addTodo={this.props.addTodo} />
			</div >
		)
	}

}


export default TodoList;