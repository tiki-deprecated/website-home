<script lang="ts" setup>
import querySample from './querySample.vue'
import { type PropType, ref } from 'vue'
import type { QueryInfo } from '../interfaces/QueryInfo'
import { Subscription } from '@/subscription'
import type { SubscriptionType } from '@/interfaces/Subscription'

const subscription = new Subscription()
const props = defineProps({
  info: {
    type: Object as PropType<QueryInfo>,
    required: true
  }
})

const error = ref<string>()

const successMessage = ref<string>()

const token = sessionStorage.getItem('authToken')

const subscribe = async () => {
  const response: SubscriptionType = await subscription.subscribe(
    props.info!.subscriptionId,
    token!
  )
  if (!response || response.status !== 'subscribed')
    return (error.value = 'Something went wrong with subscription, review your billing profile')
  successMessage.value = 'Yeah! You did it. Thanks for subscribing, enjoy our data!'
}
</script>

<template>
  <div>
    <h1>test</h1>
  </div>
</template>

<style></style>
