<script setup>
  import { chosenDiamondIcon } from '@entities/gameStates'
  import { DiamondIcon, PenisIcon, BombIcon } from '@shared/icons'
  import { createLifeCycle } from '../model/createLifeCycle'

  const { 
    isCurrentDiamond, 
    currentStyleVars, 
    motionClasses, 
    checkFalling, 
    checkClicking
  } = createLifeCycle()
</script>

<template>
  <div
    :style="currentStyleVars"
    :class="motionClasses"
    class="falling-block 
      falling-block--offset"
      
    @pointerdown="checkClicking"
    @animationiteration="checkFalling">

    <template v-if="isCurrentDiamond">
      <PenisIcon v-if="chosenDiamondIcon === 'secret'" />
      <DiamondIcon v-else />
    </template>

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

    scale: var(--block-sizing);
    bottom: 110%;
  }

  .falling-block:active {
    cursor: grabbing;
    scale: calc(var(--block-sizing) * 1.25);
  }

  .falling-block--animated {
    will-change: transform, opacity;
    transition: 
      scale 0.2s ease, 
      opacity 0.5s ease;

    animation: 
      spinning calc(var(--animation-duration) * 0.3) linear infinite var(--animation-direction), 
      falling var(--animation-duration) cubic-bezier(0.25, 0.1, 0.25, 1) var(--animation-delay) infinite forwards;
  }

  .falling-block--offset {
    left: var(--left-offset);
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
    to {
      bottom: -25%;
    }
  }
</style>