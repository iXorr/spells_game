<script setup>
  import { 
    collectedDiamonds, 
    skippedDiamonds, 
    isRoundActive, 
    isPaused 
  } from '@entities/gameStates'
    
  import { FadingRouterView } from '@shared/ui'
  import { FallingBlock } from '@entities/fallingBlock'
  import { watchingLose } from '../model/watchingLose'
  import Interactive from './Interactive.vue'
  
  watchingLose()
</script>

<template>
  <div class="local-root screen">    
    <div class="panel">
      <p>{{ collectedDiamonds }} : {{ skippedDiamonds }}</p>

      <button 
        @click="isRoundActive = !isRoundActive">
        {{ isRoundActive ? 'Stop' : 'Start' }}
      </button>
    </div>

    <!-- <Interactive /> -->

    <Transition name="fading">
      <div 
        v-if="isRoundActive"
        :class="isPaused ? 'game--paused' : null">

        <FallingBlock
          v-for="i in 10"
          :key="i" />
      </div>
    </Transition>

    <FadingRouterView />
  </div>
</template>

<style scoped>
  .local-root {
    position: relative;
    overflow: hidden;

    background: #006d6d;
    cursor: grab;
  }

  .game--paused > * {
    pointer-events: none;
    animation-play-state: paused;
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
</style>