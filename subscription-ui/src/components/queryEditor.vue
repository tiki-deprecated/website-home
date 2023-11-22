<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

monaco.languages.register({ id: 'SQL' })
const editor = ref()

let editorMonaco: any
onMounted(() => {
  editorMonaco = monaco.editor.create(editor.value, {
    value: 'SELECT * FROM TABLE',
    language: 'sql',
    theme: 'vs-dark',
    minimap: {
      enabled: false
    }
  })
})
const submitQuery = () => {
  console.log(editorMonaco.getValue())
}
</script>

<template>
  <div id="editor" ref="editor" class="h-2/4"></div>
  <button
    class="border py-3 bg-green rounded-md w-60 text-white"
    @click="submitQuery"
  >
    Estimate Cost
  </button>
</template>

<style></style>
