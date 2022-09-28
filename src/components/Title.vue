<script>
	const titles = ["My App", "Vue", "Vite"];

	export default {
		name: "Title",
		// Propiedades con sintaxis avanzada
		props: {
			text: {
				type: String,
				default: "My App",
				required: false,
				validator: (value) => titles.includes(value),
			},
		},
	};
</script>

<template lang="pug">
h1.title {{ text }}
</template>

<style src="@styles/Title.scss" scoped></style>
