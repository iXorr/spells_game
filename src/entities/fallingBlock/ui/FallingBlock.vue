<script setup>
  import { ref, onMounted } from 'vue'
  import { DiamondIcon, BombIcon } from '@shared/icons'
  import { defineIsDiamond, getStyle, getDelay } from '../model/getRandom'

  // сделать функцию, которая при клике отправляет, какой блок был задет???
  // также можно реализовать entity gameScore, 
  // чтобы именно ЕГО изменять через эту функцию

  // также в entities можно добавить gameSettings
  // с динамическим изменением по мере прохождения игроком

  const isMounted = ref(false)

  const currentDelay = getDelay()
  const currentStyle = getStyle()
  const isCurrentDiamond = defineIsDiamond()

  const isCompleted = ref(false)
  const isHidden = ref('')

  function destroy() {
    isCompleted.value = true
  }

  function hide() {
    isHidden.value = 'falling-block--looted'
    
    setTimeout(() => {
      destroy()
    }, 500);
  }

  onMounted(() => {
    setTimeout(() => {
      isMounted.value = true
    }, currentDelay)
  })
</script>

<template>
  <div
    v-if="isMounted && !isCompleted"
    
    @mousedown="hide"
    @touchstart="hide"
    @animationend="destroy"

    :isDiamond="isCurrentDiamond"
    :style="currentStyle"

    :class="isHidden"
    class="falling-block
      falling-block--offset
      falling-block--animated">

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