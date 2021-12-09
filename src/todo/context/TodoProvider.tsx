import { useReducer } from 'react';

import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = {
	todoCount: 2,
	todos: [
		{
			id: '1',
			description: 'hacer tareas de casa',
			completed: 'false',
		},
		{
			id: '2',
			description: 'limpiar la caja de los gatos',
			completed: 'false',
		},
	],
	completed: 0,
	pending: 2,
};

interface TodoProviderProps {
	children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
	const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

	const toggleTodo = (id: string) => {
		dispatch({ type: 'toggleTodo', payload: { id } });
	};

	return (
		<TodoContext.Provider
			value={{
				todoState,
				toggleTodo,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};
