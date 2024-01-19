<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SubscriptionUi from './components/SubscriptionUi.vue'
import AuthSheet from './components/AuthSheet.vue'
import { EstimateState } from './interfaces/EstimateState'
import PurchaseSheet from './components/PurchaseSheet.vue'
import { type QueryInfo } from './interfaces/QueryInfo'

const state = ref<EstimateState>()

const handleToken = (submittedToken: string) => {
  sessionStorage.setItem('authToken', submittedToken)
  state.value = EstimateState.ESTIMATE
}
onMounted(() => {
  sessionStorage.getItem('authToken')
    ? (state.value = EstimateState.ESTIMATE)
    : (state.value = EstimateState.AUTH)
})

const estimateInfo = ref<QueryInfo>()

const handleEstimate = (estimate_info: QueryInfo) => {
  if (!sessionStorage.getItem('authToken')) return (state.value = EstimateState.AUTH)

  state.value = EstimateState.SUBSCRIPTION
  estimateInfo.value = estimate_info
}
</script>

<template>
  <div class="flex justify-between text-left h-screen">
    <auth-sheet v-if="state === EstimateState.AUTH" @submit="handleToken" />
    <subscription-ui v-if="state === EstimateState.ESTIMATE" @estimate="handleEstimate" />
    <purchase-sheet
      v-if="state === EstimateState.SUBSCRIPTION"
      :estimate-info="estimateInfo!"
      @subscribe="state = EstimateState.ESTIMATE"
    />
  </div>
</template>

<style scoped></style>
