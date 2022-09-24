import { TodoListItem } from './TodoListItem';
import { useTodoStore } from '@/store';

export const TodoList = () => {
	const { search, todos, filteredTodos } = useTodoStore((state) => state);
	const list = search !== '' ? filteredTodos : todos;

	return (
		<div className="max-h-96 overflow-y-scroll p-3 bg-gray-50 rounded-md">
			{list.length === 0 && (
				<div className="text-center py-8 space-y-3">
					<img
						className="w-52 mx-auto rounded-md"
						src="https://meeting.iconpln.co.id/resources/images/notfound2.png"
						alt=""
					/>
				</div>
			)}

			{list.length > 0 && (
				<div className="space-y-2">
					{list.map((todo) => (
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
