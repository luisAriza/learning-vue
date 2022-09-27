<script>
	import Title from "@components/Title.vue";
	import Button from "@components/Button.vue";
	import CardItem from "@components/CardItem.vue";

	export default {
		name: "App",
		components: {
			Title,
			Button,
			CardItem,
		},
	};
</script>

<template lang="pug">
.container
	Title(text="Mi App")
	Button(name="Button")
.cards-container
	CardItem(image="/vue.svg" title="Vue" subtitle="Framework")
	CardItem(image="/vite.svg" title="Vite" subtitle="Bundler")
</template>

<style src="@styles/App.scss" scoped></style>
