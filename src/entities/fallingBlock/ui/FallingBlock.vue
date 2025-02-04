<script setup>
  import { ref, onMounted, computed } from 'vue'
  import { DiamondIcon, BombIcon } from '@shared/icons'

  const isMounted = ref(false)
  const isDiamond = Math.random() > 0.2
  const randomDelay = Math.ceil(Math.random() * 5000)
  const randomX = Math.ceil(Math.random() * 90)
  const animationDirection = Math.random() > 0.5 ? 'normal' : 'reverse'

  const isLooted = ref(false)
  function loot() {
    isLooted.value = true
  }

  const blockClasses = computed(() => [
    'falling-block',
    { 'falling-block--looted': isLooted.value },
    `fall-animation-${animationDirection}`
  ])

  const animationDuration = Math.random() * 2 + 2.5

  const maxBlockSizing = 2
  const minBlockSizing = 1
  const blockSizing = minBlockSizing + (maxBlockSizing - minBlockSizing) * (4.5 - animationDuration) / (4.5 - 2.5)

  const blockStyle = computed(() => ({
    left: `${randomX}%`,
    '--animation-duration': animationDuration + 's',
    '--block-sizing': blockSizing
  }))

  onMounted(() => {
    setTimeout(() => {
      isMounted.value = true
    }, randomDelay)
  })
</script>

<template>
  <div
    v-if="isMounted"
    @mousedown="loot"
    @touchstart="loot"
    :class="blockClasses"
    :style="blockStyle">

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
    transition: scale 0.2s ease, opacity 0.5s ease;
  }

  .fall-animation-normal {
    animation: 
      spinning 1.5s linear infinite, 
      falling var(--animation-duration) ease 1 forwards;
  }

  .fall-animation-reverse {
    animation: 
      spinning 1.5s linear infinite reverse, 
      falling var(--animation-duration) ease 1 forwards;
  }

  .falling-block:active {
    cursor: grabbing;
    scale: 1.25;
  }

  .falling-block--looted {
    animation-play-state: paused;
    opacity: 0;
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