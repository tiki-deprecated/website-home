<script setup lang="ts">
import { watch } from 'vue'

const props = defineProps({
  tableTitle: {
    type: String,
    required: false
  }
})

watch(
  () => props.tableTitle,
  (newValue) => {
    console.log('Fetch the taxonomy of table:' + newValue)
  }
)

const tableTaxonomy = [
  {
    data: 'foo',
    type: 'bar'
  },
  {
    data: 'foo',
    type: 'bar'
  },
  {
    data: 'foo',
    type: 'bar'
  },
  {
    data: 'foo',
    type: 'bar'
  },
  {
    data: 'foo',
    type: 'bar'
  },
  {
    data: 'foo',
    type: 'bar'
  }
]
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
