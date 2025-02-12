<script setup>
  import { Menu } from '@pages/menu'
</script>

<template>
  <nav purpose="DEBUG">
    <RouterLink to="/">MENU</RouterLink>
    <RouterLink to="/game">GAME</RouterLink>
  </nav>

  <main>
    <Menu />

    <RouterView v-slot="{ Component }">
      <Transition name="fading" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style>
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