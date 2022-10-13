<template>
	<Home firstName="Luis" lastName="Ariza" otro="algo" />
</template>

<script>
	import Home from "./components/Home.vue";

	export default {
		name: "App",
		components: {
			Home,
		},
	};
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		color: #2c3e50;
		text-align: center;
		margin-top: 60px;
	}
</style>
