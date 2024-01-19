<script setup lang="ts">
import { type PropType } from 'vue'

const props = defineProps({
  sample: {
    type: Array as PropType<any[]>,
    required: false
  }
})

console.log('teste 2 ', props.sample)
</script>

<template>
  <div class="overflow-scroll w-4/4 h-[60rem] rounded-lg">
    <table class="h-full" v-if="sample">
      <thead>
        <tr>
          <th
            class="text-tiki-gray text-center font-semibold px-8 pb-2"
            v-for="(value, key) in sample[0].split(',')"
            :key="key"
          >
            {{ value }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in sample.slice(1)" :key="index">
          <td
            class="px-3 break-all text-center text-tiki-gray font-normal"
            v-for="(item, index) in row.split(',')"
            :key="index"
          >
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
