<script setup>
  import { onMounted, ref, watchEffect } from 'vue'

  // import { PulseClick, animateClick } from '@entities/pulseClick'
  // к первому div @click="(event) => animateClick(event)"

  import { FallingBlocks } from '@entities/fallingBlocks'
</script>

<template>
  <div class="root screen">
    <!-- <PulseClick /> -->

    <!-- <div class="widget-content"> -->
      <FallingBlocks />
    <!-- </div> -->
  </div>
</template>

<style scoped>
  .root {
    background-image: url("@shared/assets/img/playground.gif");
    background-size: cover;
    background-position: center;
  }
  
  /* @media (pointer: fine) {
    .root, 
    .root * {
      cursor: url('@shared/assets/cursors/wand.cur'), auto;
    }
  } */
</style>