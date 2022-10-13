<template>
	<button @click="show = !show">Menu</button>
	<transition name="fade">
		<Menu v-if="show" />
	</transition>
</template>

<script>
	import Menu from "./components/Menu.vue";

	export default {
		name: "App",
		components: {
			Menu,
		},
		data() {
			return {
				show: false,
			};
		},
	};
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		color: #2c3e50;
		margin-top: 60px;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease-in-out;
	}
</style>
