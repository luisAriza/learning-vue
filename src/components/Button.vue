<script>
	export default {
		name: "Button",
		// Propiedades con sintaxis avanzada
		props: {
			name: {
				type: String,
				default: "Button",
				required: false,
				validator: (value) => value.length >= 3,
			},
		},
	};
</script>

<template lang="pug">
button.btn {{ name }}
</template>

<style src="@styles/Button.scss" scoped></style>
