<template>
  <div v-for="u in users">
    <UserPanel :user="u" mode="all" />
  </div>
</template>

<script setup>
const { data: users } = await useFetch("/api/users/all");
</script>
