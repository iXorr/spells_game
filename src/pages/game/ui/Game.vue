<script setup>
  // а что будет здесь?
  import { BlocksField } from '@widgets/BlocksField'
</script>

<template>
  <div class="local-root screen">
    <BlocksField />
  </div>
</template>

<style scoped>
  button {
    top: 1rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    cursor: pointer;
  }

  button:first-of-type {
    margin-right: 0.25rem;
  }

  .local-root {
    background: rgb(0, 109, 109);
    /* background-image: url("@shared/assets/img/playground.gif");
    background-size: cover;
    background-position: center; */
    
    cursor: grab;
  }
  
  /* @media (pointer: fine) {
    .local-root, 
    .local-root * {
      cursor: url('@shared/assets/cursors/wand.cur'), auto;
    }
  } */
</style>