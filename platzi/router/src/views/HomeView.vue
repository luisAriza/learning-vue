<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const user = ref("");
  const login = () => {
    router.push("/chats");
    // router.push({
    // path: "/chats",
    // name: "chat",
    // query: {
    //   search: "arjona",
    // },
    // params: {
    //   idChat: username.value,
    // },
    // });
    // router.replace("/chats");
    // router.go(-1);
  };
</script>

<template>
  <main>
    <h1>Main</h1>
    <input type="text" placeholder="Ingresar usuario" v-model="user" />
    <p>Usuario: {{ user }}</p>
    <button @click="login">Iniciar sesión</button>
  </main>
</template>
