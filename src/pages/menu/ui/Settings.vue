<script setup>
  import { MenuModal, Button } from '@shared/ui'
  import { chosenDifficulty, chosenDiamondIcon } from '@entities/gameStates'
</script>

<template>
  <div class="local-root">
    <MenuModal title="Настройки">
      <form @submit.prevent>
        <div class="inputs">
          <div class="form__element">
            <label for="difficulty">Сложность: </label>

            <select id="difficulty" v-model="chosenDifficulty">
              <option value="easy">Легко</option>
              <option value="normal">Нормально</option>
              <option value="hard">Сложно</option>
              <option value="impossible">Пипяу</option>
            </select>
          </div>

          <div class="form__element">
            <label for="diamond_icon">Иконка алмаза: </label>
            
            <select id="diamond_icon" v-model="chosenDiamondIcon">
              <option value="default">Обычная</option>
              <option value="secret">Секретная</option>
            </select>
          </div>
        </div>

        <div class="form__element">
          <RouterLink to="/game">
            <Button type="submit">НАЧАТЬ</Button>
          </RouterLink>
        </div>
      </form>
    </MenuModal>
  </div>
</template>

<style scoped>
  form {
    display: flex;
    justify-content: center;
  }

  .inputs {
    margin-right: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .form__element {
    margin: .25rem 0;
  }

  form * {
    font-size: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  @media (max-width: 720px) {
    form {
      flex-direction: column;
      align-items: center;
    }

    .inputs {
      margin-right: 0;
    }
  }
</style>