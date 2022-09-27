<script>
	import HelloWorld from "@/components/HelloWorld.vue";
	import Button from "@/components/Button.vue";

	export default {
		name: "App",
		components: {
			HelloWorld,
			Button,
		},
	};
</script>

<template lang="pug">
.container
	h1 Mi App
	HelloWorld(title="Hello World")
	Button(name="Button")
</template>

<style scoped lang="scss">
	$dark: #1a1a1a;
	$light: #f9f9f9;

	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
		border: 2px solid $dark;
		border-radius: 12px;
		transition-duration: 0.5s;
	}
	.container:hover {
		border-color: $light;
		transition-duration: 0.5s;
	}
	@media (prefers-color-scheme: light) {
		.container {
			border-color: $light;
		}
		.container:hover {
			border-color: $dark;
		}
	}
</style>
