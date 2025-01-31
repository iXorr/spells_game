<script setup>
  import { ref } from 'vue';
  
  const pulse = ref(null)

  function animateClick(event) {
    pulse.value.style.top = event.clientY + 'px'
    pulse.value.style.left = event.clientX + 'px'
    pulse.value.classList.add('pulse--active')
  }
</script>

<template>
  <div class="pulse" ref="pulse">1235</div>
</template>

<style scoped>
  .pulse {
    position: absolute;
    top: 5rem;
    left: 15rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    pointer-events: none;
    background: rgba(0, 0, 0, 0.2);
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