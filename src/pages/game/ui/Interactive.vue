<script setup>
  import { PauseIcon, ResumeIcon, ExitIcon } from '@shared/icons'
  import { isPaused, togglePause } from '@entities/gameScore'

  import Warn from './Warn.vue'

  import { ref } from 'vue'
  const isWarnShowed = ref(false)
</script>

<template>
  <div class="btns">
    <button @pointerdown="isWarnShowed = true">
      <ExitIcon />
    </button>

    <Transition name="fading">
      <Warn v-if="isWarnShowed" />
    </Transition>

    <button @pointerdown="togglePause">
      <PauseIcon v-if="!isPaused" />
      <ResumeIcon v-else />
    </button>
  </div>
</template>

<style scoped>
  .btns {
    position: absolute;
    z-index: 1;
  }

  button {
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