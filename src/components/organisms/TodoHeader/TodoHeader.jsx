import styles from './TodoHeader.module.scss';

export const TodoHeader = ({ containerClassName }) => {
	return (
		<div className={`${styles.container} ${containerClassName}`}>
			<div className={styles.title}>Todo List App</div>
			<div className={styles.subtitle}>
				by <span>Ahmed Rayhan Primadedas</span>
			</div>
		</div>
	);
};

TodoHeader.defaultProps = {
	containerClassName: '',
};
