<script setup>
  import { FadingRouterView } from '@shared/ui';
</script>

<template>
  <!-- <nav purpose="DEBUG">
    <RouterLink to="/">MENU</RouterLink>
    <RouterLink to="/game">GAME</RouterLink>
  </nav> -->

  <main class="screen">
    <FadingRouterView />
  </main>
</template>

<style>
  main {
    background: lightslategray;
  }

  nav {
    right: 0;
    z-index: 1;
    position: absolute;
    padding: 1rem;
    background: thistle;
  }

  nav > *:first-child {
    margin-right: 1rem;
  }
</style>