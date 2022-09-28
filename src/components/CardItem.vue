<script>
	import Title from "@components/Title.vue";
	import Button from "@components/Button.vue";

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
	figure
		img(:src="image" :alt="title + ' icon'" width="240" height="240")
	Title(:text="title")
	h2 {{ subtitle }}
	p Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi saepe accusamus officiis dolores in porro ratione nisi culpa vel totam quibusdam omnis magnam.
	Button(name="View")
</template>

<style src="@styles/CardItem.scss" scoped></style>
