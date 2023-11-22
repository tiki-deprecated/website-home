<script setup lang="ts">


defineProps({
  cost: {
    type: String, 
    required: false,
  }
})
</script>

<template>
  <div class="flex flex-col text-lg">
    <p>The estimated cost to subscribe</p>
    <p>
      to this dataset is: <span class="text-green underline"> $3,000 - $4,000/month </span>
    </p>
  </div>
</template>
