import axios from 'axios';

const axiosWithAuth = () => {
	console.log("LOGGING TOKEN HERE: " + localStorage.getItem('token') + " as string : " + JSON.stringify(localStorage.getItem('token')))
	const token = localStorage.getItem('token');

	return axios.create({
		baseURL: 'https://pokemongo-be-master.onrender.com/api/v1/',
		headers: {
			authorization: token,
		},
	});
};

export default axiosWithAuth;
