import React from 'react';
import { FiMenu, FiPlusCircle } from 'react-icons/fi';
import { Button } from '@/components/atoms';
import styles from './TodoPanel.module.scss';

export const TodoPanel = () => {
	const handleAddNewTask = () => {
		console.log('add new task');
	};

	return (
		<div className={styles.container}>
			<Button rightIcon={<FiPlusCircle size={18} />} label="Add New Task" onClick={handleAddNewTask} />
			<Button label={<FiMenu size={23} />} />
		</div>
	);
};
