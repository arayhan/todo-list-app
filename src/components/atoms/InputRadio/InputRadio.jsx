import styles from './InputRadio.module.scss';

export const InputRadio = ({ name, value, label, ...props }) => {
	return (
		<div className={styles.container}>
			<input className={styles.input} type="radio" name={name} id={value} value={value} {...props} />
			<label className={styles.label} htmlFor={value}>
				{label}
			</label>
		</div>
	);
};
