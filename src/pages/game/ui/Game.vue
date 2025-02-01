<script setup>
  import { onMounted, ref, watchEffect } from 'vue'
  import { PulseClick, trackClick } from '@entities/pulseClick'
  import { Shape } from '@shared/ui'
</script>

<template>
  <div class="root screen" @click="(event) => trackClick(event)">
    <PulseClick />

    <Shape />
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