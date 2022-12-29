<template>
  <div v-for="u in users">
    <UserPanel :user="u" />
  </div>
</template>

<script setup>
const { data: users } = await useFetch("/api/users");
</script>
