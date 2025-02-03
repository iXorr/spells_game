<script setup>
  import { FallingBlock } from '@entities/fallingBlock'
</script>

<template>
  <div class="local-root screen">
    <FallingBlock v-for="i in 5" class="example" />
  </div>
</template>

<style scoped>
  .example:nth-of-type(1) {
    top: 5rem;
    left: 5rem;
  }

  .example:nth-of-type(2) {
    top: -5rem;
    left: 10rem;
  }

  .example:nth-of-type(3) {
    top: 1rem;
    left: 15rem;
  }

  .example:nth-of-type(4) {
    top: 3rem;
    left: 20rem;
  }

  .example:nth-of-type(5) {
    top: -1rem;
    left: 25rem;
  }

  .local-root {
    background: rgb(0, 109, 109);
    /* background-image: url("@shared/assets/img/playground.gif");
    background-size: cover;
    background-position: center; */

    cursor: grab;
  }
  
  /* @media (pointer: fine) {
    .root, 
    .root * {
      cursor: url('@shared/assets/cursors/wand.cur'), auto;
    }
  } */
</style>