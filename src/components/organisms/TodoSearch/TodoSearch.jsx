import { useAtom } from 'jotai';
import { useAtomDevtools } from 'jotai/devtools';
import { FiSearch } from 'react-icons/fi';
import { atoms } from '@/store/store';
import styles from './TodoSearch.module.scss';

export const TodoSearch = ({ containerClassName }) => {
	const [search, setSearch] = useAtom(atoms.search);

	useAtomDevtools(atoms.search, 'search');

	const handleChange = (event) => setSearch(event.target.value);

	return (
		<div className={`${styles.container} ${containerClassName}`}>
			<div className={styles.icon}>
				<FiSearch size={20} />
			</div>

			<input
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
