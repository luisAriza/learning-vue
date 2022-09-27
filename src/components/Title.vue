<script>
	export default {
		name: "Title",
		props: {
			text: String,
		},
	};
</script>

<template lang="pug">
h1.title {{ text }}
</template>

<style scoped lang="scss">
	.title {
		font-size: 2.5em;
		line-height: 1ch;
		margin-bottom: 1rem;
	}
</style>
