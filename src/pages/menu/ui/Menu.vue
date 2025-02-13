<script setup>
  import { Button, FadingRouterView } from '@shared/ui'
  import { TrophyIcon, PlayerIcon } from '@shared/icons'
</script>

<template>
  <div class="local-root screen">
    <div class="menu">
      <div class="menu__btns-wrapper">
        <RouterLink to="/menu/top">
          <Button>
            <span>TOP</span>
            <TrophyIcon />
          </Button>
        </RouterLink>

        <RouterLink to="/menu/settings">
          <Button>
            <span>PLAY</span>
            <PlayerIcon />
          </Button>
        </RouterLink>
      </div>
    </div>

    <FadingRouterView />
  </div>
</template>

<style scoped>
  .local-root {
    position: absolute;
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

  .menu__btns-wrapper > *:first-child {
    margin-right: 1rem;
  }

  .menu__btns-wrapper svg {
    margin-left: .5rem;
  }
</style>