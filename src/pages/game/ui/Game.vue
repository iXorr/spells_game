<script setup>
  import { PulseClick, getClickCoords } from '@entities/pulseClick'
</script>

<template>
  <div class="root screen" @click="(event) => getClickCoords(event)">
    <PulseClick />
  </div>
</template>

<style scoped>
  .root {
    background-image: url("@shared/assets/img/playground.gif");
    background-size: cover;
    background-position: center;
  }
  
  @media (pointer: fine) {
    * {
      cursor: url('@shared/assets/cursors/wand.cur'), auto;
    }
  }
</style>