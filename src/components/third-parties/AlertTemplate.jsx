import React from 'react';
import classNames from 'classnames';
import { transitions, positions } from 'react-alert';
import { FiAlertTriangle, FiCheck, FiInfo, FiRefreshCcw, FiX, FiXCircle } from 'react-icons/fi';

export const alertConfigs = {
	position: positions.TOP_RIGHT,
	timeout: 3000,
	transition: transitions.FADE,
};

export const AlertTemplate = ({ style, options, message, close }) => {
	const { type } = options;

	const className = classNames(
		{
			'bg-green-500': type === 'success' || type === 'syncing',
			'bg-red-500': type === 'error',
			'bg-yellow-500': type === 'warning',
			'bg-blue-500': type === 'info',
		},
		'rounded-md px-4 py-2 text-white flex items-center justify-between space-x-3'
	);

	return (
		<div style={style} className={className}>
			<div>
				{type === 'info' && <FiInfo />}
				{type === 'success' && <FiCheck />}
				{type === 'error' && <FiXCircle />}
				{type === 'warning' && <FiAlertTriangle />}
				{type === 'syncing' && <FiRefreshCcw className="animate-spin" />}
			</div>
			<div className="text-sm">{message}</div>
			<button className="hover:bg-white hover:bg-opacity-20 p-1 rounded-md transition-all" onClick={close}>
				<FiX />
			</button>
		</div>
	);
};
