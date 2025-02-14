<script setup>
  import { FadingRouterView } from '@shared/ui'
  import { FallingBlock } from '@entities/fallingBlock'
  import { isRoundActive, isPaused } from '@entities/gameStates'
  import { watchingLose } from '../model/watchingLose'
  
  watchingLose()
</script>

<template>
  <div class="local-root screen">      
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
</style>