<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
  .button:disabled {
    color: #000;
    box-shadow: none;
    translate: 0 .25rem;
  }

  .button {
    cursor: auto;

    display: flex;
    align-items: center;
    font-weight: 600;

    background: var(--light-color);
    
    font-size: var(--paragraph-font-size);
    
    border-radius: var(--normal-indent);
    border: var(--border-thickness) solid var(--accent-color);

    box-shadow: 0 var(--tiny-indent) 0 var(--accent-color);
    padding: var(--small-indent);

    transition: var(--fast-transition);
  }

  .button:active:not(:disabled) {
    transform: translateY(var(--tiny-indent));
    box-shadow: none;
  }
</style>