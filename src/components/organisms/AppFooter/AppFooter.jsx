export const AppFooter = ({ containerClassName }) => {
	return <div className={`text-center ${containerClassName}`}>&copy; Copyright 2022 | Ahmed Rayhan Primadedas</div>;
};

AppFooter.defaultProps = {
	containerClassName: '',
};
