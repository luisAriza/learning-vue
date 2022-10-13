<template>
	<div>{{ text }}</div>
	<div>{{ algo }}</div>
</template>

<script>
	import base from "@/mixins/base";

	export default {
		name: "App",
		mixins: [base],
		data() {
			return {
				text: "Hola Vue",
			};
		},
		beforeCreated() {
			// 'Data' aun no está disponible y 'El' tampoco
			console.log("Before created", this.$data, this.$el);
		},
		created() {
			// 'Data' ya está disponible pero 'El' aun no
			console.log("Created", this.$data, this.$el);
		},
		mounted() {
			// 'Data' y 'El' están disponible y montados
			console.log("Mounted", this.$data, this.$el);
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
