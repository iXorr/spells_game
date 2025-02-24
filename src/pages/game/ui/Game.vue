<script setup>
  import { FadingRouterView } from '@shared/ui'
  import { FallingBlock } from '@entities/fallingBlock'
  import { isGameActive, isPaused } from '@entities/gameStates'
  import { watchingLose } from '../model/watchingLose'
  import { defineDifficulty } from '../model/defineDifficulty';
  
  watchingLose()
</script>

<template>
  <div class="local-root screen">
    <Transition name="fading">
      <div
        v-if="isGameActive"
        :class="isPaused ? 'game--paused' : null">

        <FallingBlock
          v-for="i in defineDifficulty()"
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

    background: url(https://static.vecteezy.com/system/resources/previews/048/382/628/non_2x/gold-mine-tunnel-trolley-with-gold-nuggets-in-old-mining-cave-interior-cartoon-background-illustration-vector.jpg);

    background-repeat: no-repeat;
    background-size: cover;
    
    cursor: grab;
  }

  .game--paused > * {
    pointer-events: none;
    animation-play-state: paused;
  }
</style>