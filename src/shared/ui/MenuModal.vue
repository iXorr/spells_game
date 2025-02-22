<script setup>
  import { onMounted, onBeforeUnmount } from 'vue'
  import { useRouter } from 'vue-router'

  import Button from './Button.vue'
  import CrossIcon from '../icons/CrossIcon.vue'

  const router = useRouter()
  
  const escapeFromModal = (event) => {
    if (event.key === 'Escape') {
      router.push('/menu')
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', escapeFromModal)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', escapeFromModal)
  })
</script>

<template>
  <div class="screen blackout">
    <div class="local-root">
      <div class="block">
        <RouterLink to="/">
          <Button>
            <CrossIcon />
          </Button>
        </RouterLink>

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .button {
    position: absolute;
    top: 1rem;
    left: 1rem;

    padding: .35rem;
    border-radius: 100%;
  }

  .block {
    background: gray;
    border-radius: 1rem;
    box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.5);

    position: absolute;
    top: 50%;
    left: 50%;

    translate: -50% -50%;
  }

  @media (min-width: 1920px) {
    .block {
      width: 45dvw;
      height: 45dvh;
    }
  }

  @media (max-width: 1920px) {
    .block {
      width: 50dvw;
      height: 50dvh;
    }
  }

  @media (max-width: 1440px) {
    .block {
      width: 25rem;
      height: 15rem;
    }
  }

  @media (max-width: 720px) {
    .block {
      width: 15rem;
      height: 20rem;
    }
  }
</style>