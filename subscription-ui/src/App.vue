<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

monaco.languages.register({ id: 'SQL' })
const editor = ref()

const selectedTable = ref<string>()

onMounted(() => {
  const editorMonaco = monaco.editor.create(editor.value, {
    value: 'SELECT * FROM TABLE',
    language: 'sql',
    theme: 'vs-dark',
    minimap: {
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
          <select
            v-model="selectedTable"
            name="tables"
            id="tables"
            class="w-4/5 text-center py-1.5 bg-light-gray border border-solid border-dark-gray rounded-md"
          >
            <option value="">Select a Table</option>
            <option>Receipts</option>
            <option>Transactions</option>
          </select>
        </div>
        <div class="mt-10">
          <h2 class="text-blue text-3xl underline">{{ selectedTable }}</h2>
          <ul v-if="selectedTable">
            <li class="mt-2 w-2/5 flex justify-between text-blue">
              user_id <span class="text-yellow">string</span>
            </li>
            <li class="mt-2 w-2/5 flex justify-between">
              user_id <span class="text-yellow">string</span>
            </li>
            <li class="mt-2 w-2/5 flex justify-between">
              Transactions<span class="text-yellow">string</span>
            </li>
            <li class="mt-2 w-2/5 flex justify-between">
              user_id <span class="text-yellow">string</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="col-2" class="grow" style="height: 50vh">
      <div id="editor" ref="editor" style="height: 50%"></div>
      <button class="mt-10 border border-yellow py-3 bg-yellow rounded-md w-60 text-white">
        Estimate Cost
      </button>
      <div class="mt-10 flex">
        <span class="text-lg px-5 bg-green text-white">Cost</span>
        <span class="text-lg px-5 bg-light-gray border">Stats</span>
        <span class="text-lg px-5 border bg-light-gray">Sample</span>
      </div>
      <div class="bg-light-gray font-normal w-fit text-center h-52 mt-3 flex flex-col justify-center">
          <p>
            The estimated cost to subscribe
          </p> 
          <p>
            to this dataset is: <span class="text-green underline"> $3,000 - $4,000/month </span>
          </p>
        </div>
    </div>
  </div>
  <div class="flex justify-end mt-5 mx-5">
    <button type="submit" class="bg-green text-white py-3 rounded-md w-60">
      Agree & Subscribe
    </button>
  </div>
</template>

<style scoped></style>
