export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;

  const { apiKey } = useRuntimeConfig();

  const uri = `https://gorest.co.in/public/v2/users/${userId}/posts?access-token=${apiKey}`;

  const data = await $fetch(uri);

  return data;
});
