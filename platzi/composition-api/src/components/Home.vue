<template>
	<h3>Con ref: {{ counter }}</h3>
	<h3>Con reactive: {{ obj.counter }}</h3>
</template>

<script>
	import { ref, reactive, watch } from "vue";

	export default {
		setup() {
			// Variables reactivas
			const counter = ref(0);
			setInterval(() => counter.value++, 500);
			watch(counter, (value, old) => {
				console.log(`REF: Act ${value}, Ant ${old}`);
			});

			// Variables y Objetos reactivos
			const obj = reactive({ counter: 0 });
			setInterval(() => obj.counter++, 500);
			watch(
				() => obj.counter,
				(value, old) => {
					console.log(`REACTIVE: Act ${value}, Ant ${old}`);
				}
			);

			return {
				counter,
				obj,
			};
		},
	};
</script>
