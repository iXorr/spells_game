<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fading" mode="out-in">
      <Component :is="Component" />
    </Transition>
  </RouterView>
</template>