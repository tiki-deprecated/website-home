<script setup lang="ts">

defineProps({
  cost: {
    type: String, 
    required: false,
  }
})
</script>

<template>
  <div class="flex flex-col text-lg dark:text-white" v-if="cost">
    <p>The estimated cost to subscribe</p>
    <p>
      to this dataset is: <span class="text-green underline"> {{ cost }} </span>
    </p>
  </div>
</template>
