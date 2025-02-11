<template>
  <nav>
    <RouterLink to="/menu">Go to MENU</RouterLink>
    <RouterLink to="/game">Go to GAME</RouterLink>
  </nav>

  <main>
    <!-- <Transition name="fading" mode="out-in"> -->
      <RouterView />
    <!-- </Transition> -->
  </main>
</template>

<style>
  main {
    background: lightblue;
  }

  .fading-enter-active,
  .fading-leave-active {
    transition: opacity 1s ease;
  }

  .fading-enter-from,
  .fading-leave-to {
    opacity: 1;
  }

  nav {
    z-index: 1;
    position: absolute;
    padding: 1rem;
    background: thistle;
  }

  nav > *:first-child {
    margin-right: 1rem;
  }
</style>