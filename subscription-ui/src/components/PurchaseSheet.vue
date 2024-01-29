<script setup lang="ts">
import type { QueryInfo } from '@/interfaces/QueryInfo'
import HeaderTitle from './HeaderTitle.vue'
import { type PropType, ref } from 'vue'
import InputComponent from './InputComponent.vue'
import TextButton from './TextButton.vue'
import { ButtonState } from '@/interfaces/ButtonState'
import { Subscription } from '@/subscription'
import type { SubscriptionType } from '@/interfaces/Subscription'
import AlertComponent from './AlertComponent.vue'
import { BuilderState } from '@/interfaces/BuilderState'

const props = defineProps({
  estimateInfo: {
    type: Object as PropType<QueryInfo>,
    required: true
  }
})

const emits = defineEmits(['subscribe', 'back'])

const subscription = new Subscription()

const token = sessionStorage.getItem('authToken')

const subscribe = async () => {
  const response: SubscriptionType = await subscription.subscribe(
    props.estimateInfo!.subscriptionId,
    token!
  )
  if (!response || response.status !== 'subscribed')
    return (error.value = 'It was not possible to subscribe!')

  emits('subscribe')
}

const error = ref<string>()
</script>

<template>
  <div
    class="w-3/5 m-5 px-10 py-4 border-r border-solid border-tiki-black/10 gap-1.5 flex flex-col"
  >
    <header-title />
    <alert-component
      :type="BuilderState.ERROR"
      :text="'Uh oh! Your purchase failed, try again later or contact us.'"
      v-if="error"
      @cancel="error = undefined"
    />
    <input-component
      :title="'RESULTS'"
      :description="'Showing the first 10 matching results.'"
      :type="'sampleData'"
      :sample="estimateInfo.sample"
      :info="estimateInfo"
    />
    <text-button :state="ButtonState.OUTLINED" :text="'New Estimate'" @submit="$emit('back')" />
  </div>
  <div class="w-2/5 flex flex-col px-8 mt-6">
    <input-component
      :title="'ESTIMATE'"
      :description="'Actual costs may vary; more data is always being added. '"
      :type="'queryInfo'"
      :info="estimateInfo"
    />
    <text-button :state="ButtonState.ACTIVE" :text="'Subscribe'" @submit="subscribe" />
  </div>
</template>
