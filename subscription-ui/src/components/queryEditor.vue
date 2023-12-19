<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import * as monaco from 'monaco-editor'
import 'monaco-sql-languages/out/esm/trinosql/trinosql.contribution'
import TrinoSQLWorker from 'monaco-sql-languages/out/esm/trinosql/trinosql.worker?worker'
import { Subscription } from '../subscription/index'
import { type Estimate } from '@/interfaces/Estimate'
import { type SubscriptionType } from '@/interfaces/Subscription'

self.MonacoEnvironment = {
  getWorker(_: any, label: string) {
    return new TrinoSQLWorker()
  }
}

let editorMonaco: monaco.editor.IStandaloneCodeEditor

onMounted(() => {
  editorMonaco = monaco.editor.create(editor.value, {
    value: `SELECT * FROM ${props.table ? props.table : 'TABLE'}`,
    language: 'trinosql',
    theme: 'vs-dark',
    automaticLayout: true,
    minimap: {
      enabled: false
    }
  })
})

const props = defineProps({
  datafield: {
    type: String,
    required: false
  },
  cleanroomId: {
    type: String,
    required: true
  },
  table: {
    type: String,
    required: false
  }
})

const editor = ref()

const emits = defineEmits(['update', 'loading' ])

const subscription = new Subscription()

const token = sessionStorage.getItem('authToken')

const submitQuery = async () => {
  emits('loading', true)
  let query = editorMonaco.getValue()

  if (query.endsWith(';')) query = query.slice(0, -1)

  const estimateResponse: SubscriptionType = await subscription.estimate(
    tableName.value!,
    query,
    props.cleanroomId,
    token!
  )
  if(!estimateResponse) return emits('loading', false)

  const costs = (estimateResponse.count[0].total! * 0.001).toFixed(2).toLocaleString()

  const total = estimateResponse.count[0].total?.toLocaleString()

  const infoJson = {
    costs: `$${costs}/month`,
    stats: [`${total} Records`],
    sample: estimateResponse.sample[0].records
  }
  emits('update', infoJson)
  emits('loading', false)
}

watch(
  () => [props.datafield, props.table],
  ([newDataField, newTable], [oldDataField, oldTable]) => {
    if (newDataField !== oldDataField)
      editorMonaco.setValue(editorMonaco.getValue() + ' ' + newDataField)
    if (newTable !== oldTable) editorMonaco.setValue(editorMonaco.getValue() + ' ' + newTable)
  }
)

const editorHeight = ref<number>(240)

const remHeight = computed(() => {
  return `${editorHeight.value / 16}rem`
})

const resize = (e: MouseEvent) => {
  if (!isResized.value) return

  editorHeight.value = editorHeight.value + e.movementY / 2
}

const isResized = ref<boolean>(false)

const tableName = ref<string>()
</script>

<template>
  <div @mousemove="resize" @mouseup="isResized = false" class="flex flex-col">
    <div id="editor" ref="editor" class="h-60 w-full" :style="{ height: remHeight }"></div>
    <div class="w-full bg-black h-1 cursor-row-resize" @mousedown="isResized = true"></div>
    <div class="flex justify-between mt-5 items-center">
      <div class="flex flex-col">
        <label>Table's Name</label>
        <input
          v-model="tableName"
          type="text"
          class="border border-solid border-dark-gray/40 rounded-lg px-4 py-1.5"
          placeholder="Ex.: Starbucks Table"
        />
      </div>
      <button
        class="border py-3 bg-green rounded-md w-60 text-white mt-5"
        @click="submitQuery"
        :disabled="!tableName || !cleanroomId"
        :class="!tableName || !cleanroomId ? 'bg-green/50' : ''"
      >
        Estimate Cost
      </button>
    </div>
  </div>
</template>

<style></style>
