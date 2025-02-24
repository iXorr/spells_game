<script setup>
  import { warnMsg, warnInfo } from '../store/userData'
</script>

<template>
  <Transition name="fading">
    <div class="message" v-if="warnMsg != null">
      <p>{{ warnMsg }}</p>

      <template v-if="warnInfo">
        <TransitionGroup name="list" tag="ul">
          <li v-for="(warnState, index) in warnInfo" :key="index">{{ warnState }}</li>
        </TransitionGroup>
      </template>

      <button 
        @pointerdown="() => { warnMsg = null; warnInfo = null }"
        class="hide-btn">
        &#x2715;
      </button>
    </div>
  </Transition>
</template>

<style scoped>
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(1rem);
  }
  
  .hide-btn {
    background: white;

    position: absolute;
    right: 1rem;
    top: 50%;
    translate: 0 -50%;

    font-size: 1rem;
    border: 1px solid black;

    border-radius: .5rem;

    width: 1.75rem;
    height: 1.75rem;

    text-align: center;

    transition: var(--fast-transition);
  }

  .hide-btn:active {
    scale: 1.25;
  }

  .message {
    box-shadow: 0 0 .25rem black;

    z-index: 1;
    position: absolute;
    bottom: 5rem;
    left: 50%;
    translate: -50% 0;
    
    background: darkgray;
    border-radius: 1rem;
    padding: 1rem 3.5rem 1rem 1rem;

    width: 15rem;

    text-align: start;
  }

  .message p {
    font-size: .8rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .message li {
    font-size: .8rem;
    list-style-position: inside;
  }

  .message li:first-child {
    margin-top: .5rem;
  }

  @media (max-width: 560px) {
    .message {
      width: 60%;
    }
  }
</style>