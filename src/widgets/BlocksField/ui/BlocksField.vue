<script setup>
  import { onMounted, ref } from 'vue'
  import { FallingBlock } from '@entities/fallingBlock'
  import { gameScore, increaseScore, decreaseScore } from '@entities/gameScore'

  const blocksAmount = ref(10)
  const isRoundActive = ref(false)
</script>

<template>
  <div>    
    <div class="panel">
      <p>{{ gameScore }}</p>

      <div class="btns">
        <button 
          @click="isRoundActive = !isRoundActive">
          {{ isRoundActive ? 'Stop' : 'Start' }}
        </button>
      </div>
    </div>

    <template
      v-if="isRoundActive"
      class="round" >

      <FallingBlock
        v-for="i in blocksAmount"
        :key="i"

        @mousedown="console.log('!')"
        @touchstart="console.log('!')"
        @animationend="console.log('...блок пропущен!')" />
    </template>
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
</style>