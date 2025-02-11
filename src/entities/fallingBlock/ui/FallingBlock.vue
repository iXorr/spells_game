<script setup>
  import { ref } from 'vue'
  import { DiamondIcon, BombIcon } from '@shared/icons'
  import { defineIsDiamond, getStyleVars } from '../model/getRandom'
  import { changeScoreOnClick, changeScoreOnFall } from '../model/scoreActions'
  
  const isCurrentDiamond = ref(defineIsDiamond())
  const currentStyleVars = ref(getStyleVars())  
  const motionClasses = ref('falling-block--animated')

  const updateBlock = () => {
    motionClasses.value = null
    isCurrentDiamond.value = defineIsDiamond()
    currentStyleVars.value = getStyleVars()
    
    setTimeout(() => {
      motionClasses.value = 'falling-block--animated'
    }, 250)
  }

  const checkFalling = (event) => {
    if (event.animationName.includes('falling')) {
      changeScoreOnFall(isCurrentDiamond.value)
      updateBlock()
    }
  }

  const checkClicking = () => {
    changeScoreOnClick(isCurrentDiamond.value)
    motionClasses.value += ' falling-block--looted'

    setTimeout(() => {
      updateBlock()
    }, 500)
  }
</script>

<template>
  <div
    :class="motionClasses"
    class="falling-block falling-block--offset"
    :style="currentStyleVars"
      
    @pointerdown="checkClicking"
    @animationiteration="checkFalling">

    <DiamondIcon v-if="isCurrentDiamond" />
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
    will-change: contents;
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