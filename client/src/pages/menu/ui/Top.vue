<script setup>
  import { MenuModal } from '@shared/ui'
  import { currentRatings } from '../api/getRatings';
  import { updateRatings } from '../model/updateRatings'

  updateRatings()
</script>

<template>
  <div class="local-root">
    <MenuModal>
      <h1>TOP</h1>
      <!-- хреново работает проверка на currentRatings -->
      <pre v-if="currentRatings">{{ currentRatings }}</pre>
      <pre v-else>Рейтинга нет</pre>
    </MenuModal>
  </div>
</template>