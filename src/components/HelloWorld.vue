<script>
	export default {
		name: "HelloWorld",
		props: {
			title: String,
		},
	};
</script>

<template lang="pug">
.title-container
	h1 {{ title }}
</template>

<style scoped lang="scss">
	h1 {
		font-size: 3.2em;
		line-height: 1.1;
	}
</style>
