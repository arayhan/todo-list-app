import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

const SOCMEDS = [
	{ name: 'Instagram', icon: <FiInstagram />, link: 'https://www.instagram.com/arayhan_/', label: '@arayhan_' },
	{ name: 'LinkedIn', icon: <FiLinkedin />, link: 'https://www.linkedin.com/in/arayhan/', label: 'arayhan' },
	{ name: 'Github', icon: <FiGithub />, link: 'https://github.com/arayhan', label: 'arayhan' },
];

export const AppHeader = ({ containerClassName }) => {
	return (
		<div className={`text-center ${containerClassName}`}>
			<div className="text-4xl font-semibold text-gray-800 mb-1">Todo List App</div>
			<div className="text-lg mb-3">
				by{' '}
				<span
					className="bg-gradient-to-br bg-clip-text from-blue-700 to-green-800"
					style={{ WebkitTextFillColor: 'transparent' }}
				>
					Ahmed Rayhan Primadedas
				</span>
			</div>
			<div className="flex items-center justify-center space-x-3">
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
