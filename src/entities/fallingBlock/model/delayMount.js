import { ref, onMounted } from 'vue';

export function useDelayMount(delay) {
  const isMounted = ref(false);

  onMounted(() => {
    setTimeout(() => {
      isMounted.value = true;
    }, delay);
  });

  return { isMounted };
}