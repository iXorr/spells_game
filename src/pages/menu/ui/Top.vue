<script setup>
  import { MenuModal } from '@shared/ui'
  import { currentRatings } from '../store/currentRatings'
  import { updatingRatings } from '../model/updatingRatings'

  updatingRatings()
</script>

<template>
  <div class="local-root">
    <MenuModal title="Рейтинги">
      <table v-if="currentRatings.length > 0">
        <tr>
          <th>Счёт</th>
          <th>Сложность</th>
          <th>Ник</th>
        </tr>

        <tr v-for="rating in currentRatings">
          <td v-for="column in rating">{{ column }}</td>
        </tr>
      </table>


      <p class="no-rating" v-else>Рейтинга нет</p>
    </MenuModal>
  </div>
</template>

<style scoped>
  table, td, th {
    border-collapse: collapse;
    border: 1px solid black;
    padding: .25rem;

    font-size: .9rem;
  }

  table {
    width: 100%;
  }

  tr:nth-child(1n) {
    background: lightgray;
  }

  tr:nth-child(2n) {
    background: white;
  }

  pre, p {
    font-size: 1rem;
  }

  .no-rating {
    margin: 1rem 0;
  }

  @media (max-width: 640px) {
    table * {
      font-size: .75rem;
    }
  }
</style>