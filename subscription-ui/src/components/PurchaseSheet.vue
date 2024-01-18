<script setup lang="ts">
import type { QueryInfo } from '@/interfaces/QueryInfo'
import HeaderTitle from './HeaderTitle.vue'
import { type PropType } from 'vue'
import InputComponent from './InputComponent.vue'
import TextButton from './TextButton.vue'
import { ButtonState } from '@/interfaces/ButtonState'

defineProps({
  estimateInfo: {
    type: Object as PropType<QueryInfo>,
    required: true
  }
})
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
    />
    <text-button
      :state="ButtonState.OUTLINED"
      :text="'New Estimate'"
      />
  </div>
  <div class="w-2/5 flex px-8"></div>
</template>
