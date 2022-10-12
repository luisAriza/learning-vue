<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="Hello Vue!" />
</template>

<script>
	import { defineAsyncComponent } from "vue";

	const HelloWorld = defineAsyncComponent(() =>
		import("./components/HelloWorld.vue")
	);

	export default {
		name: "App",
		components: {
			HelloWorld,
		},
	};
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
