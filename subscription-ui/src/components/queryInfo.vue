<script lang="ts" setup>
import queryCost from "./queryCost.vue"
import queryStats from "./queryStats.vue"
import querySample from "./querySample.vue"
import { defineProps } from "vue";

const props = defineProps({
    state: {
        type: String,
        required: false
    }
})



</script>

<template>
  <query-cost v-if="state === 'cost'"/>
  <query-stats v-if="state === 'stats'"/>
  <query-sample v-if="state === 'sample'"/>
</template>

<style></style>
