import classNames from 'classnames';

export const Button = ({ className, type, variant, leftIcon, rightIcon, label, children, ...props }) => {
	const variantClassName = classNames({
		'bg-blue-700 hover:bg-blue-600 text-white rounded-md': variant === 'primary',
		'bg-red-700 hover:bg-red-600 text-white rounded-md': variant === 'danger',
		'bg-yellow-700 hover:bg-yellow-600 text-white rounded-md': variant === 'warning',
		'bg-green-700 hover:bg-green-600 text-white rounded-md': variant === 'success',
		'bg-transparent': variant === 'transparent',
	});

	return (
		<button
			type={type}
			className={`flex items-center transition-all overflow-hidden ${variantClassName} ${className}`}
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
