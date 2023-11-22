<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

monaco.languages.register({ id: 'SQL' })
const editor = ref()

const emits = defineEmits(["update"])

const props = defineProps({
  table: {
    type: String, 
    required: false
  }
})

let editorMonaco: monaco.editor.IStandaloneCodeEditor
onMounted(() => {
  editorMonaco = monaco.editor.create(editor.value, {
    value: `SELECT * FROM ${props.table ? props.table : "TABLE"}
    
    
    
    
    
    
    `,
    language: 'sql',
    theme: 'vs-dark',
    automaticLayout: true,
    minimap: {
      enabled: false
    }
  })
})

const submitQuery = () => {
  console.log(editorMonaco.getValue())
  emits("update")
}

watch(
  () => props.table,
  (newValue) => {
    editorMonaco.setValue(`SELECT * FROM ${newValue?.toUpperCase()}
    
    
    
    
    
    
    `)
  }
)

</script>

<template>
  <div id="editor" ref="editor" class="h-60"></div>
  <button
    class="border py-3 bg-green rounded-md w-60 text-white mt-5"
    @click="submitQuery"
  >
    Estimate Cost
  </button>
</template>

<style></style>
