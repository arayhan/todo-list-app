import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { Button, InputRadio } from '@/components/atoms';
import { ModalFormInputTask } from '@/components/molecules';
import { FILTERS, FILTERS_ARRAY } from '@/utils/constants';
import { useTodoStore } from '@/store';

export const TodoPanelHeader = () => {
	const { selectedFilter, setSelectedFilter } = useTodoStore();
	const [isShowModal, setIsShowModal] = useState(false);

	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center space-x-3">
				{FILTERS_ARRAY.map((filter) => (
					<InputRadio
						key={filter.value}
						name="filter"
						checked={selectedFilter.value === filter.value}
						value={filter.value}
						label={filter.label}
						onChange={() => setSelectedFilter(filter)}
					/>
				))}
			</div>

			<div className="flex items-center space-x-3">
				<Button
					className="px-5 py-2 space-x-2"
					rightIcon={<FiPlusCircle size={18} />}
					variant="primary"
					label="Add New Task"
					onClick={() => setIsShowModal(true)}
				/>
			</div>

			{isShowModal && <ModalFormInputTask onClose={() => setIsShowModal(false)} />}
		</div>
	);
};
