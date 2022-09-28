<script>
	import Title from "@components/Title.vue";
	import Button from "@components/Button.vue";

	export default {
		name: "CardItem",
		components: {
			Title,
			Button,
		},
		// Propiedades con sintaxis simple
		props: {
			image: String,
			name: String,
			subtitle: String,
		},
		data() {
			return {
				count: 0,
			};
		},
		computed: {
			counterText() {
				return `${this.count} items`;
			},
		},
		methods: {
			add() {
				this.count++;
			},
			sub() {
				this.count--;
			},
		},
		watch: {
			count(current, old) {
				console.log(`It has changed: ${old} => ${current}`);
			},
		},
		updated() {
			console.log("I've been updated");
		},
	};
</script>

<template lang="pug">
.card-item
	figure
		img(:src="image" :alt="name + ' icon'" width="240" height="240")
	Title(:text="name")
	h2 {{ subtitle }}
	p Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi saepe accusamus officiis dolores in porro ratione nisi culpa vel totam quibusdam omnis magnam.
	Button(name="View")
	.counter
		h3 {{ counterText }}
		Button.btn-counter(name="+" @click="add")
		Button.btn-counter(name="-" @click="sub()")
</template>

<style src="@styles/CardItem.scss" scoped></style>
