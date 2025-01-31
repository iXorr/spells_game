<script setup>
  import { onMounted, onUpdated, ref, watchEffect } from 'vue';

  import { coords } from '../model/trackCoords.js'
</script>
 
<template>
  <div>
    <p>{{ coords.y }}</p>
    <div class="pulse" :style="{ top: coords.y + 'px', left: coords.x + 'px'}"></div>
  </div>
</template>

<style scoped>
  button {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 10px;
    transition: var(--fast-transition);
  }

  button:active {
    background: lightcoral;
  }

  .pulse {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease;

    /* opacity: 0; */
    pointer-events: none;
  }

  .pulse--active {
    animation: pulse 1s ease-out 1;
  }

  /* @keyframes pulse {
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
  } */
</style>