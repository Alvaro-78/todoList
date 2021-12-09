import { TodoItems } from './TodoItems';
import { useTodos } from '../hooks/useTodos';

export const TodoList = () => {
	const { todos } = useTodos();

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
