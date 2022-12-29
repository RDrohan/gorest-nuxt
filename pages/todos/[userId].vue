<template>
  <UserPanel :user="user" mode="todos" />
  <div v-for="t in todos">
    <Todo :todo="t" />
  </div>
</template>

<script setup>
const { userId } = useRoute().params;

const { data: user } = await useFetch(`/api/users/${userId}`);

const { data: todos } = await useFetch(`/api/todos/${userId}`);
</script>
