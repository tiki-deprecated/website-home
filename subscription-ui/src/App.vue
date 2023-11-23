<script setup lang="ts">
import { computed, ref } from 'vue'
import queryEditor from './components/queryEditor.vue'
import queryInfo from './components/queryInfo.vue'
import infoButtons from './components/infoButtons.vue'
import tableTaxonomy from './components/tableTaxonomy.vue'
import tableSelect from './components/tableSelect.vue'
import type {QueryInfo} from "./interfaces/QueryInfo";


const selectedTable = ref<string>()
const infoState = ref<string>()
const info = ref<QueryInfo>()
</script>

<template>
  <div class="flex mt-5 mx-10">
    <h1 class="underline text-blue text-4xl self-center grow">Configure and Subscribe</h1>
    <img src="./assets/images/tiki-pineapple.svg" alt="" />
  </div>
  <div class="flex mt-5 mx-10">
    <div id="col-1" class="w-2/5">
      <div class="flex-col">
        <table-select @update="(newValue)=> selectedTable = newValue"/>
        <table-taxonomy :tableTitle="selectedTable"/>
      </div>
    </div>
    <div id="col-2" class="grow">
      <query-editor :table="selectedTable" @update="(infoJson)=> info = infoJson"/>
      <info-buttons
        @cost="infoState = 'cost'"
        @sample="infoState = 'sample'"
        @stats="infoState = 'stats'"
      />
      <query-info :state="infoState" :info="info"/>
    </div>
  </div>
  <div class="flex justify-end mt-5 mb-10 mx-10">
    <button type="submit" class="bg-green text-white py-3 rounded-md w-60">
      Agree & Subscribe
    </button>
  </div>
</template>

<style scoped></style>
