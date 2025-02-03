<script setup>
  import { ref, onMounted } from 'vue'
  import { DiamondIcon } from '@shared/icons'

  const dynClasses = ref('falling-block')

  function loot() {
    dynClasses.value += ' falling-block--looted'

    // setTimeout(() => {
    //   dynClasses.value = 'falling-block'
    // }, 1500)
  }

  const dynClasses2 = ref(Math.round(Math.random()) 
    ? 'fall-animation' 
    : 'fall-animation-reversed')

  const randomX = Math.ceil(Math.random()*90)

  const isMounted = ref(false)
  const randomDelay = Math.ceil(Math.random()*5000)

  onMounted(() => {
    // await nextTick();

    setTimeout(() => {
      isMounted.value = true;
    }, randomDelay);
  });
</script>

<template>
  <!-- <p>{{ randomDelay }}</p> -->

  <DiamondIcon
    v-if="isMounted"
    @mousedown="loot"
    @touchstart="loot"
    :class="dynClasses + ' ' + dynClasses2"
    :style="{ left: randomX + '%' }" />
</template>

<style scoped>
  .falling-block {
    padding: .5rem;
    /* background: red; */

    filter: drop-shadow(.25rem .25rem .5rem #00000040);
    position: absolute;
    width: 3rem;
    height: 3rem;
    will-change: contents;
    transition: 
      scale var(--fast-transition), 
      opacity var(--slow-transition);
  }

  .fall-animation {
    animation: 
      spinning 1.5s linear infinite, 
      falling 3s ease-in-out 1 forwards;
  }

  .fall-animation-reversed {
    animation: 
      spinning 1.5s linear infinite reverse, 
      falling 3s ease-in-out 1 forwards;
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
      bottom: 110%;
    }

    to {
      bottom: -10%;
    }
  }
</style>