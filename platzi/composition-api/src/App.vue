<template>
	<UserRepositories :user="'Luis'"></UserRepositories>
</template>

<script>
	import UserRepositories from "./components/UserRepositories.vue";

	export default {
		name: "App",
		components: {
			UserRepositories,
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
