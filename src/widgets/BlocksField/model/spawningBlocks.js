import { ref } from 'vue'

export const blocks = ref([])

setInterval(() => {
  blocks.value.push({ id: Date.now() })
}, 500)