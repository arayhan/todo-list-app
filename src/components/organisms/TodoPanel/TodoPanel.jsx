import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { Button, InputRadio } from '@/components/atoms';
import styles from './TodoPanel.module.scss';

const FILTERS = {
	TASK: { value: 'task', label: 'Task' },
	DONE: { value: 'done', label: 'Done' },
	ALL: { value: 'all', label: 'All' },
};
const FILTERS_ARRAY = Object.values(FILTERS);

export const TodoPanel = () => {
	const [selectedFilter, setSelectedFilter] = useState(FILTERS.ALL);

	const handleAddNewTask = () => {
		console.log('add new task');
	};

	return (
		<div className={styles.container}>
			<div className={styles.filter_container}>
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

			<div>
				<Button
					className="px-5 py-2 space-x-2"
					rightIcon={<FiPlusCircle size={18} />}
					variant="primary"
					label="Add New Task"
					onClick={handleAddNewTask}
				/>
			</div>
		</div>
	);
};
