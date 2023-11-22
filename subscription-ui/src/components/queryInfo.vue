<script lang="ts" setup>
import queryCost from './queryCost.vue';
import queryStats from './queryStats.vue';
import querySample from './querySample.vue';
import { defineProps, watch, type PropType } from 'vue';
import type {QueryInfo} from "../interfaces/QueryInfo";


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

</script>

<template>
  <div class="mt-5">
    <query-cost v-if="state === 'cost'" :cost="info?.costs"/>
    <query-stats v-if="state === 'stats'" :stats="info?.stats"/>
    <query-sample v-if="state === 'sample'" :sample="info?.sample"/>
  </div>
</template>

<style></style>
