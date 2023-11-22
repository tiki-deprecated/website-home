<script setup lang="ts">
const stats = ['700k Users', '1,5M Records', '2 Publishers']
</script>

<template>
  <span class="flex gap-5 text-lg py-2" v-for="stat of stats">
    <img src="../assets/images/progessbox.svg" alt="" /> {{ stat }}
  </span>
</template>
