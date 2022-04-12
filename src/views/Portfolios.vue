<template>
	<div class="cont_list">
		<Loading v-if="$store.state.introloading" @loadingEnd="loadingEnd" />
		<div class="page_title">{{ $route.meta.titles }}</div>
		<div class="container" v-if="$store.state.portLoad">
			<div
				class="item"
				v-for="(data, i) in $store.state.dataList.cont"
				:key="i"
			>
				<div class="itemcont" :class="data.work | workChange">
					<div class="order">{{ data.subject }}</div>
					<div class="ti">{{ data.eSubject }}</div>
					<div class="work" :class="data.work">
						{{ data.work }}
					</div>
					<ul class="tag">
						<li
							v-for="(skill, j) in data.skill.split(',').slice().reverse()"
							:key="j"
							:class="skill"
						>
							{{ skill }}
						</li>
					</ul>
					<ul class="service_list">
						<li
							v-for="(service, k) in data.service.split(',')"
							:key="k"
							:class="service"
						>
							<DesktopComputerIcon size="17" v-if="service == 'web'" />
							<DeviceMobileIcon
								size="17"
								v-if="service == ' mobile' || service == 'mobile'"
							/>
							<span>{{ service }}</span>
						</li>
					</ul>
					<div class="memo" v-html="data.memo"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Loading from '@/components/loading';
import listLoads from '@/mixin/ListLoads';
import { DesktopComputerIcon, DeviceMobileIcon } from '@vue-hero-icons/outline';
export default {
	mixins: [listLoads],
	name: 'ViewPortfolios',
	components: { DesktopComputerIcon, DeviceMobileIcon, Loading },
	mounted() {
		if (!this.$store.state.introloading) {
			this.portfoliosPrint();
		}
	},
	methods: {
		portfoliosPrint() {
			this.$store.commit('updateState', { woLoad: false });
			this.$store.commit('updateState', { portLoad: true });
			document.querySelector('.page_title').classList.remove('on');
			this.portfoliosLoad();
			setTimeout(() => {
				document.querySelector('.page_title').classList.add('on');
			}, 500);
		},
		loadingEnd() {
			this.portfoliosPrint();
		},
	},
};
</script>
