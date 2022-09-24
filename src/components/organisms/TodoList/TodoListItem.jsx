import { useState, useCallback } from 'react';
import { FiEdit, FiMoreVertical, FiTrash } from 'react-icons/fi';
import useOnclickOutside from 'react-cool-onclickoutside';
import { Button } from '@/components/atoms';
import classNames from 'classnames';
import { useTodoStore } from '@/store';
import { ModalFormInputTask } from '@/components/molecules';

export const TodoListItem = ({ id, title, isCompleted, className }) => {
	const { updateTodo, deleteTodo } = useTodoStore();
	const [isShowModal, setShowModal] = useState(false);
	const [isShowMenu, setShowMenu] = useState(false);

	const textCompletedClassName = classNames({
		'text-gray-400 line-through italic': isCompleted,
	});

	const handleCheck = useCallback(() => {
		updateTodo(id, { task: title, complete: !isCompleted });
	}, [id, title, isCompleted, updateTodo]);

	const handleDelete = useCallback(() => {
		deleteTodo(id);
		setShowMenu(false);
	}, [id, deleteTodo]);

	const menuRef = useOnclickOutside(() => setShowMenu(false));

	return (
		<div
			className={`px-4 py-1 border border-gray-300 rounded-md flex items-center justify-between ${className} ${
				isCompleted ? 'bg-gray-200' : 'bg-white'
			}`}
		>
			<div className={`text-sm ${textCompletedClassName}`}>{title}</div>
			<div className="flex items-center space-x-4">
				<input
					className="rounded-md focus:ring-0 focus:outline-none p-2 cursor-pointer"
					type="checkbox"
					value={id}
					checked={isCompleted}
					onChange={() => handleCheck(id)}
				/>
				<div className="relative">
					<Button
						className="text-gray-500 py-2"
						label={<FiMoreVertical size={18} />}
						onClick={() => setShowMenu(true)}
					/>

					{isShowMenu && (
						<div
							ref={menuRef}
							className="absolute top-0 right-0 bg-white rounded-md shadow-lg divide-y overflow-hidden"
						>
							<Button
								className="space-x-3 hover:bg-gray-50 w-full py-2 px-4 text-sm text-gray-500"
								leftIcon={<FiEdit className="text-green-500" size={14} />}
								label="Edit"
								onClick={() => setShowModal(true)}
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

			{isShowModal && <ModalFormInputTask id={id} task={title} onClose={() => setShowModal(false)} />}
		</div>
	);
};

TodoListItem.defaultProps = {
	classNames: '',
};
