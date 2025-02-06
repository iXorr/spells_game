<script setup>
  import { ref, onUnmounted } from 'vue'
  import { SpawnedBlock } from '@features/spawn-block'

  const blocksAmount = ref(0)

  const addBlock = () => {
    blocksAmount.value++
  }

  const intervalId = setInterval(addBlock, 1500)

  onUnmounted(() => {
    clearInterval(intervalId)
  })
</script>

<template>
  <!-- внутри должны быть пропсы, которые передадут сложность игры, а она будет влиять на спавн сущностей -->

  <div>
    <SpawnedBlock 
      v-for="i in blocksAmount" 
      :key="i" />
  </div>
</template>

<!-- <script setup>
  import { ref } from 'vue'
  import { SpawnedBlock } from '@features/spawn-block'

  const blocksAmount = ref(10)
</script>

<template>
  <SpawnedBlock 
    v-for="i in blocksAmount" />
</template> -->