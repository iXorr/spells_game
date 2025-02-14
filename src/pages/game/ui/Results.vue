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
  <h1>RESULTS</h1>

  <button>Отправить результаты</button>
  <button @pointerdown="resetAndReturn">GO back</button>
</template>

<style scoped>
  * {
    font-size: 1rem;
  }
</style>