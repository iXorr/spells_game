<script setup>
  import { ref, watchEffect } from 'vue'
  import { FallingBlock } from '@entities/fallingBlock'
  import { collectedDiamonds, skippedDiamonds } from '@entities/gameScore'

  // этот компонент отвечает чисто за 
  // бесконечный спавн по нескольким количествам

  // 30 - невозможный уровень
  // 20 - сложный
  // 10 - нормальный
  // 5 - лёгкий

  // идея со спавном: сделать верёвку,
  // которая будет спускать вниз партию блоков


  // можно сделать другой виджет или shared, который
  // будет говорить игроку о том, что он, например, уронил алмаз
  // или схватил бочку с отходами

  // вот это можно будет экспортировать 
  // или просто использовать в другом месте!!!
  const blocksAmount = ref(30)
  const isRoundActive = ref(true)

  watchEffect(() => {
    if (skippedDiamonds.value >= 3)
      isRoundActive.value = false
  })
</script>

<template>
  <div>    
    <div class="panel">
      <p>{{ collectedDiamonds }} : {{ skippedDiamonds }}</p>

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
        :key="i" />
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