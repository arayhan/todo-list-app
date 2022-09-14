import React from 'react';
import { logo } from '@/images';
import styles from './Home.module.css';

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.header}>
					<h1 className={styles.title}>React Tailwind Boilerplate</h1>
					<div className={styles.author}>
						By <span>Ahmed Rayhan Primadedas</span>
					</div>
				</div>
				<div className={styles.stack}>
					<img className={[styles.iconReact]} src={logo} alt="react" />
					<img
						className={styles.iconTailwind}
						src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
						alt="tailwindcss"
					/>
				</div>
				<div className={styles.cta}>
					<button type="button">Get Started</button>
				</div>
			</div>

			<div className={styles.footer}>
				<div className={styles.copyright}>&copy; 2022 Ahmed Rayhan Primadedas</div>
			</div>
		</div>
	);
};

export default Home;
