<script setup>
  import Warn from './Warn.vue'
  import Form from './Form.vue'
</script>

<template>
  <div class="local-root">
    <Warn />

    <Form :isLoginForm="false" />
  </div>
</template>
