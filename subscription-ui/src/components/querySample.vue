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
  <div class="overflow-scroll w-[60rem] h-[60rem]">
    <table class="table-auto h-full" v-if="sample">
      <thead>
        <tr>
          <th
            class="bg-green text-white border border-black border-solid px-10 py-2"
            v-for="(value, key) in sample[0].split(',')"
            :key="key"
          >
            {{ value }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in sample.slice(1)" :key="index" class="border">
          <td class="border px-10 py-2 text-center" v-for="(item, index) in row.split(',')" :key="index">
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
