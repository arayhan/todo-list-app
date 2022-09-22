import React from 'react';
import styles from './Home.module.scss';
import { TodoHeader, TodoPanel, TodoSearch } from '@/components/organisms';

const Home = () => {
	return (
		<div className={styles.root}>
			<div className="container mb-7">
				<TodoHeader />
			</div>

			<div className="container mb-7">
				<TodoSearch />
			</div>

			<div className="container">
				<TodoPanel />
			</div>
		</div>
	);
};

export default Home;
