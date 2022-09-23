import { useState } from 'react';
import { FiEdit, FiMoreVertical, FiTrash } from 'react-icons/fi';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { Button } from '@/components/atoms';

export const TodoListItem = () => {
	const [isShowMenu, setIsShowMenu] = useState(false);

	const dropdownRef = useDetectClickOutside({ onTriggered: () => setIsShowMenu(false) });

	const handleUpdate = () => {
		setIsShowMenu(false);
	};

	const handleDelete = () => {
		setIsShowMenu(false);
	};

	return (
		<div className="px-4 py-2 border border-gray-300 rounded-md flex items-center justify-between">
			<div>Nyapu Rumah</div>
			<div className="flex items-center space-x-4">
				<input className="rounded-md focus:ring-0 focus:outline-none p-2 cursor-pointer" type="checkbox" />
				<div className="relative">
					<Button
						className="text-gray-500 py-2"
						label={<FiMoreVertical size={18} />}
						onClick={() => setIsShowMenu(true)}
					/>

					{isShowMenu && (
						<div
							ref={dropdownRef}
							className="absolute top-0 right-0 bg-white rounded-md shadow-lg divide-y overflow-hidden"
						>
							<Button
								className="space-x-3 hover:bg-gray-50 w-full py-2 px-4 text-sm text-gray-500"
								leftIcon={<FiEdit className="text-green-500" size={14} />}
								label="Edit"
								onClick={handleUpdate}
							/>
							<Button
								className="space-x-3 hover:bg-gray-50 w-full py-2 px-4 text-sm text-gray-500"
								leftIcon={<FiTrash className="text-red-500" size={14} />}
								label="Hapus"
								onClick={handleDelete}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
