<script setup lang='ts'>
import { onMounted, ref, watchPostEffect } from 'vue'
import injectionJs2Css from '../../utils/injectionJs2Css'
const props = defineProps({
  sidebarBackgroundColor: {
    type: String,
    required: true,
  },
})

const sidebarRef = ref<HTMLDivElement | null>(null)

watchPostEffect(() => {
  injectionJs2Css(
    (sidebarRef.value as HTMLDivElement),
    {
      backgroundColor: props.sidebarBackgroundColor,
    },
  )
})
</script>

<template>
  <div ref="sidebarRef" class="sidebar">
    sidebar
  </div>
</template>

<style scoped lang='scss'>
@import './index.scss';
</style>
