<template>
  <div class="flex justify-between items-center">
    <div>
      <div :class="avatarClass">
        <div class="w-16 md:w-24 rounded-full">
          <img :src="avatarImage" :alt="user.name" />
        </div>
      </div>
    </div>
    <div class="flex-auto p-3">
      <div class="text-sm md:text-lg font-extrabold">{{ user.name }}</div>
      <div class="text-base-content/70 text-xs md:text-sm">
        {{ user.email }}
      </div>
      <div :class="genderClass">{{ user.gender }}</div>
    </div>
    <div>
      <div :class="mode === 'all' ? 'btn-group' : ''">
        <NuxtLink
          v-show="mode === 'all' || mode === 'todos'"
          :to="`/posts/${user.id}`"
          class="btn btn-sm md:btn-md"
          >See Posts</NuxtLink
        >
        <NuxtLink
          v-show="mode === 'all' || mode === 'posts'"
          :to="`/todos/${user.id}`"
          class="btn btn-sm md:btn-md"
          >See Todos</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const { user, mode } = defineProps(["user", "mode"]);
const avatarClass =
  user.status === "active" ? "avatar online" : "avatar offline";
const avatarImage = user.gender === "male" ? "/male.png" : "/female.png";
const genderClass =
  user.gender === "male"
    ? "badge badge-info capitalize mt-2"
    : "badge badge-secondary capitalize mt-2";
</script>
