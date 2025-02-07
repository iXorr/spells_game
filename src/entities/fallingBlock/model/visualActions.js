import { ref } from 'vue'

export function useActions() {
  const isCompleted = ref(false)
  const isLooted = ref('')

  function destroyBlock() {
    isLooted.value = 'falling-block--looted'
    
    setTimeout(() => {
      isCompleted.value = true
    }, 500);
  }

  return { 
    isCompleted, 
    isLooted, 
    destroyBlock
  }
}