<script setup>
  import { coords } from '../model/trackClick.js'
  import { dynamicPulseClasses } from '../model/animateClick.js'
</script>
 
<template>
  <div class="pulse-container">
    <div
      :class="dynamicPulseClasses"
      :style="{ top: coords.y + 'px', left: coords.x + 'px'}">
    </div>
  </div>
</template>

<style scoped>
  .pulse-container {
    overflow: hidden;
    z-index: 1;
    
    position: absolute;
    width: 100dvw;
    height: 100dvh;
    
    pointer-events: none;
  }

  .pulse {
    position: inherit;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
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