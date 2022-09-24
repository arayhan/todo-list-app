import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

const SOCMEDS = [
	{ name: 'Instagram', icon: <FiInstagram />, link: 'https://www.instagram.com/arayhan_/', label: '@arayhan_' },
	{ name: 'LinkedIn', icon: <FiLinkedin />, link: 'https://www.linkedin.com/in/arayhan/', label: 'arayhan' },
	{ name: 'Github', icon: <FiGithub />, link: 'https://github.com/arayhan', label: 'arayhan' },
];

export const AppHeader = ({ containerClassName }) => {
	return (
		<div
			className={`flex flex-col items-center justify-between text-center sm:flex-row sm:text-left ${containerClassName}`}
		>
			<div className="flex flex-col justify-center mb-3 sm:mb-0">
				<div className="text-4xl font-semibold text-gray-800 mb-1">Todo List App</div>
				<div className="text-lg">
					by{' '}
					<span
						className="bg-gradient-to-br bg-clip-text from-blue-700 to-green-800"
						style={{ WebkitTextFillColor: 'transparent' }}
					>
						Ahmed Rayhan Primadedas
					</span>
				</div>
			</div>
			<div className="flex sm:flex-col items-center justify-center sm:items-end space-x-3 sm:space-x-0 sm:space-y-1">
				{SOCMEDS.map((socmed) => (
					<a
						key={socmed.name}
						className="flex items-center justify-center rounded-md text-xs bg-indigo-700 hover:bg-indigo-600 transition-all text-white space-x-2 px-2 py-1"
						href={socmed.link}
						rel="noreferrer"
						target="_blank"
					>
						<span>{socmed.icon}</span>
						<span>{socmed.label}</span>
					</a>
				))}
			</div>
		</div>
	);
};

AppHeader.defaultProps = {
	containerClassName: '',
};
