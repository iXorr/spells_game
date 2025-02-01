<script setup>
  import { coords, dynPulseClasses } from '../model/trackClick.js'
</script>
 
<template>
  <div class="pulse-container">
    <div
      :class="dynPulseClasses"
      :style="{ top: coords.y + 'px', left: coords.x + 'px'}">
    </div>
  </div>
</template>

<style scoped>
  .pulse-container {
    overflow: hidden;
    
    position: absolute;
    width: inherit;
    height: inherit;
    
    pointer-events: none;
  }

  .pulse {
    z-index: 1;
    position: inherit;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: rgba(220, 20, 60, 0.5);
    /* background: rgba(0, 0, 0, 0.25); */
    /* background: rgba(135, 206, 250, 0.548); */
    opacity: 0;

    translate: -1rem -1rem;
    transition: transform 0.1s ease;
  }

  .pulse--active {
    animation: pulsing .25s ease-out 1;
  }

  @keyframes pulsing {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    50% {
      transform: scale(2);
      opacity: 0.3;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }
</style>