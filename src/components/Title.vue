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

<style src="@styles/Title.scss" scoped></style>
