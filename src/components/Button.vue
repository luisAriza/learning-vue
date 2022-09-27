<script>
	export default {
		name: "Button",
		props: {
			name: String,
		},
	};
</script>

<template lang="pug">
button.btn {{ name }}
</template>

<style src="@styles/Button.scss" scoped></style>
