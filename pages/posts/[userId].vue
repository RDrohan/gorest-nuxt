<template>
  <div class="mx-auto">
    <UserPanel :user="user" mode="posts" />
    <div class="mt-4">
      <div v-if="!posts.length">
        <h1 class="text-md font-bold text-center">
          {{ user.name }} has no posts yet.
        </h1>
      </div>
      <div v-else>
        <div v-for="p in posts">
          <Post :post="p" mode="posts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { userId } = useRoute().params;

const { data: user } = await useFetch(`/api/users/${userId}`);

const { data: posts } = await useFetch(`/api/posts/${userId}`);
</script>
