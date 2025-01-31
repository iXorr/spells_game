<script setup>
  import { onMounted, ref, watchEffect } from 'vue'
  import { PulseClick, trackCoords } from '@entities/pulseClick'
</script>

<template>
  <div class="root screen" @click="(event) => trackCoords(event)">
    <PulseClick class="test" />
  </div>
</template>

<style scoped>
  .root {
    background-image: url("@shared/assets/img/playground.gif");
    background-size: cover;
    background-position: center;
  }
  
  @media (pointer: fine) {
    .root, 
    .root * {
      cursor: url('@shared/assets/cursors/wand.cur'), auto;
    }
  }
</style>