<script setup>
  import { FadingRouterView } from '@shared/ui'
  
  import { 
    collectedDiamonds, 
    skippedDiamonds, 
    collectedBarrels, 
    chosenDifficulty 
  } from '@entities/gameStates'
</script>

<template>
  <p class="info">
    {{ collectedDiamonds }} 
    : {{ skippedDiamonds }} 
    : {{ collectedBarrels }} 
    : {{ chosenDifficulty }}
  </p>

  <main class="screen">
    <FadingRouterView />
  </main>
</template>

<style>
  .info {
    position: absolute;
    z-index: 10;
    background: thistle;
    padding: 1rem;
  }

  main {
    background: lightslategray;
  }
</style>