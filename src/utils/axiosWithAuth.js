import axios from 'axios';

const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		baseURL: 'https://pokemongo-be-master.onrender/api/v1/',
		headers: {
			authorization: token,
		},
	});
};

export default axiosWithAuth;
