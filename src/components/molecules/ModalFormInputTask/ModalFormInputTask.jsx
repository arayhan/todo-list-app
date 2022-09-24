import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiBook } from 'react-icons/fi';
import { Button } from '@/components/atoms';
import { useTodoStore } from '@/store';

export const ModalFormInputTask = ({ onClose }) => {
	const { postTodo, isSubmitting } = useTodoStore();
	const { control, handleSubmit } = useForm();

	const handleAddNewTask = (values) => {
		postTodo(values.task, (response) => {
			if (response.success) onClose();
		});
	};

	const handleClose = () => {
		if (!isSubmitting) onClose();
	};

	return (
		<div className="fixed z-10 left-0 top-0 w-screen h-screen flex items-center">
			<div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50" onClick={handleClose} />
			<div className="relative w-full max-w-screen-sm mx-auto bg-white shadow-md rounded-md">
				<div className="p-5 space-y-2">
					<div className="font-semibold text-xl">Add Task</div>
					<div>What task do you want to add?</div>
				</div>

				<hr />

				<div className="p-5">
					<Controller
						control={control}
						name="task"
						rules={{ required: { value: true, message: 'Harus diisi' } }}
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<div className="flex flex-col space-y-1">
								<label
									className={`flex items-center border rounded-md px-4 py-3 w-full space-x-4 ${
										error ? 'border-2 border-red-500' : ''
									}`}
									htmlFor="formInputTask"
								>
									<div className="text-blue-500">
										<FiBook size={18} />
									</div>
									<input
										className="outline-0 ring-0 focus:ring-0 w-full disabled:text-gray-400"
										placeholder="Ex : Go to market"
										id="formInputTask"
										disabled={isSubmitting}
										value={value}
										onChange={onChange}
									/>
								</label>
								{error && <div className="text-red-500 text-sm">{error.message}</div>}
							</div>
						)}
					/>
				</div>

				<hr />

				<div className="p-5 flex items-center justify-between">
					<Button className="px-5 py-2" disabled={isSubmitting} variant="danger" onClick={onClose}>
						Cancel
					</Button>

					<Button
						className="px-5 py-2"
						disabled={isSubmitting}
						variant="primary"
						onClick={handleSubmit(handleAddNewTask)}
					>
						Add New Task
					</Button>
				</div>
			</div>
		</div>
	);
};

ModalFormInputTask.defaultProps = {
	onClose: () => {},
};
