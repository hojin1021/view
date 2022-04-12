import Vue from 'vue';
import Vuex from 'vuex';
import dataList from './dataList';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		introloading: true,
		pageTitle: '',
		portLoad: false,
		woLoad: false,
	},
	mutations: {
		updateState(state, payload) {
			Object.keys(payload).forEach(key => {
				state[key] = payload[key];
			});
		},
	},
	actions: {},
	modules: { dataList },
});
