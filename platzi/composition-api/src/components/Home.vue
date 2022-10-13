<template>
	<div></div>
</template>

<script>
	import { onMounted } from "vue";

	export default {
		setup() {
			onMounted(() => {
				console.log("Montado");
			});
		},
	};
</script>
