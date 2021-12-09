// Aquí definimos los datos que queremos que tenga Todo

export interface Todo {
	id: string;
	description: string;
	completed: string;
}

export interface TodoState {
	todoCount: number;
	todos: Todo[];
	completed: number;
	pending: number;
}
