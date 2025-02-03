<script setup>
  import { ref } from 'vue'
  import { DiamondIcon } from '@shared/icons'

  const dynClasses = ref('falling-block')

  function loot() {
    dynClasses.value += ' falling-block--looted'

    setTimeout(() => {
      dynClasses.value = 'falling-block'
    }, 1500)
  }
</script>

<template>
  <DiamondIcon :class="dynClasses" @click="loot" />
</template>

<style scoped>
  p {
    background: white;
    position: absolute;
    padding: 1rem;
  }

  .falling-block {
    filter: drop-shadow(.25rem .25rem .5rem rgba(0, 0, 0, 0.25));

    position: absolute;
    width: 3rem;
    height: 3rem;

    will-change: contents;
    transition: scale var(--fast-transition), opacity var(--slow-transition);

    animation: spinning 1.5s linear infinite, falling 3s ease-in-out infinite;
  }

  .falling-block:active {
    scale: 1.25;
    cursor: grabbing;
  }

  .falling-block--looted {
    opacity: 0;
    animation-play-state: paused;
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
      translate: 0 70dvh;
    }
  }
</style>