<script setup>
  import { warnMsg, warnInfo } from '../store/userData';
</script>

<template>
  <Transition name="fading">
    <div class="message" v-if="warnMsg != null">
      <p>{{ warnMsg }}</p>

      <TransitionGroup name="list" tag="ul">
        <li v-for="(warnState, index) in warnInfo" :key="index">{{ warnState }}</li>
      </TransitionGroup>
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

  .message {
    z-index: 1;
    top: 15rem;
    left: 50%;
    translate: -50% 0;
    position: absolute;
    background: thistle;
    border-radius: 1rem;
    padding: 1rem;
  }
</style>