<script setup>
  import { ref, watchEffect } from 'vue'
  import { FallingBlock } from '@entities/fallingBlock'
  import { collectedDiamonds, skippedDiamonds } from '@entities/gameScore'

  const isRoundActive = ref(true)

  const blocks = ref([])

  setInterval(() => {
    blocks.value.push({ id: Date.now() })
  }, 500)

  watchEffect(() => {
    if (skippedDiamonds.value >= 3) {
      skippedDiamonds.value = 0
      isRoundActive.value = false
      blocks.value = []
    }
  })
</script>

<template>
  <div class="local-root">    
    <div class="panel">
      <p>{{ spawnInterval }}</p>

      <p>{{ collectedDiamonds }} : {{ skippedDiamonds }}</p>

      <div class="btns">
        <button 
          @click="isRoundActive = !isRoundActive">
          {{ isRoundActive ? 'Stop' : 'Start' }}
        </button>
      </div>
    </div>

    <Transition>
      <div v-if="isRoundActive">

        <FallingBlock
          v-for="block in blocks"
          :key="block.id" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
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
    margin-top: 0.5rem;
  }

  .btns > *:first-child {
    margin-right: .25rem;
  }

  button {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>