<script setup>
  import { FadingRouterView } from '@shared/ui'
</script>

<template>
  <main class="screen">
    <FadingRouterView />
  </main>
</template>

<style scoped>
  main {
    background: url('@shared/assets/img/menu-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>