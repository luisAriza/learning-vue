<script setup>
	import Title from "@components/Title.vue";
	import Button from "@components/Button.vue";
	import CardItem from "@components/CardItem.vue";
</script>

<template lang="pug">
.container
	Title
	Button
.cards-container
	CardItem(image="/vue.svg" name="Vue" subtitle="Framework")
	CardItem(image="/vite.svg" name="Vite" subtitle="Bundler")
</template>

<style src="@styles/App.scss" scoped></style>
