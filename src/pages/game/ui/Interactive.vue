<script setup>
  import { ExitIcon } from '@shared/icons'
  import { Button } from "@shared/ui"
  import { isWarnVisible } from '@entities/gameStates'
  import { bindListeners, displayWarn } from '../model/keysHandler'
  
  bindListeners()
</script>

<template>
  <div class="screen">
    <Transition name="fading">
      <button
          v-if="!isWarnVisible"
          @pointerdown="displayWarn"
          class="exit-btn">
        <ExitIcon />
      </button>
    </Transition>

    <Transition name="fading">
      <div class="screen blackout warn" v-if="isWarnVisible">
        <div class="question">
          <span>Вы уверены, что хотите выйти?</span>
          <span>Прогресс не сохранится</span>

          <div class="warn__btns">
            <RouterLink to="/" class="warn__btn">
              <Button>ДА</Button>
            </RouterLink>

            <Button @pointerdown="displayWarn" class="warn__btn">ЗАКРЫТЬ</Button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
  button {
    border: none;
    background: transparent;
  }

  .exit-btn {
    z-index: 1;
    position: absolute;
    top: .5rem;
    left: .5rem;

    border-radius: 100%;
  }

  .warn {
    z-index: 2;
  }

  .question {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    margin: 2rem auto;

    max-width: 80%;

    background: darkgray;
    border-radius: 1rem;
  }

  .question span {
    font-size: 1.25rem;
    display: block;

    padding: .25rem 1rem;
  }

  .question span:first-of-type {
    margin-top: 1rem;
  }

  .question span:last-of-type {
    margin-bottom: .5rem;
  }

  .warn__btns {
    margin: 0 auto;
    padding-bottom: 1rem;
    display: flex;
  }

  .warn__btns > *:first-child {
    margin-right: 1rem;
  }
</style>