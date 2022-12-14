import { useRef } from 'react';
import useKeypress from 'react-use-keypress';
import { FiSearch } from 'react-icons/fi';
import { useTodoStore } from '@/store';

export const TodoSearch = ({ containerClassName }) => {
	const searchRef = useRef(null);

	const { search, setSearch } = useTodoStore();

	const handleChange = (event) => setSearch(event.target.value);

	useKeypress(['Control', 'k'], (event) => {
		if (event.ctrlKey && event.key === 'k') searchRef.current.focus();
		event.preventDefault();
	});

	return (
		<div className={`flex items-center justify-start bg-white shadow-md py-2 px-3 rounded-md ${containerClassName}`}>
			<div className="px-2 text-gray-800">
				<FiSearch size={16} />
			</div>

			<input
				ref={searchRef}
				className="flex-1 border-0 focus:ring-0 text-sm"
				type="search"
				value={search}
				onChange={handleChange}
				placeholder="Search your stuff here..."
			/>

			<div className="text-gray-400 border rounded-md border-gray-300 px-2 py-1 text-sm">Ctrl+K</div>
		</div>
	);
};

export default TodoSearch;
