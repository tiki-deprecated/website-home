<script setup lang="ts">
import { ref } from 'vue'
import queryEditor from './queryEditor.vue'
import queryInfo from './queryInfo.vue'
import tableTaxonomy from './tableTaxonomy.vue'
import cleanroomSelect from './cleanroomSelect.vue'
import type { QueryInfo } from '../interfaces/QueryInfo'
import LoadingScreen from './LoadingScreen.vue'
import InputComponent from './InputComponent.vue'
import HeaderTitle from './HeaderTitle.vue'
import TextButton from './TextButton.vue'
import { ButtonState } from '@/interfaces/ButtonState'

const cleanroomId = ref<string>()
const info = ref<QueryInfo>()

const updateInfo = (infoJson: QueryInfo) => {
  info.value = infoJson
}

const tableName = ref<string>()

const isLoading = ref<boolean>(false)
</script>

<template>
    <div class="w-3/5 m-5 px-10 py-4 border-r border-solid border-tiki-black/10">
      <header-title />
      <input-component 
      :title="'CLEANROOM'"
      :description="'Lorem ipsun dolor sit amet, consectur adipisciing elit.'"
      :type="'cleanroomSelect'"
      @update="(value)=> cleanroomId = value"
      />
      <input-component 
      :title="'TABLE NAME'"
      :description="'Lorem ipsun dolor sit amet, consectur adipisciing elit.'"
      :type="'input'"
      :placeholder="'my_first_table'"
      @update="(value)=> tableName = value"
      />
      <input-component 
      :title="'CREATE FILTER'"
      :description="'Lorem ipsun dolor sit amet, consectur adipisciing elit.'"
      :type="'queryEditor'"
      />
      <text-button :state="ButtonState.NORMAL" :text="'Get Estimate'"/>
    </div>
</template>
