<script setup>
  import { displayWarn } from '../model/keysHandler';
</script>

<template>
  
  <div class="screen blackout">
    <div class="question">
      <h1>Вы уверены, что хотите выйти? Прогресс не сохранится</h1>
      
      <RouterLink to="/">
        <button>ДА</button>
      </RouterLink>

      <button @pointerdown="displayWarn">CLOSE</button>
    </div>
  </div>
</template>

<style scoped>
  button {
    font-size: 1rem;
  }
</style>