<script setup>
	import Title from "@components/Title.vue";
	import Button from "@components/Button.vue";
	import CardItem from "@components/CardItem.vue";
</script>

<template lang="pug">
.container
	Title(text="My App")
	Button(name="Button")
.cards-container
	CardItem(image="/vue.svg" title="Vue" subtitle="Framework")
	CardItem(image="/vite.svg" title="Vite" subtitle="Bundler")
	CardItem(image="/vue.svg" title="Vue" subtitle="Framework")
	CardItem(image="/vite.svg" title="Vite" subtitle="Bundler")
	CardItem(image="/vue.svg" title="Vue" subtitle="Framework")
	CardItem(image="/vite.svg" title="Vite" subtitle="Bundler")
</template>

<style src="@styles/App.scss" scoped></style>
