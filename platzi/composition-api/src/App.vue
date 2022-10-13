<template>
	<Home firstName="Luis" lastName="Ariza" />
</template>

<script>
	import Home from "./components/Home.vue";
	import { provide } from "vue";

	export default {
		name: "App",
		components: {
			Home,
		},
		setup() {
			provide("username", "RuisuMap");
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
