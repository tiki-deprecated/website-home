<script setup lang="ts">
import type { QueryInfo } from '@/interfaces/QueryInfo'
import HeaderTitle from './HeaderTitle.vue'
import { type PropType } from 'vue'
import InputComponent from './InputComponent.vue'
import TextButton from './TextButton.vue'
import { ButtonState } from '@/interfaces/ButtonState'
import { Subscription } from '@/subscription'
import type { SubscriptionType } from '@/interfaces/Subscription'

const props = defineProps({
  estimateInfo: {
    type: Object as PropType<QueryInfo>,
    required: true
  }
})

const emits = defineEmits(['subscribe'])

const subscription = new Subscription()

const token = sessionStorage.getItem('authToken')

const subscribe = async () => {
  const response: SubscriptionType = await subscription.subscribe(
    props.estimateInfo!.subscriptionId,
    token!
  )
  if (!response || response.status !== 'subscribed') return

  emits('subscribe')
}
</script>

<template>
  <div
    class="w-3/5 m-5 px-10 py-4 border-r border-solid border-tiki-black/10 gap-1.5 flex flex-col"
  >
    <header-title />
    <input-component
      :title="'RESULTS'"
      :description="'Lorem ipsun dolor sit amet, consectur adipisciing elit.'"
      :type="'sampleData'"
      :sample="estimateInfo.sample"
    />
    <text-button :state="ButtonState.OUTLINED" :text="'New Estimate'" />
  </div>
  <div class="w-2/5 flex flex-col px-8 mt-6">
    <input-component
      :title="'ESTIMATE'"
      :description="'Lorem ipsun dolor sit amet, consectur adipisciing elit.'"
      :type="'queryInfo'"
      :info="estimateInfo"
    />
    <text-button :state="ButtonState.ACTIVE" :text="'Subscribe'" @submit="subscribe" />
  </div>
</template>
