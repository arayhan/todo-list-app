import React from 'react';
import { FiTrash } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { Button } from '@/components/atoms';
import { FORM_METHODS } from '@/utils/constants';
import { useTodoStore } from '@/store';

export const TodoPanelFooter = () => {
	const { deleteBulkTodo } = useTodoStore();

	const handleDeleteBulk = async (method) => {
		const { isConfirmed } = await Swal.fire({
			title: 'Are you sure?',
			text: 'You will not be able to recover these task(s)!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#2663EB',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		});

		if (isConfirmed) {
			deleteBulkTodo(method, (response) => {
				if (response.success) {
					Swal.fire({
						title: 'Deleted!',
						text: 'Your task(s) has been deleted.',
						icon: 'success',
						confirmButtonColor: '#2663EB',
					});
				}
			});
		}
	};

	return (
		<div className="flex flex-col justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
			<Button
				className="w-full px-5 py-2 space-x-2 justify-center text-center"
				variant="danger"
				leftIcon={<FiTrash />}
				label="Delete Done Task(s)"
				onClick={() => handleDeleteBulk(FORM_METHODS.DELETE_ALL_DONE)}
			/>
			<Button
				className="w-full px-5 py-2 space-x-2 justify-center"
				variant="danger"
				leftIcon={<FiTrash />}
				label="Delete All Task(s)"
				onClick={() => handleDeleteBulk(FORM_METHODS.DELETE_ALL)}
			/>
		</div>
	);
};
