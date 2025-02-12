<script setup>
  import Button from './Button.vue'
</script>

<template>
  <div class="modal">
    <div class="exit">
      <RouterLink to="/">
        <Button>
          <span>X</span>
        </Button>
      </RouterLink>

      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .modal {
    position: absolute;
    width: 100dvw;
    height: 100dvh;
    background: rgba(0, 0, 0, 0.35);
  }
</style>