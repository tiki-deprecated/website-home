<script setup lang="ts">
import cleanroomSelect from './cleanroomSelect.vue'
import queryEditor from './queryEditor.vue'

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
  }
})

const componentHandler = (type: string) => {
  switch (type) {
    case 'cleanroomSelect':
      return cleanroomSelect
    case 'queryEditor':
      return queryEditor
    default:
      return type
  }
}
</script>

<template>
  <h1 class="mt-4 text-tiki-gray font-semibold">{{ title }}</h1>
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
    @changeCleanroom="(value: string)=>$emit('updateCleanroom', value)"
    @input="(event: InputEvent) => $emit('updateTableName', (event.target as HTMLInputElement).value)"
    @update="(query: string) => $emit('submit', query)"
    >
  ></component>
</template>
