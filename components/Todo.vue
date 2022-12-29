<template>
  <div class="flex justify-between items-center">
    <div>
      {{ todo.title }}
    </div>
    <div>
      {{ todo.due_on }}
    </div>
    <div>
      {{ todo.status }}
    </div>
  </div>
</template>

<script setup>
const { todo } = defineProps(["todo"]);
</script>
