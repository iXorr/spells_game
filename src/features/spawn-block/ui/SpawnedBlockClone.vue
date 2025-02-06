<script setup>
  import { ref, onMounted, computed } from 'vue'
  import { DiamondIcon, BombIcon } from '@shared/icons'

  const isDiamond = ref(Math.random() > 0.2)
  const isMounted = ref(false)
  const randomDelay = Math.ceil(Math.random() * 5000)

  const randomX = ref(Math.ceil(Math.random() * 90))
  const animationDuration = ref(Math.random() * 2 + 3.5)
  const animationDirection = ref(Math.random() > 0.5 ? 'normal' : 'reverse')
  const animationPlayState = ref('running')
  const blockOpacity = ref(1)

  function loot() {
    animationPlayState.value = 'paused'
    blockOpacity.value = 0
  }
 
  const styleVars = computed(() => ({
    '--animation-duration': animationDuration.value + 's',
    '--animation-direction': animationDirection.value,
    '--animation-play-state': animationPlayState.value,
    '--left-offset': `${randomX.value}%`,
    '--block-opacity': blockOpacity.value,
  }))

  onMounted(() => {
    setTimeout(() => {
      isMounted.value = true
    }, randomDelay)
  })
</script>

<template>
  <div
    class="falling-block
      falling-block--offset
      falling-block--looted"

    v-if="isMounted"
    @mousedown="loot"
    @touchstart="loot"
    :style="styleVars">

    <DiamondIcon v-if="isDiamond" />
    <BombIcon v-else />
  </div>
</template>

<style scoped>
  .falling-block {
    position: absolute;
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    filter: drop-shadow(0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.4));

    will-change: contents;
    transition: 
      scale 0.2s ease, 
      opacity 0.5s ease;

    animation: 
      spinning 1.5s linear infinite var(--animation-direction), 
      falling var(--animation-duration) ease 1 forwards;
  }

  .falling-block:active {
    cursor: grabbing;
    scale: 1.25;
  }

  .falling-block--offset {
    left: var(--left-offset);
  }

  .falling-block--looted {
    animation-play-state: var(--animation-play-state);
    opacity: var(--block-opacity);
  }

  @keyframes spinning {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }

  @keyframes falling {
    from {
      bottom: 100%;
    }
    to {
      bottom: -50%;
    }
  }
</style>