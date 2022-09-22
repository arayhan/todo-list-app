import React from 'react';
import styles from './Home.module.scss';
import { TodoHeader } from '@/components/organisms';

const Home = () => {
	return (
		<div className={styles.container}>
			<TodoHeader />
		</div>
	);
};

export default Home;
