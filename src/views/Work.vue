<template>
	<div class="cont_list">
		<Loading v-if="$store.state.introloading" @loadingEnd="loadingEnd" />
		<div class="page_title">{{ $route.meta.titles }}</div>
		<div class="container" v-if="$store.state.woLoad">
			<div
				class="item"
				v-for="(data, i) in $store.state.dataList.cont"
				:key="i"
			>
				<div class="itemcont" :class="data.work | workChange">
					<div class="ti">{{ data.eName }}</div>
					<div class="company">{{ data.company }}</div>
					<div class="order">{{ data.period }}</div>
					<div class="position">{{ data.work }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Loading from '@/components/loading';
import listLoads from '@/mixin/ListLoads';
export default {
	mixins: [listLoads],
	name: 'ViewPortfolios',
	components: { Loading },
	mounted() {
		if (!this.$store.state.introloading) {
			this.workPrint();
		}
	},
	methods: {
		workPrint() {
			this.$store.commit('updateState', { woLoad: true });
			this.$store.commit('updateState', { portLoad: false });
			document.querySelector('.page_title').classList.remove('on');
			this.workLoad();
			setTimeout(() => {
				document.querySelector('.page_title').classList.add('on');
			}, 500);
		},
		loadingEnd() {
			this.workPrint();
		},
	},
};
</script>
