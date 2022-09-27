<script setup>
	import HelloWorld from "./components/HelloWorld.vue";
	import Button from "./components/Button.vue";
</script>

<template lang="pug">
.container
	h1 Mi App
	HelloWorld
	Button
</template>

<style scoped>
	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
		border: 1px solid #1a1a1a;
		border-radius: 8%;
		transition-duration: 350ms;
	}
	.container:hover {
		border-color: #f2f2f2;
		transition-duration: 350ms;
	}
</style>
