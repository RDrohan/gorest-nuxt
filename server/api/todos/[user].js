export default defineEventHandler(async (event) => {
  const { user } = event.context.params;

  const { apiKey } = useRuntimeConfig();

  const uri = `https://gorest.co.in/public/v2/users/${user}/todos?access-token=${apiKey}`;

  const data = await $fetch(uri);

  return data;
});
