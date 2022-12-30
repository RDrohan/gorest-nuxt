<template>
  <div class="mx-auto">
    <UserPanel :user="user" mode="posts" />
    <div v-for="p in posts" class="mt-4">
      <Post :post="p" />
    </div>
  </div>
</template>

<script setup>
const { userId } = useRoute().params;

const { data: user } = await useFetch(`/api/users/${userId}`);

const { data: posts } = await useFetch(`/api/posts/${userId}`);
</script>
