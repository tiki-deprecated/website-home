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

const updateInfo = (infoJson: QueryInfo) => {
  info.value = infoJson
  infoState.value = "cost"
}

</script>

<template>
  <div class="bg-white dark:bg-black">
    <div class="flex mt-5 mx-10">
      <div class="w-2/5">
        <div class="flex-col">
          <table-select @update="(newValue)=> selectedTable = newValue"/>
          <table-taxonomy :tableTitle="selectedTable"/>
        </div>
      </div>
      <div class="grow px-8">
        <query-editor :table="selectedTable" @update="updateInfo"/>
        <info-buttons
          @cost="infoState = 'cost'"
          @sample="infoState = 'sample'"
          @stats="infoState = 'stats'"
          :state-prop="infoState"
        />
        <query-info :state="infoState" :info="info"/>
      </div>
    </div>
    <div class="flex justify-end mt-5 mb-10 mx-10">
      <button type="submit" class="bg-green text-white py-3 rounded-md w-60">
        Agree & Subscribe
      </button>
    </div>
  </div>
</template>

<style scoped></style>
