import { useTodos } from '../hooks/useTodos';
import { Todo } from '../interfaces/interfaces';

interface TodoItemsProps {
	todo: Todo;
}

export const TodoItems = ({ todo }: TodoItemsProps) => {
	const { toggleTodo } = useTodos();

	const handleDbClick = () => {
		toggleTodo(todo.id);
	};

	return (
		<>
			<li
				style={{
					cursor: 'pointer',
					textDecoration: todo.done ? 'line-through' : '',
				}}
				onDoubleClick={handleDbClick}
			>
				{todo.description}
			</li>
		</>
	);
};
