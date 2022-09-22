import styles from './Button.module.scss';

export const Button = ({ className, type, leftIcon, rightIcon, label, children, ...props }) => {
	return (
		<button type={type} className={`${styles.button} ${className}`} {...props}>
			{leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}

			<span className={styles.label}>
				{label}
				{children}
			</span>

			{rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
		</button>
	);
};

Button.defaultProps = {
	type: 'button',
	className: '',
};
