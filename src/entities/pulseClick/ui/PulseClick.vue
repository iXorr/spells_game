<script setup>
  // import { ref, onUpdated } from 'vue'
  import { coords } from '../model/trackCoords.js'

  // const pulse = ref(null)

  // onUpdated(() => {
  //   pulse.value.classList.add('pulse--active')

  //   setTimeout(() => {
  //     pulse.value.classList.remove('pulse--active')
  //   }, 1000);
  // })
</script>
 
<template>
  <div class="pulse-container">
    <p class="sign">{{ coords.x }} : {{ coords.y }}</p>

    <div
      class="pulse"
      :style="{ top: coords.y + 'px', left: coords.x + 'px'}">
    </div>
  </div>
</template>

<style scoped>
  .sign {
    top: 5rem;
    left: 5rem;
    padding: 15px;
    position: absolute;
    background: thistle;
    font-size: 28px;
    border: 1px solid black;
  }

  .pulse-container {
    overflow: hidden;
    
    position: absolute;
    width: inherit;
    height: inherit;
    
    pointer-events: none;
  }

  .pulse {
    position: inherit;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
    /* opacity: 0; */

    transform: translate(-50%, -50%);
    transition: transform 0.1s ease;
  }

  .pulse--active {
    animation: pulsing 1s ease-out 1;
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