import { ref } from 'vue'

export function useActions() {
  const isCompleted = ref(false)
  const isHidden = ref('')

  function destroy() {
    isCompleted.value = true
  }

  function hide() {
    isHidden.value = 'falling-block--looted'
    
    setTimeout(() => {
      destroy()
    }, 500);
  }

  return { 
    isCompleted, 
    isHidden, 
    destroy, 
    hide
  }
}