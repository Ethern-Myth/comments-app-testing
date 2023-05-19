import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// GET comments
export const GET_Comments = async () => {
	const res = await axios.get(API_URL);
	const data = res.data;
	return data;
};

// GET eg. comment/1
// NOT USED
export const GET_Comment_by_id = async (id: number) => {
	const res = await axios.get(`${API_URL}/${id}`);
	const data = res.data;
	return data;
};
