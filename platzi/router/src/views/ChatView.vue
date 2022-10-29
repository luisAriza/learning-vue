<script setup>
  import { ref, computed, defineProps, toRefs } from "vue";
  // import { useRoute } from "vue-router";

  const props = defineProps({
    chatId: {
      type: String,
      default: "",
    },
  });
  const { chatId } = toRefs(props);

  // const route = useRoute();

  const messages = ref([
    {
      id: 1,
      text: "Mensaje 1",
      author: 1,
    },
    {
      id: 2,
      text: "Mensaje 2",
      author: 2,
    },
    {
      id: 3,
      text: "Mensaje 3",
      author: 3,
    },
  ]);

  const messagesFiltered = computed(() =>
    messages.value.filter((msg) => msg.author.toString() === chatId.value)
  );
</script>

<template>
  <div v-for="msg in messagesFiltered" :key="msg.id">
    {{ msg.text }}
  </div>
</template>

<style scoped></style>
