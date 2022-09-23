import { FORM_METHODS } from '@/utils/constants';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiBook } from 'react-icons/fi';
import { Button } from '../../atoms/Button/Button';

export const ModalFormInputTask = ({ onClose }) => {
	const { control, handleSubmit } = useForm();

	const handleAddNewTask = (values) => {
		console.log({ values });
	};

	return (
		<div className="fixed z-10 left-0 top-0 w-screen h-screen flex items-center">
			<div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50" onClick={onClose} />
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
						render={({ field: { value, onChange } }) => (
							<label className="flex items-center border rounded-md px-4 py-3 w-full space-x-4" htmlFor="formInputTask">
								<div className="text-blue-500">
									<FiBook size={18} />
								</div>
								<input
									className="outline-0 ring-0 focus:ring-0 w-full"
									placeholder="Ex : Go to market"
									id="formInputTask"
									value={value}
									onChange={onChange}
								/>
							</label>
						)}
					/>
				</div>

				<hr />

				<div className="p-5 flex items-center justify-between">
					<Button className="px-5 py-2" variant="danger" onClick={onClose}>
						Cancel
					</Button>

					<Button className="px-5 py-2" variant="primary" onClick={handleSubmit(handleAddNewTask)}>
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
