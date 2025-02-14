<script setup>
  import { ExitIcon } from '@shared/icons'
  import { isWarnVisible } from '@entities/gameStates'
  import Warn from './Warn.vue'

  import { bindListeners, displayWarn } from '../model/keysHandler'

  bindListeners()
</script>

<template>
  <div class="local-root screen">
    <button @pointerdown="displayWarn">
      <ExitIcon />
    </button>

    <Transition name="fading">
      <Warn v-if="isWarnVisible" />
    </Transition>
  </div>
</template>

<style scoped>
  .local-root {
    position: absolute;
    z-index: 1;
  }

  button {
    position: inherit;
    top: 0;
    left: 0;
    
    border: none;
    background: transparent;
    border-radius: 100%;
  }

  svg {
    transition: var(--fast-transition);
  }

  button:active > svg {
    scale: 1.15;
  }
</style>