<script lang="ts" setup>
import queryCost from './queryCost.vue';
import queryStats from './queryStats.vue';
import querySample from './querySample.vue';
import { defineProps, type PropType } from 'vue';
import type {QueryInfo} from "../interfaces/QueryInfo";
import { Subscription } from '@/subscription';
import type { SubscriptionType } from '@/interfaces/Subscription';

const subscription = new Subscription()
const props = defineProps({
  state: {
    type: String,
    required: false
  },
  info: {
    type: Object as PropType<QueryInfo>,
    required: false
  }
})

const token = sessionStorage.getItem('authToken')

const subscribe = async () => {
  const response: SubscriptionType = await subscription.subscribe(props.info!.subscriptionId, token!)
  if(!response || response.status !== 'subscribed') alert('failed')
  alert('success')
}
</script>

<template>
  <div class="mt-5">
    <query-cost v-if="state === 'cost'" :cost="info?.costs"/>
    <query-stats v-if="state === 'stats'" :stats="info?.stats"/>
    <query-sample v-if="state === 'sample'" :sample="info?.sample"/>
    <button
        class="border py-3 bg-green rounded-md w-60 text-white mt-5"
        @click="subscribe"
        v-if="info"
      >
        Subscribe
    </button>
  </div>
</template>

<style></style>
