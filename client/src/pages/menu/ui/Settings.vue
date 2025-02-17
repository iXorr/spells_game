<script setup>
  import { MenuModal } from '@shared/ui'
  import { chosenDifficulty, chosenDiamondIcon } from '@entities/gameStates'
</script>

<template>
  <div class="local-root">
    <MenuModal>
      <form @submit.prevent>
        <h1>ИГРА</h1>
        <div class="form__element">
          <label for="difficulty">Сложность: </label>

          <select id="difficulty" v-model="chosenDifficulty">
            <option value="easy">Easy</option>
            <option value="normal">Normal</option>
            <option value="hard">Hard</option>
            <option value="impossible">Impossible</option>
          </select>
        </div>

        <div class="form__element">
          <label for="diamond_icon">Иконка алмаза: </label>
          
          <select id="diamond_icon" v-model="chosenDiamondIcon">
            <option value="default">Default</option>
            <option value="secret">Secret</option>
          </select>
        </div>

        <RouterLink to="/game">
          <input type="submit" value="ИГРАТЬ">
        </RouterLink>
      </form>
    </MenuModal>
  </div>
</template>

<style scoped>
  form {
    position: absolute;
    top: 1rem;
    left: 50%;
    translate: -50% 0;
  }

  form * {
    font-size: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }
</style>