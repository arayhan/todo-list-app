import classNames from 'classnames';

export const Button = ({
	className,
	type,
	variant,
	leftIcon,
	rightIcon,
	label,
	children,
	disabled,
	onClick,
	...props
}) => {
	const variantClassName = classNames({
		'bg-blue-700 hover:bg-blue-600 text-white rounded-md': variant === 'primary' && !disabled,
		'bg-red-700 hover:bg-red-600 text-white rounded-md': variant === 'danger' && !disabled,
		'bg-yellow-700 hover:bg-yellow-600 text-white rounded-md': variant === 'warning' && !disabled,
		'bg-green-700 hover:bg-green-600 text-white rounded-md': variant === 'success' && !disabled,
		'bg-transparent': variant === 'transparent' && !disabled,
		'bg-blue-400 text-white rounded-md': variant === 'primary' && disabled,
		'bg-red-400 text-white rounded-md': variant === 'danger' && disabled,
		'bg-yellow-400 text-white rounded-md': variant === 'warning' && disabled,
		'bg-green-400 text-white rounded-md': variant === 'success' && disabled,
		'text-gray-400': variant === 'transparent' && disabled,
	});

	return (
		<button
			type={type}
			className={`flex items-center transition-all overflow-hidden text-sm ${variantClassName} ${className}`}
			onClick={!disabled && onClick}
			{...props}
		>
			{leftIcon && <span>{leftIcon}</span>}

			<span>
				{label}
				{children}
			</span>

			{rightIcon && <span>{rightIcon}</span>}
		</button>
	);
};

Button.defaultProps = {
	type: '',
	variant: 'transparent',
	className: '',
};
