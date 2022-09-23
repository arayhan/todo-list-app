export const InputSearch = ({ label, name, ...props }) => {
	return (
		<div className="flex flex-col mb-2">
			<label>{label}</label>
			<input id={name} {...props} />
		</div>
	);
};

export default InputSearch;
