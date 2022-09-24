import { useCallback, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { Loader } from '@/components/atoms';
import { AppFooter, AppHeader, TodoList, TodoPanelFooter, TodoPanelHeader, TodoSearch } from '@/components/organisms';
import { useTodoStore } from '@/store';

const Home = () => {
	const alert = useAlert();
	const { isFetched, isLoading, getTodos } = useTodoStore((state) => state);

	const syncTodos = useCallback(() => {
		setInterval(() => {
			alert.show('Synching...', { type: 'syncing' });
			getTodos();
		}, 10000);
	}, [alert, getTodos]);

	useEffect(() => {
		if (isFetched) syncTodos();
		else getTodos();
	}, [isFetched, getTodos, syncTodos]);

	return (
		<div className="min-h-screen bg-gray-100">
			<div className="container max-w-screen-md">
				<AppHeader containerClassName="py-14" />

				<TodoSearch containerClassName="mb-7" />

				{isLoading && <Loader className="bg-white py-8 rounded-md" />}

				{!isLoading && (
					<div className="bg-white p-5 rounded-md shadow-md space-y-8">
						<TodoPanelHeader />
						<TodoList />
						<TodoPanelFooter />
					</div>
				)}

				<AppFooter containerClassName="py-8" />
			</div>
		</div>
	);
};

export default Home;
