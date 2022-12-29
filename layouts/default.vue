<template>
  <div class="container mx-auto navbar">
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
  <div class="max-w-5xl mx-auto p-6">
    <slot />
  </div>
  <footer
    class="footer footer-center p-10 bg-base-200 text-base-content rounded"
  >
    <div class="grid grid-flow-col gap-4">
      <NuxtLink to="/" class="link link-hover">Item 1</NuxtLink>
      <NuxtLink to="/" class="link link-hover">Item 2</NuxtLink>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a href="https://github.com/RDrohan"
          ><Icon name="icomoon-free:github" class="text-3xl"></Icon
        ></a>
        <a href="https://www.facebook.com/ricky.drohan"
          ><Icon name="icomoon-free:facebook2" class="text-3xl"></Icon
        ></a>
        <a href="https://www.linkedin.com/in/rickydrohan/"
          ><Icon name="icomoon-free:linkedin" class="text-3xl"></Icon
        ></a>
      </div>
    </div>
    <div>
      <p>Copyright © {{ currentYear }} - All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
