<script setup lang="ts">
import { ref } from 'vue'
import tableTaxonomy from './tableTaxonomy.vue'
import type { QueryInfo } from '../interfaces/QueryInfo'
import InputComponent from './InputComponent.vue'
import HeaderTitle from './HeaderTitle.vue'
import TextButton from './TextButton.vue'
import { ButtonState } from '@/interfaces/ButtonState'
import AlertComponent from './AlertComponent.vue'
import { BuilderState } from '@/interfaces/BuilderState'

const cleanroomId = ref<string>()
const info = ref<QueryInfo>()

const updateInfo = (infoJson: QueryInfo) => {
  info.value = infoJson
}

const tableName = ref<string>()

const isLoading = ref<boolean>(false)
</script>

<template>
  <div
    class="w-3/5 m-5 px-10 py-4 border-r border-solid border-tiki-black/10 gap-1.5 flex flex-col"
  >
    <header-title />
    <alert-component
      :type="isLoading ? BuilderState.ERROR : BuilderState.INITIAL"
      :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
      v-if="isLoading"
    />
    <input-component
      :title="'CLEANROOM'"
      :description="'Lorem ipsun dolor sit amet, consectur adipisciing elit.'"
      :type="'cleanroomSelect'"
      @update="(value) => (cleanroomId = value)"
    />
    <input-component
      :title="'TABLE NAME'"
      :description="'Lorem ipsun dolor sit amet, consectur adipisciing elit.'"
      :type="'input'"
      :placeholder="'my_first_table'"
      @update="(value) => (tableName = value)"
    />
    <input-component
      :title="'CREATE FILTER'"
      :description="'Lorem ipsun dolor sit amet, consectur adipisciing elit.'"
      :type="'queryEditor'"
    />
    <text-button :state="ButtonState.ACTIVE" :text="'Get Estimate'" @submit="isLoading = true" />
  </div>
  <div class="w-2/5 flex px-8">
    <table-taxonomy />
  </div>
</template>
