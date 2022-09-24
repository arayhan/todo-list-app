import { TodoListItem } from './TodoListItem';
import { useTodoStore } from '@/store';

export const TodoList = () => {
	const { todos } = useTodoStore((state) => state);

	return (
		<div className="overflow-y-scroll p-3 bg-gray-50 rounded-md" style={{ maxHeight: 480 }}>
			{todos.length === 0 && (
				<div className="text-center py-8 space-y-3">
					<img
						className="w-52 mx-auto rounded-md"
						src="https://meeting.iconpln.co.id/resources/images/notfound2.png"
						alt=""
					/>
				</div>
			)}

			{todos.length > 0 && (
				<div className="space-y-2">
					{todos.map((todo) => (
						<TodoListItem
							className="bg-white"
							key={todo.id}
							id={todo.id}
							title={todo.task}
							isCompleted={todo.complete}
						/>
					))}
				</div>
			)}
		</div>
	);
};
