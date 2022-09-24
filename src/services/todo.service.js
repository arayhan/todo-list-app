import { http } from './http';

export const getTodos = async () => {
	try {
		const response = await http.get('/');
		return { success: true, payload: response.data };
	} catch (e) {
		return { success: false, payload: e };
	}
};

export const postTodo = async (task) => {
	try {
		const response = await http.post('/', { task, complete: false });
		return { success: true, payload: response.data };
	} catch (e) {
		return { success: false, payload: e };
	}
};

export const updateTodo = async (id, data) => {
	try {
		const response = await http.put(`/${id}`, data);
		return { success: true, payload: response.data };
	} catch (e) {
		return { success: false, payload: e };
	}
};

export const deleteTodo = async (id) => {
	try {
		const response = await http.delete(`/${id}`);
		return { success: true, payload: response.data };
	} catch (e) {
		return { success: false, payload: e };
	}
};
