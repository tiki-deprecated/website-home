<script setup lang="ts">
import { ref } from 'vue'
import tableTaxonomy from './tableTaxonomy.vue'
import InputComponent from './InputComponent.vue'
import HeaderTitle from './HeaderTitle.vue'
import AlertComponent from './AlertComponent.vue'
import { BuilderState } from '@/interfaces/BuilderState'
import { Subscription } from '@/subscription'
import { type SubscriptionType } from '@/interfaces/Subscription'

const emits = defineEmits(['estimate'])

const cleanroomId = ref<string>()

const tableName = ref<string>()

const isLoading = ref<boolean>(false)

const hasError = ref<boolean>(false)

const subscription = new Subscription()

const token = sessionStorage.getItem('authToken')

const submit = async (query: string) => {
  isLoading.value = true

  const estimateResponse: SubscriptionType = await subscription.estimate(
    tableName.value!,
    query,
    cleanroomId.value!,
    token!
  )

  if (!estimateResponse) {
    hasError.value = true
    return (isLoading.value = false)
  }

  const costs = (estimateResponse.count[0].total! * 0.001).toFixed(2).toLocaleString()

  const total = estimateResponse.count[0].total?.toLocaleString()

  const sample = estimateResponse.sample[0].records

  const infoJson = {
    subscriptionId: estimateResponse.subscriptionId,
    costs: `$${costs}/month`,
    stats: [`${total} Records`],
    sample: sample
  }

  console.log(infoJson)
  emits('estimate', infoJson)
  
  isLoading.value = false
}

const cancelRequest = () => {
  subscription.cancel()
  isLoading.value = false
  hasError.value = false
}
</script>

<template>
  <div
    class="w-3/5 m-5 px-10 py-4 border-r border-solid border-tiki-black/10 gap-1.5 flex flex-col"
  >
    <header-title />
    <alert-component
      :type="
        isLoading && !hasError
          ? BuilderState.LOADING
          : hasError && !isLoading
            ? BuilderState.ERROR
            : BuilderState.INITIAL
      "
      :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
      v-if="isLoading || hasError"
      @cancel="cancelRequest"
    />
    <div class="flex relative w-full">
      <div class="w-full">
        <input-component
          :title="'CLEANROOM'"
          :description="'Lorem ipsun dolor sit amet, consectur adipisciing elit.'"
          :type="'cleanroomSelect'"
          @update-cleanroom="(value) => (cleanroomId = value)"
        />
        <input-component
          :title="'TABLE NAME'"
          :description="'Lorem ipsun dolor sit amet, consectur adipisciing elit.'"
          :type="'input'"
          :placeholder="'my_first_table'"
          @update-table-name="(value) => (tableName = value)"
        />
        <input-component
          :title="'CREATE FILTER'"
          :description="'Lorem ipsun dolor sit amet, consectur adipisciing elit.'"
          :type="'queryEditor'"
          @submit="submit"
        />
      </div>
      <div class="absolute w-full h-full bg-white/50" v-if="isLoading"></div>
    </div>
  </div>
  <div class="w-2/5 flex px-8">
    <table-taxonomy />
  </div>
</template>
