<script setup>
  import { ref } from 'vue'
  import { FallingBlock } from '@entities/fallingBlock'

  const blocksAmount = ref(10)
  // const msg = ref('Level 0')

  // setInterval(() => {
  //   blocksAmount.value += 5
  //   msg.value = `Level ${blocksAmount.value/5}`
  // }, 7500);
</script>

<template>
  <div class="local-root screen">
    <!-- <div class="info">{{ msg }}</div> -->
    <!-- <div class="info">
      <p>Кол-во: {{ blocksAmount }}</p>

      <div class="btns">
        <button 
          @click="blocksAmount++" 
          :disabled="blocksAmount >= 20 ? true : false">+</button>

        <button
          @click="blocksAmount--"
          :disabled="blocksAmount <= 1 ? true : false">-</button>
      </div>
    </div> -->

    <FallingBlock v-for="i in blocksAmount" />
  </div>
</template>

<style scoped>
  .info {
    right: 1rem;
    bottom: 1rem; 
    position: absolute;
    z-index: 3;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem 2rem;
    border-radius: 1rem;
    background: lightgray;
  }

  .info p {
    margin-bottom: 0.35rem;
    font-size: 0.75rem;
  }

  button {
    top: 1rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    cursor: pointer;
  }

  button:first-of-type {
    margin-right: 0.25rem;
  }

  /* .example:nth-of-type(1) {
    top: 5rem;
    left: 3rem;
  }

  .example:nth-of-type(2) {
    top: -5rem;
    left: 6rem;
  }

  .example:nth-of-type(3) {
    top: 1rem;
    left: 9rem;
  }

  .example:nth-of-type(4) {
    top: 3rem;
    left: 12rem;
  }

  .example:nth-of-type(5) {
    top: -1rem;
    left: 15rem;
  } */

  .local-root {
    background: rgb(0, 109, 109);
    /* background-image: url("@shared/assets/img/playground.gif");
    background-size: cover;
    background-position: center; */

    cursor: grab;
  }
  
  /* @media (pointer: fine) {
    .local-root, 
    .local-root * {
      cursor: url('@shared/assets/cursors/wand.cur'), auto;
    }
  } */
</style>