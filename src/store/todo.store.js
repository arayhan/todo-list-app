import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { getTodos } from '@/services';
import { FILTERS } from '@/utils/constants';

export const useTodoStore = create(
	devtools(
		persist(
			(set, get) => ({
				actualTodos: [],
				todos: [],
				search: '',
				selectedFilter: FILTERS.ALL,
				isLoading: false,
				isFiltered: false,
				getTodos: async () => {
					set({ isLoading: true });
					const todos = await getTodos();
					set({ actualTodos: todos.payload, todos: todos.payload, isLoading: false });
				},
				deleteTodo: async (id) => {
					const todos = get().actualTodos.filter((todo) => todo.id !== id);
					set({ todos });
				},
				searchTodo: (search) => {
					const todos = get().actualTodos.filter((todo) => todo.task.toLowerCase().search(search.toLowerCase()) !== -1);
					set({ search, todos, isFiltered: true });
				},
				filterTodo: (selectedFilter) => {
					switch (selectedFilter.value) {
						case FILTERS.DONE.value:
							set({ todos: get().actualTodos.filter((todo) => todo.complete) });
							break;
						case FILTERS.TASK.value:
							set({ todos: get().actualTodos.filter((todo) => !todo.complete) });
							break;
						default:
							set({ todos: get().actualTodos.filter((todo) => todo) });
							break;
					}

					set({ selectedFilter });
				},
			}),
			{
				name: 'todo-store',
				getStorage: () => localStorage,
			}
		)
	)
);
