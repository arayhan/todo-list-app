export const InputRadio = ({ name, value, label, ...props }) => {
	return (
		<label
			className="flex items-center space-x-1 px-3 py-1 border border-gray-400 peer-checked:border-blue-500 rounded-md cursor-pointer"
			htmlFor={value}
		>
			<input className="cursor-pointer" type="radio" name={name} id={value} value={value} {...props} />
			<span>{label}</span>
		</label>
	);
};
