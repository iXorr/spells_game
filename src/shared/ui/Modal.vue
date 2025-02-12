<script setup>
  import Button from './Button.vue'
</script>

<template>
  <div class="modal">
    <div class="exit">
      <RouterLink to="/">
        <Button>
          <span>EXIT</span>
        </Button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .modal {
    position: absolute;

    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
  }
</style>