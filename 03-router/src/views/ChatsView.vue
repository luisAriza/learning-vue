<script setup>
  import { ref, watchEffect } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();
  const chats = ref();

  watchEffect(
    () => {
      console.log("params", route.params);
      chats.value = [
        { id: 1, name: "Luis" },
        { id: 2, name: "Milena" },
        { id: 3, name: "Patricio" },
      ];
    },
    () => {
      return { immediate: true };
    }
  );
</script>

<template>
  <section>
    <aside>
      <h2>Chats</h2>
      <div v-for="chat in chats" :key="chat.id">
        <router-link :to="`/chats/${chat.id}`">
          {{ chat.name }}
        </router-link>
      </div>
    </aside>
    <article>
      <router-view />
    </article>
  </section>
</template>

<style scoped></style>
