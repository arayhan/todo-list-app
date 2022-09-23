import { http } from './http';

export const getTodos = async () => {
	try {
		const response = await http.get('/');
		return { success: true, payload: response.data };
	} catch (e) {
		return { success: false, payload: e };
	}
};
