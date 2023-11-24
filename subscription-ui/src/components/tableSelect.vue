<script setup lang="ts">
import { ref, watch } from 'vue';
const selectedTable = ref<string>()
const emit = defineEmits(["update"])
watch(()=> selectedTable.value, (newValue)=>{
    emit("update", newValue)
})
</script>

<template>
     <div class="">
          <select
            v-model="selectedTable"
            name="tables"
            id="tables"
            class="w-72 text-center py-1.5 bg-light-gray border border-solid border-dark-gray rounded-md"
          >
            <option value="">Select a Table</option>
            <option>Receipts</option>
            <option>Transactions</option>
          </select>
        </div>
</template>