import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { getTodos } from '@/services';

export const useTodoStore = create(
	devtools(
		persist(
			(set, get) => ({
				todos: [],
				isLoading: false,
				getTodos: async () => {
					set({ isLoading: true });

					const todos = await getTodos();

					set({
						todos: todos.payload,
						isLoading: false,
					});
				},
			}),
			{
				name: 'todo-store',
				getStorage: () => localStorage,
			}
		)
	)
);
