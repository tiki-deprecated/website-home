<script setup lang="ts">
import { type PropType } from 'vue'

const props = defineProps({
  sample: {
    type: Array as PropType<any[]>,
    required: false
  }
})
</script>

<template>
  <div class="overflow-scroll w-4/4 h-[60rem] mb-10 rounded-lg">
    <table class="h-full" v-if="sample">
      <thead >
        <tr >
          <th
            class="bg-green text-white text-center border border-dark-gray/20 border-solid px-12 py-2"
            v-for="(value, key) in sample[0].split(',')"
            :key="key"
          >
            {{ value }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in sample.slice(1)" :key="index" >
          <td class="border border-dark-gray/20 border-solid px-2 break-all text-center" v-for="(item, index) in row.split(',')" :key="index">
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
