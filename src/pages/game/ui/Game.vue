<script setup>
  // добавить возможность перейти в главное меню и настройки
  import { BlocksField } from '@widgets/BlocksField'
</script>

<template>
  <div class="local-root screen">
    <BlocksField />
  </div>
</template>

<style scoped>
  .info {
    right: 1rem;
    bottom: 1rem; 
    position: absolute;
    z-index: 3;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem 2rem;
    border-radius: 1rem;
    background: lightgray;
  }

  .info p {
    margin-bottom: 0.35rem;
    font-size: 0.75rem;
  }

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