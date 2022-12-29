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
      <div class="btn-group">
        <button class="btn btn-sm md:btn-md">See Posts</button>
        <button class="btn btn-sm md:btn-md">See Todos</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { user } = defineProps(["user"]);
const avatarClass =
  user.status === "active" ? "avatar online" : "avatar offline";
const avatarImage = user.gender === "male" ? "male.png" : "female.png";
const genderClass =
  user.gender === "male"
    ? "badge badge-info capitalize mt-2"
    : "badge badge-secondary capitalize mt-2";
</script>
