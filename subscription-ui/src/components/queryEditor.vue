<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as monaco from 'monaco-editor'
import 'monaco-sql-languages/out/esm/trinosql/trinosql.contribution'
import { Subscription } from '../subscription/index'
import { type SubscriptionType } from '@/interfaces/Subscription'

let editorMonaco: monaco.editor.IStandaloneCodeEditor

onMounted(() => {
  monaco.editor.defineTheme('myCustomTheme', {
    base: 'vs', // can also be vs-dark or hc-black
    inherit: true, // can also be false to completely replace the builtin rules
    rules: [],
    colors: {
      'editor.foreground': '#505C59',
      'editorLineNumber.foreground': '#505C59',
      'editorActiveLineNumber.foreground': '#505C59',
      "editor.lineHighlightBorder": "#FFFFFF",
    }
  })

  monaco.editor.setTheme('myCustomTheme')

  editorMonaco = monaco.editor.create(editor.value, {
    value: `SELECT * FROM ${props.table ? props.table : 'TABLE'}`,
    language: '',
    automaticLayout: true,
    minimap: {
      enabled: false
    },
    fontFamily: 'SF Mono',
    fontSize: 18,
    fontWeight: '400'
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

const emits = defineEmits(['update', 'loading'])

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
  if (!estimateResponse) return emits('loading', false)

  const costs = (estimateResponse.count[0].total! * 0.001).toFixed(2).toLocaleString()

  const total = estimateResponse.count[0].total?.toLocaleString()

  const sample = estimateResponse.sample[0].records

  const infoJson = {
    subscriptionId: estimateResponse.subscriptionId,
    costs: `$${costs}/month`,
    stats: [`${total} Records`],
    sample: sample
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

const tableName = ref<string>()
</script>

<template>
  <div class="flex flex-col">
    <div id="editor" ref="editor" class="h-[15rem] w-full"></div>
  </div>
</template>

<style scoped></style>
