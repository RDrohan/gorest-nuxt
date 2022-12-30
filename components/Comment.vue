<template>
  <div class="bg-base-300 rounded-lg mt-4 p-4">
    <div class="text-sm md:text-lg font-extrabold">{{ comment.name }}</div>
    <div class="text-base-content/70 text-xs md:text-sm">
      {{ comment.email }}
    </div>
    <p class="text-base-content/70 text-sm md:text-md pt-2">
      {{ comment.body }}
    </p>
  </div>
</template>

<script setup>
const { comment } = defineProps(["comment"]);
</script>
