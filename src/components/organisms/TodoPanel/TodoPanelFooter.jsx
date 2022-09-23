import React from 'react';
import { FiTrash } from 'react-icons/fi';
import { Button } from '@/components/atoms';

export const TodoPanelFooter = () => {
	return (
		<div className="flex justify-center space-x-3">
			<Button className="px-5 py-2 space-x-2" variant="danger" leftIcon={<FiTrash />} label="Delete Done Task(s)" />
			<Button className="px-5 py-2 space-x-2" variant="danger" leftIcon={<FiTrash />} label="Delete All Task(s)" />
		</div>
	);
};
