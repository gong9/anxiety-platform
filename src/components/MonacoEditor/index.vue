<script setup lang='ts'>
import { defineProps, onMounted, ref } from 'vue'
import * as monaco from 'monaco-editor'
const props = defineProps({
  language: {
    type: String,
    default: 'javascript',
  },
  value: {
    type: String,
    default: () => '',
  },
})
const monacoNodeRef = ref<HTMLElement>()
const monacoInstance = ref<monaco.editor.IStandaloneCodeEditor | null>(null)

/**
 * create Monaco
 */
const createMonaco = () => {
  return monaco.editor.create(
    (monacoNodeRef.value as unknown as HTMLElement), {
      language: props.language,
      theme: 'vs',
      minimap: {
        enabled: false,
      },
      value: props.value,
      lineNumbers: 'off',
    },
  )
}

/**
 * create model
 */
const createModel = () => {
  return monaco.editor.createModel(props.value, props.language)
}

onMounted(() => {
  monacoInstance.value = createMonaco()
  monacoInstance.value.setModel(createModel())
})
</script>

<template>
  <div ref="monacoNodeRef" class="editor" />
</template>

<style scoped src="./index.scss">
</style>
