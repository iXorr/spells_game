<script setup>
  import { USER_NAME } from '@shared/config'
  import { Title, Button, FadingRouterView } from '@shared/ui'
  import { TrophyIcon, PlayerIcon } from '@shared/icons'
  import { PulseClick, animateClick } from '@entities/pulseClick'
  import { logout } from '../model/logout'
</script>

<template>
  <div 
    class="local-root screen" 
    @pointerdown="animateClick">

    <PulseClick />

    <Title />

    <div class="greeting window">
      <p>Здравствуй, {{ USER_NAME }}</p>
      <Button @pointerdown="logout">Выйти</Button>
    </div>

    <div class="menu">
      <div class="menu__btns-wrapper window">
        <RouterLink to="/menu/top">
          <Button>
            <span>ТОП</span>
            <TrophyIcon />
          </Button>
        </RouterLink>

        <RouterLink to="/menu/settings">
          <Button>
            <span>ИГРА</span>
            <PlayerIcon />
          </Button>
        </RouterLink>
      </div>
    </div>

    <FadingRouterView />
  </div>
</template>

<style scoped>
  .greeting {
    display: flex;
    flex-direction: column;

    padding: 1rem;

    font-size: .9rem;

    color: white;
    font-weight: 600;

    top: 1rem;
    right: 1rem;
    position: absolute;
  }

  .greeting > *:first-child {
    margin-bottom: .5rem;
  }

  .greeting button {
    width: fit-content;
    font-size: .9rem;
    padding: .35rem .5rem;
  }

  .local-root {
    position: absolute;
  }

  .menu {
    position: absolute;
    translate: -50% -10%;
    bottom: 1rem;
    left: 50%;

    display: flex;
    justify-content: center;
  }

  .menu__btns-wrapper {        
    margin: .25rem;
    padding: 1rem;
  }

  .menu__btns-wrapper > *:first-child {
    margin-right: 1rem;
  }

  .menu__btns-wrapper svg {
    margin-left: .5rem;
  }
</style>