import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiBook } from 'react-icons/fi';
import { Modal } from '@/components/atoms';
import { useTodoStore } from '@/store';

export const ModalFormInputTask = ({ id, task, onClose }) => {
	const { isSubmitting, postTodo, updateTodo } = useTodoStore();
	const { control, handleSubmit } = useForm({ defaultValues: { task } });

	const handleSubmitTask = (values) => {
		if (id) {
			if (values.task === task) onClose();
			else {
				updateTodo(id, { task: values.task }, (response) => {
					if (response.success) onClose();
				});
			}
		} else {
			postTodo(values.task, (response) => {
				if (response.success) onClose();
			});
		}
	};

	const handleClose = () => {
		if (!isSubmitting) onClose();
	};

	return (
		<Modal
			title={`${id ? 'Update' : 'Add New'} Task`}
			description={`What task do you want to ${id ? 'update' : 'add'}?`}
			submitButtonText={`${id ? 'Update' : 'Add New'} Task`}
			onClose={handleClose}
			onSubmit={handleSubmit(handleSubmitTask)}
			isSubmitting={isSubmitting}
		>
			<Controller
				control={control}
				name="task"
				rules={{ required: { value: true, message: 'Harus diisi' } }}
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<div className="flex flex-col space-y-1">
						<fieldset
							disabled={isSubmitting}
							className={`disabled:bg-gray-100 flex items-center border rounded-md px-4 py-3 w-full space-x-4 ${
								error ? 'border-2 border-red-500' : ''
							}`}
							htmlFor="formInputTask"
						>
							<label className={error ? 'text-red-500' : 'text-gray-700'}>
								<FiBook size={18} />
							</label>
							<input
								className="placeholder:text-gray-400 outline-0 ring-0 focus:ring-0 w-full group disabled:bg-transparent disabled:text-gray-400"
								placeholder="Ex : Go to market"
								id="formInputTask"
								disabled={isSubmitting}
								value={value}
								onChange={onChange}
							/>
						</fieldset>
						{error && <div className="text-red-500 text-sm">{error.message}</div>}
					</div>
				)}
			/>
		</Modal>
	);
};

ModalFormInputTask.defaultProps = {
	onClose: () => {},
};
