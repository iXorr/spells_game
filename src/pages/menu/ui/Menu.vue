<script setup>
  import { Button } from '@shared/ui'
  import { TrophyIcon, PlayerIcon } from '@shared/icons'
</script>

<template>
  <div class="local-root screen">
    <h1>Заголовок игры</h1>

    <div class="menu">
      <div class="menu__btns-wrapper">
        <RouterLink to="/menu/top">
          <Button @click="console.log('top is clicked!')">
            <span>TOP</span>
            <TrophyIcon />
          </Button>
        </RouterLink>

        <!-- дропдаун - наводишься или нажимаешь на кнопку,
        сразу выбираешь сложность -->
        <RouterLink to="/game">
          <Button @click="console.log('play is clicked!')">
            <span>PLAY</span>
            <PlayerIcon />
          </Button>
        </RouterLink>
      </div>
    </div>

    <!-- ПЕРЕХОД НУЖНО ДЕЛАТЬ ПО-ДРУГОМУ! БЫЛ WARNING -->
    <!-- <Transition name="fading" mode="out-in"> -->
      <RouterView />
    <!-- </Transition> -->
  </div>
</template>

<style scoped>
  .local-root {
    background: lightslategray;
  }

  .menu {
    position: absolute;
    translate: -50% -10%;
    bottom: 10%;
    left: 50%;

    display: flex;
    justify-content: center;
  }

  .menu__btns-wrapper {    
    display: flex;
    backdrop-filter: blur(0.5rem);
    
    margin: .25rem;
    padding: 1rem;
    border-radius: 0.75rem;
    box-shadow: 0 0 0.25rem black;
  }
</style>