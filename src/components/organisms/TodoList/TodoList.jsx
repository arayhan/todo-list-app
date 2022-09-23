import { FiEdit, FiMoreVertical, FiTrash } from 'react-icons/fi';
import { Button } from '@/components/atoms';
import styling from './TodoList.module.scss';

export const TodoList = () => {
	return (
		<div className={styling.list}>
			<div className={styling.item}>
				<div className={styling.description}>Nyapu Rumah</div>
				<div className={styling.actions}>
					<input className={styling.inputCheck} type="checkbox" />
					<Button className="text-gray-500 py-2" label={<FiMoreVertical size={18} />} />
				</div>
			</div>
		</div>
	);
};
