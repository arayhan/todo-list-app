import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { getTodos } from '@/services';

export const useTodoStore = create(
	devtools(
		persist(
			(set, get) => ({
				todos: [],
				filteredTodos: [],
				search: '',
				isLoading: false,
				setSearch: (search) => {
					set({ search });
					get().handleSearch();
				},
				getTodos: async () => {
					set({ isLoading: true });
					const todos = await getTodos();
					set({ todos: todos.payload, isLoading: false });
				},
				deleteTodo: async (id) => {
					const todos = get().todos.filter((todo) => todo.id !== id);
					set({ todos });
				},
				handleSearch: () => {
					const search = get().search;
					const todos = get().todos;
					const filteredTodos = todos.filter((todo) => todo.task.toLowerCase().search(search.toLowerCase()) !== -1);
					set({ filteredTodos });
				},
			}),
			{
				name: 'todo-store',
				getStorage: () => localStorage,
			}
		)
	)
);
