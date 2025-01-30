<script setup>
  import Title from '@shared/Title';
  import MenuScreen from '@pages/MenuScreen'
  import { ref } from 'vue';
  
  function animateClick(event) {
    magic_cursor.value.style.top = event.clientY + 'px'
    magic_cursor.value.style.left = event.clientX + 'px'
    magic_cursor.value.classList.add('magic-cursor--active')
  }

  // сделать пульсацию как компонент и вызывать его при клике (анимация по секунде)

  const magic_cursor = ref(null)
</script>

<template>
  <div class="root" @click="(event) => animateClick(event)">

    <div class="magic-cursor" ref="magic_cursor"></div>

    <!-- <Title></Title> -->
    <MenuScreen />
  </div>
</template>

<style scoped>

.magic-cursor {
  position: absolute;
  top: 5rem;
  left: 15rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.2);
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;

  opacity: 0;
  pointer-events: none;
}

.magic-cursor--active {
  animation: ripple 1s ease-out 1;
}

@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  50% {
    transform: scale(2);
    opacity: 0.3;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

  /* .root {
    width: 100dvw;
    height: 100dvh;
  } */
</style>