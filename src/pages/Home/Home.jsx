import { AppHeader, TodoList, TodoPanelFooter, TodoPanelHeader, TodoSearch } from '@/components/organisms';

const Home = () => {
	return (
		<div className="min-h-screen bg-gray-100">
			<div className="container max-w-screen-md">
				<AppHeader containerClassName="py-14" />

				<TodoSearch containerClassName="mb-7" />

				<div className="bg-white p-5 rounded-md shadow-md space-y-8">
					<TodoPanelHeader />
					<TodoList />
					<TodoPanelFooter />
				</div>
			</div>
		</div>
	);
};

export default Home;
