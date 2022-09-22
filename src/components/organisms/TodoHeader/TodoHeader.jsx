import styles from './TodoHeader.module.scss';

export const TodoHeader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>Todo List App</div>
			<div className={styles.subtitle}>
				by <span>Ahmed Rayhan Primadedas</span>
			</div>
		</div>
	);
};
