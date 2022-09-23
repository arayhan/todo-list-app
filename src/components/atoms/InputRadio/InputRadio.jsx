import styles from './InputRadio.module.scss';

export const InputRadio = ({ name, value, label, ...props }) => {
	return (
		<label className={styles.container} htmlFor={value}>
			<input className={styles.input} type="radio" name={name} id={value} value={value} {...props} />
			<span className={styles.label}>{label}</span>
		</label>
	);
};
