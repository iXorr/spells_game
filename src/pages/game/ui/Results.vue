<script setup>
  import { Button } from "@shared/ui"
  import { collectedDiamonds, collectedBarrels, skippedDiamonds } from "@entities/gameStates/index.js";
  import { useResultsLogic } from '../model/resultsLogic'
  const { resetAndReturn, sendAndReturn } = useResultsLogic()
</script>

<template>
  <div class="results">
    <h1>Результаты</h1>

    <table>
      <tr>
        <td>Игровой счёт</td>
        <td>{{ collectedDiamonds }}</td>
      </tr>

      <tr>
        <td>Собрано бочек</td>
        <td>{{ collectedBarrels }}</td>
      </tr>

      <tr>
        <td>Пропущено алмазов</td>
        <td>{{ skippedDiamonds }}</td>
      </tr>
    </table>

    <div class="btns">
      <Button @pointerdown="sendAndReturn">Отправить</Button>
      <Button @pointerdown="resetAndReturn">Назад</Button>
    </div>
  </div>
</template>

<style scoped>
  .results {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;

    background: darkgray;
    border-radius: 1rem;

    padding: 1rem;
  }

  table {
    width: 100%;
  }

  table, tr, td {
    border: 1px solid #000;
    border-collapse: collapse;
  }

  td {
    padding: .5rem;
  }

  tr:nth-child(1) {
    background: white;
  }

  tr:nth-child(2),
  tr:nth-child(3) {
    background: lightgray;
  }

  .results > * {
    margin-bottom: 1rem;
  }

  .results > *:last-child {
    margin: 0;
  }

  h1 {
    font-size: 1.25rem;
  }

  .btns {
    display: flex;
    justify-content: center;
  }

  .btns > *:first-child {
    margin-right: 1rem;
  }
</style>