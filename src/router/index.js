import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
	{
		path: '/',
		alias: ['/portfolios'],
		name: 'portfolios',
		component: () => import('../views/Portfolios.vue'),
		meta: { titles: 'portfolio' },
	},
	{
		path: '/work',
		name: 'work',
		component: () => import('../views/Work.vue'),
		meta: { titles: 'work' },
	},
];
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});
export default router;
