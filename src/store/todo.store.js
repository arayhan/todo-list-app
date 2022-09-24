import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { postTodo, getTodos } from '@/services';
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
				isSubmitting: false,

				setSearch: (search) => {
					set({ search });
					get().filterTodo();
				},
				setSelectedFilter: (filter) => {
					set({ selectedFilter: filter });
					get().filterTodo();
				},

				getTodos: async () => {
					set({ isLoading: true });
					const todos = await getTodos();
					set({ actualTodos: todos.payload, todos: todos.payload, isLoading: false });
					get().filterTodo();
				},
				postTodo: async (task, callback) => {
					set({ isSubmitting: true });
					const response = await postTodo(task);
					get().getTodos();
					set({ isSubmitting: false });
					callback(response);
				},
				deleteTodo: async (id) => {
					const todos = get().todos.filter((todo) => todo.id !== id);
					set({ todos });
				},

				filterTodo: () => {
					let { actualTodos } = get();
					const { search, selectedFilter } = get();

					if (search !== '') {
						actualTodos = actualTodos.filter(
							(todo) => todo.task.toLowerCase().search(get().search.toLowerCase()) !== -1
						);
					}

					switch (selectedFilter.value) {
						case FILTERS.DONE.value:
							set({ todos: actualTodos.filter((todo) => todo.complete) });
							break;
						case FILTERS.TASK.value:
							set({ todos: actualTodos.filter((todo) => !todo.complete) });
							break;
						default:
							set({ todos: actualTodos.filter((todo) => todo) });
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
