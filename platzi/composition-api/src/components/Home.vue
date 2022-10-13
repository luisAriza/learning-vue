<template>
	<h3>Con ref: {{ counter }}</h3>
	<h3>Con reactive: {{ obj.counter }}</h3>
</template>

<script>
	import { ref, reactive } from "vue";

	export default {
		setup() {
			// Variables reactivas
			const counter = ref(0);
			setInterval(() => counter.value++, 500);

			// Variables y Objetos reactivos
			const obj = reactive({ counter: 0 });
			setInterval(() => obj.counter++, 500);

			return {
				counter,
				obj,
			};
		},
	};
</script>
