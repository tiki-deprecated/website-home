<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SubscriptionUi from './components/SubscriptionUi.vue'
import { EstimateState } from './interfaces/EstimateState'
import PurchaseSheet from './components/PurchaseSheet.vue'
import { type QueryInfo } from './interfaces/QueryInfo'
import { Subscription } from '@/subscription'
import type { ProfileInfo } from '@/interfaces/ProfileInfo'
import ErrorSheet from './components/ErrorSheet.vue'

const state = ref<EstimateState>()
const subscription = new Subscription()

const handleToken = (submittedToken: string) => {
  sessionStorage.setItem('authToken', submittedToken)
  state.value = EstimateState.ESTIMATE
}
onMounted(async () => {
  const params = new URL(window.location.toString()).searchParams
  const token = params.get('token')
  if (!token) {
    return (state.value = EstimateState.ERROR)
  }
  const response: ProfileInfo = await subscription.validate(token)
  if (!response.orgId || !response.userId) {
    return (state.value = EstimateState.ERROR)
  }
  handleToken(token)
  sessionStorage.setItem('userId', response.userId)
  sessionStorage.setItem('orgId', response.orgId)
})

const estimateInfo = ref<QueryInfo>()

const handleEstimate = (estimate_info: QueryInfo) => {
  if (!sessionStorage.getItem('authToken')) return (state.value = EstimateState.ERROR)

  state.value = EstimateState.SUBSCRIPTION
  estimateInfo.value = estimate_info
}
</script>

<template>
  <div class="flex justify-between text-left h-screen">
    <error-sheet v-if="state === EstimateState.ERROR" />
    <subscription-ui v-if="state === EstimateState.ESTIMATE" @estimate="handleEstimate" />
    <purchase-sheet
      v-if="state === EstimateState.SUBSCRIPTION"
      :estimate-info="estimateInfo!"
      @subscribe="state = EstimateState.ESTIMATE"
      @back="state = EstimateState.ESTIMATE"
    />
  </div>
</template>

<style scoped></style>
