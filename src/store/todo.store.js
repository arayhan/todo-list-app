import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { postTodo, getTodos, updateTodo, deleteTodo } from '@/services';
import { FILTERS, FORM_METHODS } from '@/utils/constants';

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
					const response = await deleteTodo(id);
					get().getTodos();
					if (callback) callback(response);
				},
				deleteBulkTodo: async (method, callback) => {
					get().getTodos();
					set({ isLoading: true });

					let todos = get().actualTodos;

					if (method === FORM_METHODS.DELETE_ALL_DONE) todos = todos.filter((todo) => todo.complete);

					const response = await Promise.all(todos.map((todo) => deleteTodo(todo.id)));
					const payloads = response.map((res) => res.payload);
					const isAllSuccess = response.every((res) => res.success);

					set({ isLoading: false });
					get().getTodos();

					if (callback) callback({ success: isAllSuccess, payload: payloads });
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
