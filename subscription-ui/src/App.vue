<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

monaco.languages.register({ id: 'SQL' })
const editor = ref()


const selectedTable = ref<string>()

onMounted(() => {
  const editorMonaco = monaco.editor.create(editor.value, {
    value: "SELECT * FROM TABLE",
    language: 'sql',
    theme: "vs-dark",
    minimap:{
      enabled: false
    }
  })
  const text = editorMonaco.getValue()
})

</script>

<template>
  <div class="flex mt-5 mx-5">
    <h1 class="underline text-blue text-4xl self-center grow">Configure and Subscribe</h1>
    <img src="./assets/images/tiki-pineapple.svg" alt="" />
  </div>
  <div class="flex mt-5 mx-5">
    <div id="col-1" class="w-2/5">
      <div class="flex-col">
        <div class="">
          <select v-model="selectedTable" name="tables" id="tables" class="w-3/5 text-center py-1.5 bg-light-gray border border-solid border-dark-gray rounded-md">
            <option value="">Select a Table</option>
            <option>Receipts</option>
            <option>Transactions</option>
          </select>
        </div>
        <div class="mt-10">
          <h2 class="text-blue text-3xl underline">{{ selectedTable }}</h2>
        <ul v-if="selectedTable">
          <li class="mt-2 w-2/5 flex justify-between text-blue">user_id <span class="text-yellow">string</span></li>
          <li class="mt-2 w-2/5 flex justify-between">user_id <span class="text-yellow">string</span></li>
          <li class="mt-2 w-2/5 flex justify-between">Transactions<span class="text-yellow">string</span></li>
          <li class="mt-2 w-2/5 flex justify-between">user_id <span class="text-yellow">string</span></li>
        </ul>
        </div>
      </div>
    </div>
    <div id="col-2" class="grow">
      <div id="editor" ref="editor" class="w-full h-full"></div>
      <button class="mt-5 border border-yellow p-2 bg-yellow rounded-md w-1/3 text-white">Estimate Cost</button>
    </div>
  </div>
  <div class="flex justify-end mt-5 mx-5">
    <input type="submit" />
  </div>
</template>

<style scoped></style>
