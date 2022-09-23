import { http } from './http';

export const getTodos = async () => {
	try {
		const response = http.get('/');
		return { success: true, payload: response };
	} catch (e) {
		return { success: false, payload: e };
	}
};
