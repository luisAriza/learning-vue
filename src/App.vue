<script>
	import Title from "@/components/Title.vue";
	import Button from "@/components/Button.vue";
	import CardItem from "@/components/CardItem.vue";

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

<style scoped lang="scss">
	$dark: #1a1a1a;
	$light: #f9f9f9;

	.container {
		width: 100%;
		max-width: 560px;
		padding: 2rem;
		text-align: center;
		border: 2px solid $dark;
		border-radius: 1rem;
		transition-duration: 0.5s;

		&:hover {
			border-color: $light;
			transition-duration: 0.5s;
		}
		.title {
			margin-bottom: 2rem;
		}
	}
	.cards-container {
		display: grid;
		gap: 2rem;
	}

	@media (prefers-color-scheme: light) {
		.container {
			border-color: $light;

			&:hover {
				border-color: $dark;
			}
		}
	}
</style>
