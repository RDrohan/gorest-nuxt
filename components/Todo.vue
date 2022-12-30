<template>
  <div
    class="flex justify-between items-center bg-base-300 rounded-lg mt-4 py-2 px-4"
  >
    <h2 class="text-xs md:text-sm font-bold p-2">{{ todo.title }}</h2>
    <p class="text-base-content/70 text-xs md:text-sm">
      Due: {{ dateString }} at
      <span class="font-italic">{{ timeString }}</span>
    </p>
    <input
      type="checkbox"
      class="checkbox text-xs md:text-sm"
      disabled
      :checked="isChecked"
    />
  </div>
</template>

<script setup>
const { todo } = defineProps(["todo"]);

const todoDate = new Date(todo.due_on);
const dateString = todoDate.toLocaleDateString();
const timeString = todoDate.toLocaleTimeString();

const isChecked = todo.status === "completed" ? true : false;
</script>
