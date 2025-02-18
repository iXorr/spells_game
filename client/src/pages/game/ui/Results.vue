<script setup>
  import { useRouter } from 'vue-router'
  import { resetAll } from '@entities/gameStates'
  import { sendResults } from '../api/sendResults'  

  const router = useRouter()

  function resetAndReturn() {
    resetAll()

    router.push('/')
  }

  function sendAndReturn() {
    sendResults()
    resetAndReturn()
  }
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