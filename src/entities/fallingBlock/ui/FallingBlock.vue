<script setup>
  import { DiamondIcon, BombIcon } from '@shared/icons'
  import { defineIsDiamond, getStyle, getDelay } from '../model/getRandom'
  import { useActions } from '../model/userActions'
  import { useDelayMount } from '../model/delayMount'

  const currentDelay = getDelay()
  const currentStyle = getStyle()
  const isCurrentDiamond = defineIsDiamond()

  const { isCompleted, isHidden, destroy, hide } = useActions()
  const { isMounted } = useDelayMount(currentDelay)
</script>

<template>
  <div
    v-if="isMounted && !isCompleted"

    :isDiamond="isCurrentDiamond"
    :style="currentStyle"

    :class="isHidden"
    class="falling-block
      falling-block--offset
      falling-block--animated"
      
    @mousedown="hide"
    @touchstart="hide"
    @animationend="destroy" >

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
      falling var(--animation-duration) cubic-bezier(0.25, 0.1, 0.25, 1) 1 forwards;
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
    0% {
      bottom: 100%;
    }

    100% {
      bottom: -25%;
    }
  }
</style>