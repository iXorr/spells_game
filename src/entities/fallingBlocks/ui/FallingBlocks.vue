<script setup>
  import { ref } from 'vue'

  const msg = ref('')

  function checkThis(event) {
    msg.value = `hello from x: ${event}, y: ...` 
  }
</script>

<template>
  <p>{{ msg }}</p>

  <div class="falling-block-container" @click="checkThis(event)">
    <img
    class="falling-block" 
    src="../assets/gem.png"
    alt="no-image"
    draggable="false">
  </div>
</template>

<style scoped>
  p {
    background: white;
    position: absolute;
    padding: 1rem;
  }

  .falling-block-container {
    position: absolute;
    width: 100dvw;
    height: 100dvh;

    overflow: hidden;
  }

  .falling-block {
    position: inherit;
    width: 3rem;
    height: 3rem;

    box-shadow: 0 0 .75rem rgba(0, 0, 0, 0.5);
    background: red;
    /* background: rgba(0, 0, 0, 0.225);
    border-radius: 100%; */

    margin: 5rem;

    animation: spinning 1.5s linear infinite, falling 2s ease-in-out infinite;
  }

  @keyframes spinning {
    from {
      transform: rotate(0);
    }

    to { 
      transform: rotate(360deg);
    }
  }

  @keyframes falling {
    from {
      translate: 0 -25dvh;
    }

    to {
      translate: 0 125dvh;
    }
  }
</style>