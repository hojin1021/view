import { mapActions } from 'vuex';
let listLoads = {
	updated() {
		if (this.$store.state.portLoad || this.$store.state.woLoad) {
			setTimeout(() => {
				this.masonryLayout();
				this.listScale();
			}, 10);
		}
		window.addEventListener('resize', this.masonryLayout);
	},
	filters: {
		workChange: function (value) {
			if (value == 'front and developer') {
				return 'fd';
			} else {
				return 'wp';
			}
		},
	},
	methods: {
		...mapActions('dataList', ['portfoliosLoad', 'workLoad']),
		async listScale() {
			const itemcont = document.querySelectorAll('.itemcont');
			const promiseFunction = item =>
				new Promise(resolve =>
					setTimeout(() => resolve(item.classList.add('scale_on')), 60),
				);
			for (let i = 0; i < itemcont.length; i++) {
				await promiseFunction(itemcont[i]);
			}
		},
		masonryLayout() {
			const masonryContainerStyle = getComputedStyle(
				document.querySelector('.container'),
			);
			const columnGap = parseInt(
				masonryContainerStyle.getPropertyValue('column-gap'),
			);
			const autoRows = parseInt(
				masonryContainerStyle.getPropertyValue('grid-auto-rows'),
			);
			document.querySelectorAll('.item').forEach(elt => {
				elt.style.gridRowEnd = `span ${Math.ceil(
					elt.querySelector('.itemcont').scrollHeight / autoRows +
						columnGap / autoRows,
				)}`;
			});
		},
	},
};
export default listLoads;
