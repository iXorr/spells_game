<script setup>
  import { FadingRouterView } from '@shared/ui'
  import { clearingData } from '../router/clearingData'

  clearingData()
</script>

<template>
  <div>
    <div class="btns">
      <RouterLink to="/auth/login">
        <button>Вход в систему</button>
      </RouterLink>

      
      <RouterLink to="/auth/register">
        <button>Регистрация</button>
      </RouterLink>
    </div>

    <FadingRouterView />
  </div>
</template>

<style scoped>
  .btns {
    position: absolute;
    top: 5rem;
    display: flex;
    flex-direction: column;
  }

  button {
    font-size: .75rem;
    padding: .25rem;
    margin: .25rem;
  }
</style>