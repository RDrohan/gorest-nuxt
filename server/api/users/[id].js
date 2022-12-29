export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const { apiKey } = useRuntimeConfig();

  const uri = `https://gorest.co.in/public/v2/users/${id}?access-token=${apiKey}`;

  const data = await $fetch(uri);

  return data;
});
