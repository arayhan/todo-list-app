import { TodoHeader, TodoList, TodoPanel, TodoSearch } from '@/components/organisms';

const Home = () => {
	return (
		<div className="min-h-screen bg-gray-100">
			<div className="container max-w-screen-lg">
				<TodoHeader containerClassName="py-14" />
				<TodoSearch containerClassName="mb-8" />

				<div className="bg-white p-5 rounded-md shadow-md space-y-5">
					<TodoPanel />
					<TodoList />
				</div>
			</div>
		</div>
	);
};

export default Home;
