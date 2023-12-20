<script lang="ts" setup>
import queryCost from './queryCost.vue'
import querySample from './querySample.vue'
import { defineProps, type PropType } from 'vue'
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

const token = sessionStorage.getItem('authToken')

const subscribe = async () => {
  const response: SubscriptionType = await subscription.subscribe(
    props.info!.subscriptionId,
    token!
  )
  if (!response || response.status !== 'subscribed') alert('failed')
  alert('success')
}
</script>

<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true"  @click="$emit('close')">
    <div
      class="fixed inset-0 bg-black bg-opacity-60 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          class="bg-white flex-col gap-3 flex justify-center relative overflow-hidden rounded-lg text-left shadow-xl transition-all px-12 w-[80vw] h-[80vh]"
        >
          <h1 class="text-2xl mb-4 mt-8 w-1/2">
            The estimated cost to subscribe to this dataset with
            <span class="text-green underline">{{ info.stats[0] }}</span> is:
            <span class="text-green underline"> {{ info.costs }} </span>
          </h1>
          <query-sample :sample="info?.sample" />
          <div class="text-center">
            <button
              class="border py-3 bg-green rounded-md w-60 text-white my-5"
              @click="subscribe"
              v-if="info"
            >
              Subscribe $
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
