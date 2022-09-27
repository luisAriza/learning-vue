<script>
	import Title from "@/components/Title.vue";
	import Button from "@/components/Button.vue";

	export default {
		name: "CardItem",
		components: {
			Title,
			Button,
		},
		props: {
			image: String,
			title: String,
			subtitle: String,
		},
	};
</script>

<template lang="pug">
.card-item
	img(:src="image" :alt="title + ' icon'" width="240" height="240")
	Title(:text="title")
	h2 {{ subtitle }}
	p Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi saepe accusamus officiis dolores in porro ratione nisi culpa vel totam quibusdam omnis magnam.
	Button(name="View")
</template>

<style scoped lang="scss">
	$dark: #1a1a1a;
	$light: #f9f9f9;

	.card-item {
		width: 100%;
		max-width: 560px;
		padding: 2rem;
		border: 2px solid $dark;
		border-radius: 1rem;
		transition-duration: 0.5s;

		&:hover {
			border-color: $light;
			transition-duration: 0.5s;
		}
		& img {
			width: 100%;
			margin-bottom: 2rem;
		}
		& h2,
		& p {
			margin-bottom: 1rem;
		}
		.btn {
			width: 100%;
		}
	}
	@media (prefers-color-scheme: light) {
		.card-item {
			border-color: $light;

			&:hover {
				border-color: $dark;
			}
		}
	}
</style>
