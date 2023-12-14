<script setup lang="ts">
import { ref, watch } from 'vue'
const selectedTable = ref<string>()
const emit = defineEmits(['update', 'close'])
watch(
  () => selectedTable.value,
  (newValue) => {
    emit('update', newValue)
  }
)
</script>

<template>
  <div class="flex justify-between mr-4">
    <select
      v-model="selectedTable"
      name="tables"
      id="tables"
      class="w-72 text-center py-1.5 bg-light-gray border border-solid border-dark-gray rounded-md"
    >
      <option value="">Select a Table</option>
      <option>Demographics</option>
      <option>Receipts</option>
      <option>Transactions</option>
    </select>
    <button class="border border-light-gray border-solid rounded-lg shadow-md p-1" @click="$emit('close')">
      <img src="../assets/images/collapse_icon.svg" alt="">
    </button>
  </div>
</template>
