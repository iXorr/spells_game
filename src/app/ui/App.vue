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
    background: url('@shared/assets/img/cave.gif') no-repeat center center;
    background-size: cover;
  }
</style>