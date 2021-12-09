import { Todo } from '../interfaces/interfaces';

interface TodoItemsProps {
	todo: Todo;
}

export const TodoItems = ({ todo }: TodoItemsProps) => {
	const handleDbClick = () => {
		console.log('handleDbClick', todo.description);
	};

	return (
		<>
			<li onDoubleClick={handleDbClick}>{todo.description}</li>
		</>
	);
};
