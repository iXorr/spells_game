<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
  .button {
    display: flex;
    align-items: center;

    background: var(--light-color);

    font-weight: 600;
    font-size: var(--paragraph-font-size);
    
    border-radius: var(--normal-indent);
    border: var(--border-thickness) solid var(--accent-color);

    box-shadow: 0 var(--tiny-indent) 0 var(--accent-color);
    padding: var(--small-indent);

    transition: var(--fast-transition);
  }

  .button:active {
    transform: translateY(var(--tiny-indent));
    box-shadow: none;
  }
</style>