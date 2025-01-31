<script setup>
  import { Button } from '@shared/ui'
  import { TrophyIcon, PlayerIcon } from '@shared/icons'
</script>

<template>
  <div class="menu">
    <div class="menu__btns-wrapper">
      <Button>
        <span>TOP</span>
        <TrophyIcon />
      </Button>

      <Button>
        <span>PLAY</span>
        <PlayerIcon />
      </Button>
    </div>
  </div>
</template>

<style scoped>
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
    padding: 1rem;
    border-radius: 0.75rem;
    box-shadow: 0 0 0.25rem black;
  }
</style>