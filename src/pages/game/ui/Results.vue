<script setup>
  import { useResultsLogic } from '../model/resultsLogic'
  const { resetAndReturn, sendAndReturn } = useResultsLogic()
</script>

<template>
  <div class="local-root">
    <h1>RESULTS</h1>

    <button @pointerdown="sendAndReturn">Отправить результаты</button>
    <button @pointerdown="resetAndReturn">GO back</button>
  </div>
</template>

<style scoped>
  * {
    font-size: 1rem;
  }
</style>