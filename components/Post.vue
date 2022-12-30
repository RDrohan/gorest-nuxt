<template>
  <div class="bg-base-300 rounded-lg mt-4 p-4">
    <h2 class="text-sm md:text-md font-bold">{{ post.title }}</h2>
    <p class="text-base-content/70 text-sm md:text-md pt-2">
      {{ post.title }}
    </p>
  </div>
</template>

<script setup>
const { post } = defineProps(["post"]);
</script>
