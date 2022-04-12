import axios from 'axios';
const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

function fetchPortfolios() {
	return instance.get(`portfolios`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
function fetchWork() {
	return instance.get(`works`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

export { fetchPortfolios, fetchWork };
