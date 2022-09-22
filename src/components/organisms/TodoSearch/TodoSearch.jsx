import { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import { useAtomDevtools } from 'jotai/devtools';
import useKeypress from 'react-use-keypress';
import { FiSearch } from 'react-icons/fi';
import { atoms } from '@/store/store';
import styles from './TodoSearch.module.scss';

export const TodoSearch = ({ containerClassName }) => {
	const searchRef = useRef(null);

	const [search, setSearch] = useAtom(atoms.search);

	useAtomDevtools(atoms.search, { name: 'search' });

	const handleChange = (event) => setSearch(event.target.value);

	useKeypress(['Control', 'k'], (event) => {
		if (event.ctrlKey && event.key === 'k') searchRef.current.focus();
		event.preventDefault();
	});

	return (
		<div className={`${styles.container} ${containerClassName}`}>
			<div className={styles.icon}>
				<FiSearch size={20} />
			</div>

			<input
				ref={searchRef}
				className={styles.field}
				type="search"
				value={search}
				onChange={handleChange}
				placeholder="Search your stuff here..."
			/>

			<div className={styles.adornment}>Ctrl+K</div>
		</div>
	);
};

export default TodoSearch;
