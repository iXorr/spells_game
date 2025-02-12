<script setup>
  import { collectedDiamonds, skippedDiamonds } from '@entities/gameScore'
  import { FallingBlock } from '@entities/fallingBlock'
  import { watchingLose } from '../model/watchingLose';
  import { isRoundActive, isPaused } from '../store/roundActivity'
  
  watchingLose()
</script>

<template>
  <div class="local-root screen">    
    <div class="panel">
      <p>{{ collectedDiamonds }} : {{ skippedDiamonds }}</p>

      <div class="btns">
        <button 
          @click="isPaused = !isPaused">
          {{ !isPaused ? 'Pause' : 'Continue' }}
        </button>

        <button 
          @click="isRoundActive = !isRoundActive">
          {{ isRoundActive ? 'Stop' : 'Start' }}
        </button>
      </div>
    </div>

    <Transition name="fading">
      <div 
        v-if="isRoundActive"
        :class="isPaused ? 'game--paused' : null">

        <FallingBlock
          v-for="i in 10"
          :key="i" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
  .game--paused > * {
    pointer-events: none;
    animation-play-state: paused;
  }

  .local-root {
    position: relative;
    overflow: hidden;

    background: #006d6d;
    cursor: grab;
  }

  .panel {
    position: absolute;
    z-index: 3;

    bottom: 1rem;
    left: 1rem;

    width: fit-content;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: thistle;
    border-radius: 1rem;
  }

  .btns {
    margin-top: .5rem;
  }

  .btns > *:first-child {
    margin-right: .5rem;
  }

  button {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }

  .fading-enter-active,
  .fading-leave-active {
    transition: opacity 0.5s ease;
  }

  .fading-enter-from,
  .fading-leave-to {
    opacity: 0;
  }
</style>