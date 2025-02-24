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

  const props = defineProps(['title'])
</script>

<template>
  <div class="screen blackout">
    <div class="local-root">
      <div class="block">
        <div class="upper">
          <RouterLink to="/">
            <Button>
              <CrossIcon />
            </Button>
          </RouterLink>

          <h1>{{ props.title }}</h1>
        </div>

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .button {
    padding: .35rem;
    border-radius: 100%;
  }

  h1 {
    margin-bottom: .5rem;
    font-size: 1.5rem;
  }

  .upper a {
    position: absolute;
    left: 1rem;
  }

  .upper {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .upper h1 {
    margin: 0;
  }

  .block {
    max-height: 85dvh;
    overflow-y: auto;
    scrollbar-color: rgb(100, 100, 100) rgb(125, 125, 125);
    scrollbar-width: thin;

    display: flex;
    flex-direction: column;
    padding: 1rem;

    background: darkgray;

    border-radius: 1rem;
    box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.5);

    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }

  @media (min-width: 1920px) {
    .block {
      width: 35rem;
    }
  }

  @media (max-width: 1920px) {
    .block {
      width: 30rem;
    }
  }

  @media (max-width: 820px) {
    .block {
      width: 80%;
    }
  }
</style>