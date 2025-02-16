<script setup>
  import { ExitIcon } from '@shared/icons'
  import { isWarnVisible } from '@entities/gameStates'
  import { bindListeners, displayWarn } from '../model/keysHandler'
  
  bindListeners()
</script>

<template>
  <div class="screen">
    <button @pointerdown="displayWarn">
      <ExitIcon />
    </button>

    <Transition name="fading">
      <div class="screen blackout" v-if="isWarnVisible">
        <div class="question">
          <h1>Вы уверены, что хотите выйти? Прогресс не сохранится</h1>
          
          <RouterLink to="/">
            <button>ДА</button>
          </RouterLink>

          <button @pointerdown="displayWarn">CLOSE</button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
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