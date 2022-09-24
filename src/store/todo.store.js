import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { postTodo, getTodos, updateTodo } from '@/services';
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
				isFetched: false,

				setSearch: (search) => {
					set({ search });
					get().filterTodo();
				},
				setSelectedFilter: (filter) => {
					set({ selectedFilter: filter });
					get().filterTodo();
				},

				getTodos: async () => {
					if (!get().isFetched) {
						set({ isLoading: true });
					}

					const todos = await getTodos();
					set({ actualTodos: todos.payload, todos: todos.payload, isLoading: false, isFetched: true });
					get().filterTodo();
				},
				postTodo: async (task, callback) => {
					set({ isSubmitting: true });
					const response = await postTodo(task);
					get().getTodos();
					set({ isSubmitting: false });
					if (callback) callback(response);
				},
				updateTodo: async (id, data, callback) => {
					set({ isSubmitting: true });
					const response = await updateTodo(id, data);
					get().getTodos();
					set({ isSubmitting: false });
					if (callback) callback(response);
				},
				deleteTodo: async (id, callback) => {
					console.log('deleteTodo', id);
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
