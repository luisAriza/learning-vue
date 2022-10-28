<script setup>
  import { ref } from "vue";

  const chats = ref([
    {
      id: 1,
      name: "Luis",
    },
    {
      id: 2,
      name: "Milena",
    },
    {
      id: 3,
      name: "Patricio",
    },
  ]);
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
