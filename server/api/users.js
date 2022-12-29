export default defineEventHandler(async (event) => {
  const { apiKey } = useRuntimeConfig();

  const data = await $fetch(
    `https://gorest.co.in/public/v2/users?access-token=${apiKey}`
  );

  return data;
});
