<script setup lang="ts">
const stats = ['700k Users', '1,5M Records', '2 Publishers']
</script>

<template>
  <span class="flex gap-5 text-lg" v-for="stat of stats">
    <img src="../assets/images/progessbox.svg" alt="" /> {{ stat }}
  </span>
</template>
