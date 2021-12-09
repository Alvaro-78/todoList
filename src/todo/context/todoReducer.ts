import { TodoState, Todo } from '../interfaces/interfaces';

type TodoAction =
	| { type: 'addTodo'; payload: Todo }
	| { type: 'toggleTodo'; payload: { id: string } };

// En los reducers siempre hay que devolver un nuevo estado!!!

export const todoReducer = (
	state: TodoState,
	action: TodoAction
): TodoState => {
	switch (action.type) {
		case 'addTodo':
			return {
				...state,
				todos: [...state.todos, action.payload],
			};

		case 'toggleTodo':
			return {
				...state,
				todos: state.todos.map(({ ...todo }) => {
					if (todo.id === action.payload.id) {
						todo.done = !todo.done;
					}
					return todo;
				}),
			};

		default:
			return state;
	}
};
