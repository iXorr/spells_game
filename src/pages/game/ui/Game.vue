<script setup>
  import { FadingRouterView } from '@shared/ui'
  import { FallingBlock } from '@entities/fallingBlock'
  import { isGameActive, isPaused } from '@entities/gameStates'
  import { watchingLose } from '../model/watchingLose'
  import { defineDifficulty } from '../model/defineDifficulty'

  import { collectedDiamonds, collectedBarrels, skippedDiamonds } from "@entities/gameStates"

  watchingLose()
</script>

<template>
  <div class="local-root screen">
    <Transition name="fading">
      <div
        v-if="isGameActive"
        :class="isPaused ? 'game--paused' : null">

        <p class="info">
          <table>
            <tr>
              <td>Счёт</td>
              <td>{{ collectedDiamonds }}</td>
            </tr>

            <tr>
              <td>Собрано бочек</td>
              <td>{{ collectedBarrels }} из <span style="color: red">3</span></td>
            </tr>

            <tr>
              <td>Пропущено алмазов</td>
              <td>{{ skippedDiamonds }} из <span style="color: red">3</span></td>
            </tr>
          </table>
        </p>

        <FallingBlock
          v-for="i in defineDifficulty()"
          :key="i" />
      </div>
    </Transition>

    <FadingRouterView />
  </div>
</template>

<style scoped>
  .info {
    position: absolute;
    background: darkgray;
    padding: .5rem 1rem;
    border-radius: .5rem;
    z-index: 0;
    bottom: 1rem;
    left: 50%;
    translate: -50% 0;
    white-space: nowrap;
  }

  table, tr, td {
    border: 1px solid black;
    border-collapse: collapse;
  }

  tr:nth-child(1) {
    background-color: white;
  }

  tr:nth-child(2),
  tr:nth-child(3) {
    background-color: lightgray;
  }

  td {
    font-size: .85rem;
    padding: .25rem .5rem;
  }

  .local-root {
    position: relative;
    overflow: hidden;

    background: url('@shared/assets/img/cave.gif') no-repeat center center;
    background-size: cover;

    cursor: grab;
  }

  .game--paused > * {
    pointer-events: none;
    animation-play-state: paused;
  }
</style>