import { useState } from 'react';
import { FiEdit, FiMoreVertical, FiTrash } from 'react-icons/fi';
import { Button } from '@/components/atoms';
import styling from './TodoListItem.module.scss';

export const TodoListItem = () => {
	const [isShowMenu, setIsShowMenu] = useState(false);

	return (
		<div className={styling.item}>
			<div className={styling.description}>Nyapu Rumah</div>
			<div className={styling.actions}>
				<input className={styling.inputCheck} type="checkbox" />
				<div className="relative">
					<Button
						className="text-gray-500 py-2"
						label={<FiMoreVertical size={18} />}
						onClick={() => setIsShowMenu(true)}
					/>

					{isShowMenu && (
						<div className="absolute top-0 right-0 bg-white rounded-md shadow-lg divide-y overflow-hidden">
							<Button
								className="space-x-3 hover:bg-gray-50 w-full py-2 px-4 text-sm text-gray-500"
								leftIcon={<FiEdit className="text-green-500" size={14} />}
								label="Edit"
							/>
							<Button
								className="space-x-3 hover:bg-gray-50 w-full py-2 px-4 text-sm text-gray-500"
								leftIcon={<FiTrash className="text-red-500" size={14} />}
								label="Hapus"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
