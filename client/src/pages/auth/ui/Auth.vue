<script setup>
  import { ref } from 'vue'
  import RegisterForm from './RegisterForm.vue'

  const isRegister = ref(false)
</script>

<template>
  <div>
    <RegisterForm />
  </div>
</template>