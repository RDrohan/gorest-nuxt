<template>
  <div class="mx-auto">
    <BackButton />
    <UserPanel :user="user" mode="todos" />
    <div class="mt-4">
      <div v-if="!todos.length">
        <h1 class="text-md font-bold text-center">
          {{ user.name }} has no todos yet.
        </h1>
      </div>
      <div v-else>
        <div v-for="t in todos">
          <Todo :todo="t" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { userId } = useRoute().params;

const { data: user } = await useFetch(`/api/users/${userId}`);

const { data: todos } = await useFetch(`/api/todos/${userId}`);
</script>
