<script setup lang="ts">
import { computed, ref } from 'vue'
import queryEditor from './components/queryEditor.vue'
import queryInfo from './components/queryInfo.vue'
import infoButtons from './components/infoButtons.vue'
import tableTaxonomy from './components/tableTaxonomy.vue'
import tableSelect from './components/tableSelect.vue'
import type { QueryInfo } from './interfaces/QueryInfo'

const selectedTable = ref<string>()
const infoState = ref<string>()
const info = ref<QueryInfo>()

const updateInfo = (infoJson: QueryInfo) => {
  info.value = infoJson
  infoState.value = 'cost'
}

const panelWidth = ref<number>(350)

const remWidth = computed(() => {
  return `${panelWidth.value / 16}rem`
})

const resize = (e: MouseEvent) => {

  if(!isResized.value) return


  panelWidth.value = panelWidth.value + e.movementX / 2
}

const isResized = ref<boolean>(false)
</script>

<template >
  <div class="w-full h-screen grid" @mousemove="resize" @mouseup="isResized = false">
    <div class="flex mx-10">
      <div class="mt-5" :style="{ width: remWidth }" v-if="panelWidth > 300">
        <div class="flex-col">
          <table-select @update="(newValue) => (selectedTable = newValue)" @close="panelWidth = 299"/>
          <table-taxonomy :tableTitle="selectedTable" />
        </div>
      </div>
      <div class="w-1 bg-light-gray cursor-col-resize shadow-md border-left border-solid border-black" @mousedown="isResized = true" ></div>
      <div class="grow px-8 mt-5">
        <query-editor :table="selectedTable" @update="updateInfo" />
        <info-buttons
          @cost="infoState = 'cost'"
          @sample="infoState = 'sample'"
          @stats="infoState = 'stats'"
          :state-prop="infoState"
        />
        <query-info :state="infoState" :info="info" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
