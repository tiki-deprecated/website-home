<script setup lang="ts">
import { type PropType } from 'vue';
defineProps({
  stats: {
    type: Array as PropType<string[]>, 
    required: false,
  }
})

</script>

<template>
  <span class="flex gap-5 text-lg py-2 dark:text-white" v-for="stat of stats">
    <img src="../assets/images/progessbox.svg" alt="" /> {{ stat }}
  </span>
</template>
