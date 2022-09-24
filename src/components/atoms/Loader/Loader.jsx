import { BiLoaderAlt } from 'react-icons/bi';

export const Loader = ({ className }) => {
	return (
		<div className={`flex items-center justify-center space-x-3 ${className}`}>
			<BiLoaderAlt className="animate-spin" />
			<span>Loading...</span>
		</div>
	);
};

Loader.defaultProps = {
	className: '',
};
