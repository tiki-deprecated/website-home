<script lang="ts" setup>
import querySample from './querySample.vue'
import { defineProps, type PropType, ref } from 'vue'
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
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div
      class="fixed inset-0 bg-black bg-opacity-60 transition-opacity"
      @click="$emit('close')"
    ></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          class="bg-white flex-col gap-3 flex justify-center relative overflow-hidden rounded-lg text-left shadow-xl transition-all px-12 w-[80vw] h-[80vh]"
        >
          <div class="flex justify-between items-center">
            <h1 class="text-2xl mb-4 mt-8">
              Estimated cost of
              <span class="text-green underline"> {{ info.costs }} </span>
              for
              <span class="text-green underline">{{ info.stats[0] }}</span>
            </h1>
            <button class="w-7 flex items-center justify-center mt-4" @click="$emit('close')">
              <img src="../assets/images/crossmark-outline.svg" alt="test" />
            </button>
          </div>
          <query-sample :sample="info?.sample" />
          <div class="text-center">
            <p
              v-if="error || successMessage"
              class="font-normal mb-4"
              :class="error ? 'text-red' : 'text-green'"
            >
              {{ error || successMessage }}
            </p>
            <button
              class="border py-3 bg-green rounded-md w-60 text-white mb-10"
              @click="subscribe"
              v-if="info"
              :disabled="!!successMessage"
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
