import { useEffect } from 'react';
import { TodoListItem } from './TodoListItem';
import { useTodoStore } from '@/store';
import { BiLoaderAlt } from 'react-icons/bi';

export const TodoList = () => {
	const { todos, isLoading, getTodos } = useTodoStore((state) => state);

	useEffect(() => {
		getTodos();
	}, [getTodos]);

	console.log(todos);

	return (
		<div className="space-y-3">
			{isLoading && (
				<div className="flex items-center justify-center space-x-3 py-8 bg-gray-50 rounded-md">
					<BiLoaderAlt className="animate-spin" />
					<span>Loading...</span>
				</div>
			)}

			{!isLoading && todos.length === 0 && (
				<div className="text-center py-8 space-y-3">
					<img
						className="w-52 mx-auto"
						src="data:image/png;base64,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"
						alt=""
					/>
					<p className="text-gray-500">No todo</p>
				</div>
			)}

			{!isLoading &&
				todos.length > 0 &&
				todos.map((todo) => <TodoListItem key={todo.id} id={todo.id} title={todo.task} isCompleted={todo.complete} />)}
		</div>
	);
};
