<script setup lang="ts">
import { ref } from 'vue'
import tableTaxonomy from './tableTaxonomy.vue'
import InputComponent from './InputComponent.vue'
import HeaderTitle from './HeaderTitle.vue'
import AlertComponent from './AlertComponent.vue'
import { BuilderState } from '@/interfaces/BuilderState'
import { Subscription } from '@/subscription'

const emits = defineEmits(['estimate'])

const cleanroomId = ref<string>()

const tableName = ref<string>()

const isLoading = ref<boolean>(false)

const hasError = ref<boolean>(false)

const subscription = new Subscription()

const token = sessionStorage.getItem('authToken')

const submit = async (query: string) => {
  isLoading.value = true

  let estimateResponse
  subscription
    .estimate(tableName.value!, query, cleanroomId.value!, token!)
    .then((response) => {
      estimateResponse = response

      const costs = (estimateResponse!.count[0].total! * 0.001).toFixed(2).toLocaleString()

      const annualCost = (estimateResponse!.count[0].total! * 0.001 * 12)
        .toFixed(2)
        .toLocaleString()

      const monthlyUpdate = (estimateResponse!.count[0].total! / 12).toFixed(2).toLocaleString()

      const total = estimateResponse!.count[0].total?.toLocaleString()

      const sample = estimateResponse!.sample[0].records

      const infoJson = {
        subscriptionId: estimateResponse!.subscriptionId,
        costs: `$${costs}/month`,
        annualCost: annualCost,
        monthlyUpdate: monthlyUpdate,
        total: total,
        sample: sample
      }

      emits('estimate', infoJson)
      isLoading.value = false
    })
    .catch(() => {
      hasError.value = true
      isLoading.value = false
      return
    })
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
