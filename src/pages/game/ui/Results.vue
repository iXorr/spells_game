<script setup>
  import { useRouter } from 'vue-router'
  import { resetAll } from '@entities/gameStates'

  const router = useRouter()

  function resetAndReturn() {
    resetAll()
    router.push('/')
  }
</script>

<template>
  <div class="local-root">
    <h1>RESULTS</h1>

    <button @pointerdown="resetAndReturn">Отправить результаты</button>
    <button @pointerdown="resetAndReturn">GO back</button>
  </div>
</template>

<style scoped>
  * {
    font-size: 1rem;
  }
</style>