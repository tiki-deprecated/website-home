<script setup lang="ts">
import { demographics, transactions, receipts } from '../interfaces/TableTaxonomies'
import { defineEmits } from 'vue'

const tables = ['demographics', 'receipts', 'transactions']

const emit = defineEmits(['insert', 'update'])
const checkTable = (table: string) => {
  switch (table) {
    case 'demographics':
      return demographics
    case 'receipts':
      return receipts
    case 'transactions':
      return transactions
  }
}

const updateTable = (event: any) => {
  if (event.newState === 'open') emit('update', `tiki.${event.srcElement.id}`)
}
</script>

<template>
  <div class="mt-10">
    <h1 class="text-2xl text-blue">Tables</h1>
    <details v-for="table in tables" class="w-3/4" :id="table" :key="table" @toggle="updateTable">
      <summary class="flex justify-between text-blue text-xl capitalize my-2">
        {{ table }}
        <span></span>
      </summary>
      <ul>
        <li
          class="has-tooltip mt-2 w-full flex justify-between text-blue cursor-pointer"
          v-for="data of checkTable(table)"
          :key="data.data"
          @dblclick="$emit('insert', data.data)"
        >
          <span class="break-all">
            {{ data.data }}
          </span>
          <span class="text-green ml-5">{{ data.type }}</span>
        </li>
      </ul>
    </details>
  </div>
</template>

<style scoped>
summary {
  cursor: pointer;
}

details[open] summary span::before {
  content: '-';
}

details summary span::before {
  content: '+';
}

details summary::-webkit-details-marker,
details summary::marker {
  display: none;
}
</style>
