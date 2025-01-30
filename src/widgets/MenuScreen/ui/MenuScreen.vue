<script setup>
  import Button from '@shared/Button'
  import TrophyIcon from '@shared/Icons/TrophyIcon'
  import PlayerIcon from '@shared/Icons/PlayerIcon'
</script>

<template>
  <div class="menu">
    <div class="menu__btns-wrapper">
      <Button>
        <span>ТОП</span>
        <TrophyIcon />
      </Button>

      <Button>
        <span>ИГРА</span>
        <PlayerIcon />
      </Button>
    </div>
  </div>
</template>

<style scoped>
  .menu {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
  }

  .menu__btns-wrapper {
    display: flex;
    backdrop-filter: blur(0.5rem);
    padding: 1rem;
    border-radius: 0.75rem;
    box-shadow: 0 0 0.25rem black;
  }
</style>