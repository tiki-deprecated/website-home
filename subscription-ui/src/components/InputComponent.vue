<script setup lang="ts">
import cleanroomSelect from './cleanroomSelect.vue'
import queryEditor from './queryEditor.vue'
import querySample from './querySample.vue'
import queryInfo from './queryInfo.vue'
import { type PropType } from 'vue'
import { type QueryInfo } from '@/interfaces/QueryInfo'

defineEmits(['updateCleanroom', 'submit', 'updateTableName'])

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false
  },
  info: {
    type: Object as PropType<QueryInfo>,
    required: false
  },
  sample: {
    type: Array as PropType<any[]>,
    required: false
  },
})

const componentHandler = (type: string) => {
  switch (type) {
    case 'cleanroomSelect':
      return cleanroomSelect
    case 'queryEditor':
      return queryEditor
    case 'sampleData':
      return querySample
    case 'queryInfo':
      return queryInfo
    default:
      return type
  }
}

</script>

<template>
  <div class="mt-4 text-tiki-gray font-semibold flex justify-between w-full">
    <div>
      {{ title }}
    </div>
    <div v-if="type === 'sampleData'">
      {{ info?.total }}
    </div>
  </div>
  <label for="" class="text-tiki-gray font-normal mt-1 block">
    {{ description }}
  </label>
  <component
    :is="componentHandler(type)"
    :class="
      type !== 'queryEditor'
        ? 'block border border-tiki-black/10 border-solid rounded-md flex gap-2 p-2.5 mt-4 w-full placeholder:text-tiki-gray/70'
        : ''
    "
    :placeholder="placeholder"
    :sample="sample"
    :info="info"
    @changeCleanroom="(value: string) => $emit('updateCleanroom', value)"
    @input="
      (event: InputEvent) => $emit('updateTableName', (event.target as HTMLInputElement).value)
    "
    @update="(query: string) => $emit('submit', query)"
  >
    ></component
  >
</template>
