import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoItems } from './TodoItems';

export const TodoList = () => {
	const { todoState } = useContext(TodoContext);

	const { todos } = todoState;

	return (
		<>
			<div>
				TodoList Component
				<ul>
					{todos.map((todo) => (
						<TodoItems key={todo.id} todo={todo} />
					))}
				</ul>
			</div>
		</>
	);
};
