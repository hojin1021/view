<template>
	<div id="app">
		<Header />
		<router-view />
	</div>
</template>
<script>
import Header from '@/components/header';
export default {
	components: { Header },
};
</script>

<style lang="scss">
@import '@/assets/scss/layout.scss';
</style>
