<script setup lang="ts">
import { ref, watch } from 'vue'
import { demographics, transactions, receipts } from '../interfaces/TableTaxonomies'

const props = defineProps({
  tableTitle: {
    type: String,
    required: false
  }
})

const tableTaxonomy = ref()

watch(()=> props.tableTitle, (newValue)=>{
  newValue === 'Demographics'
    ? tableTaxonomy.value = demographics
    : newValue === 'Receipts'
      ? tableTaxonomy.value =  receipts
      : tableTaxonomy.value = transactions
})

</script>

<template>
  <div class="mt-10">
    <h2 class="text-blue text-3xl underline">{{ tableTitle }}</h2>
    <ul v-if="tableTitle">
      <li
        class="mt-2 w-60 flex justify-between text-blue"
        v-for="data of tableTaxonomy"
        :key="data.data"
      >
        {{ data.data }} <span class="text-yellow">{{ data.type }}</span>
      </li>
    </ul>
  </div>
</template>
