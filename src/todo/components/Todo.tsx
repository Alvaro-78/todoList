import { TodoProvider } from '../context/TodoProvider';
import { TodoList } from './TodoList';

export const Todo = () => {
	return (
		<TodoProvider>
			<div>
				<h1>Todo: </h1>
				<TodoList />
			</div>
		</TodoProvider>
	);
};
