<script setup>
  import { PauseIcon, ResumeIcon, ExitIcon } from '@shared/icons'
  import { isPaused, togglePause, isWarnVisible } from '@entities/gameStates'
  import Warn from './Warn.vue'

  import { bindListeners, displayWarn } from '../model/keysHandler'

  bindListeners()
</script>

<template>
  <div class="btns">
    <button @pointerdown="displayWarn">
      <ExitIcon />
    </button>

    <button @pointerdown="togglePause">
      <PauseIcon v-if="!isPaused" />
      <ResumeIcon v-else />
    </button>

    <Transition name="fading">
      <Warn v-if="isWarnVisible" />
    </Transition>
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