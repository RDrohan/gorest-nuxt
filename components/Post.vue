<template>
  <div
    class="flex justify-between items-center bg-base-300 rounded-lg mt-4 p-4"
  >
    <div class="flex-col items-left p-2">
      <h2 class="text-xs md:text-sm font-bold">{{ post.title }}</h2>
      <p class="text-base-content/70 text-xs md:text-sm pt-2">
        {{ post.body }}
      </p>
    </div>
    <NuxtLink
      v-show="!isComment"
      :to="`/comments/${post.id}`"
      class="btn btn-xs md:btn-sm"
      >See Comments</NuxtLink
    >
  </div>
</template>

<script setup>
const { post, mode } = defineProps(["post", "mode"]);

const isComment = mode === "comment" ? true : false;
</script>
