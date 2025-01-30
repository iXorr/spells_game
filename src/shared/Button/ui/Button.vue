<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
  .button {
    display: flex;
    align-items: center;

    background: #eee;
    font-size: 1rem;
    font-weight: 600;
    
    border-radius: 0.75rem;
    border: 0.1rem solid #3A2011;
    box-shadow: 0 0.25rem 0 #3A2011;
    transition: .1s ease-in-out;

    padding: 0.5rem;
  }

  .button:active {
    transform: translateY(0.25rem);
    box-shadow: none;
  }

  .button:first-child {
    margin-right: 1rem;
  }

  .button > *:first-child {
    margin-right: 0.35rem;
  }
</style>