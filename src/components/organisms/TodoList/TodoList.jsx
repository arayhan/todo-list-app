import styling from './TodoList.module.scss';
import { TodoListItem } from './TodoListItem';

export const TodoList = () => {
	return (
		<div className={styling.list}>
			<TodoListItem />
		</div>
	);
};
