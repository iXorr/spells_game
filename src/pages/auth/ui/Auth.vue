<script setup>
  import { FadingRouterView, Button } from '@shared/ui'
  import { clearingData } from '../router/clearingData'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  clearingData()
</script>

<template>
  <div>
    <div class="btns window">
      <RouterLink to="/auth/login">
        <Button :disabled="route.fullPath.includes('login') ? true : false">Вход</Button>
      </RouterLink>
      
      <RouterLink to="/auth/register">
        <Button :disabled="!route.fullPath.includes('login') ? true : false">Регистрация</Button>
      </RouterLink>
    </div>

    <FadingRouterView />
  </div>
</template>

<style scoped>
  .btns {
    padding: 1rem;

    position: absolute;
    top: 1.5rem;
    left: 50%;
    translate: -50% 0;
    display: flex;
  }

  .btns > *:first-child {
    margin-right: .5rem;
  }
</style>