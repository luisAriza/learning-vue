<script setup>
  import { ref } from "vue";

  const user = ref("");
</script>

<template>
  <main>
    <div>
      <h1>Main</h1>
      <input type="text" placeholder="Ingresar usuario" v-model="user" />
      <p>Usuario: {{ user }}</p>
    </div>
  </main>
</template>
