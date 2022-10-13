<template>
	<div>
		<Modal />
	</div>
</template>

<script>
	import Modal from "./components/Modal.vue";

	export default {
		name: "App",
		components: {
			Modal,
		},
	};
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
