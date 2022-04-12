import { fetchPortfolios, fetchWork } from '@/api/dataList';
export default {
	namespaced: true,
	state: () => ({
		cont: [],
	}),
	getters: {},
	mutations: {
		updateState(state, payload) {
			Object.keys(payload).forEach(key => {
				state[key] = payload[key];
			});
		},
		pushIntodata(state, data) {
			state.cont.push(...data);
		},
	},
	actions: {
		async workLoad({ commit }) {
			commit('updateState', {
				cont: [],
			});
			try {
				const res = await fetchWork();
				commit('pushIntodata', res.data.result.slice().reverse());
			} catch (ex) {
				return ex;
			}
		},
		async portfoliosLoad({ commit }) {
			commit('updateState', {
				cont: [],
			});
			try {
				const res = await fetchPortfolios();
				commit('pushIntodata', res.data.result.slice().reverse());
			} catch (ex) {
				return ex;
			}
		},
	},
};
