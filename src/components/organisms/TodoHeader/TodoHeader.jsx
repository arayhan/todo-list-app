export const TodoHeader = ({ containerClassName }) => {
	return (
		<div className={`text-center ${containerClassName}`}>
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
	);
};

TodoHeader.defaultProps = {
	containerClassName: '',
};
