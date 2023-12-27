<script setup lang="ts">
import type { PropType } from 'vue';


const props = defineProps({
  cost: {
    type: String, 
    required: true,
  },
  records: {
    type: Object as PropType<string[]>,
    required: true
  }
})

</script>

<template>
  <div class="flex flex-col text-lg dark:text-white" v-if="cost && records">
    <p>The estimated cost to subscribe</p>
    <p>
      to this dataset with <span class="text-green underline">{{ records[0] }}</span> is: <span class="text-green underline"> {{ cost }} </span>
    </p>
  </div>
</template>
