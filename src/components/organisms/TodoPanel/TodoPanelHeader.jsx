import React, { useState } from 'react';
import { FiFilter, FiPlusCircle } from 'react-icons/fi';
import { Button, InputRadio } from '@/components/atoms';
import { ModalFormInputTask } from '@/components/molecules';
import { FILTERS_ARRAY } from '@/utils/constants';
import { useTodoStore } from '@/store';

export const TodoPanelHeader = () => {
	const { selectedFilter, setSelectedFilter } = useTodoStore();
	const [isShowModal, setIsShowModal] = useState(false);

	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-col items-center space-x-3">
				<div className="space-y-1">
					<fieldset className="flex items-center border border-gray-300 rounded-md">
						<label className="text-sm px-2 border-r">
							<FiFilter />
						</label>
						<select
							className="border-0 pl-3 pr-8 text-sm rounded-md focus:border-0 focus:ring-0 cursor-pointer"
							name="filter"
							onChange={(e) => setSelectedFilter(e.target.value)}
						>
							{FILTERS_ARRAY.map((filter) => (
								<option
									key={filter.value}
									selected={selectedFilter === filter.value}
									defaultValue={selectedFilter}
									value={filter.value}
									label={filter.label}
								/>
							))}
						</select>
					</fieldset>
				</div>
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
