export default defineEventHandler(async (event) => {
  const { postId } = event.context.params;

  const { apiKey } = useRuntimeConfig();

  const uri = `https://gorest.co.in/public/v2/posts/${postId}/comments?access-token=${apiKey}`;

  const data = await $fetch(uri);

  return data;
});
