import styles from './InputSearch.module.scss';

export const InputSearch = ({ label, name, ...props }) => {
	return (
		<div className={styles.container}>
			<label className={styles.label}>{label}</label>
			<input className={styles.input} id={name} {...props} />
		</div>
	);
};

export default InputSearch;
