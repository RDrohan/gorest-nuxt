<template>
  <div class="mx-auto">
    <BackButton />
    <Post :post="post" mode="comment" />
    <div class="mt-4">
      <div v-if="!comments.length">
        <h1 class="text-md font-bold text-center">
          There are no comments for this post yet.
        </h1>
      </div>
      <div v-else>
        <h1 class="text-md font-bold text-center">Comments</h1>
        <div v-for="c in comments">
          <Comment :comment="c" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { postId } = useRoute().params;

const { data: post } = await useFetch(`/api/user/${postId}`);

const { data: comments } = await useFetch(`/api/comments/${postId}`);
</script>
