<template>
  <div class="container mx-auto sticky top-0 z-50 navbar">
    <div class="flex-1">
      <NuxtLink to="/" class="fbtn btn-ghost normal-case text-xl"
        >GO REST Nuxt</NuxtLink
      >
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>
  <slot />
</template>
