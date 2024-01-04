<script setup lang="ts">
import LoadingIcon from '../assets/images/pineapple_rounded.svg'
</script>

<template>
  <div class="flex h-screen w-screen relative">
    <div
      class="absolute bg-white bg-opacity-50 z-10 h-full w-full flex items-center justify-center"
    >
      <div class="flex items-center flex-col">
        <LoadingIcon alt="Loading icon" class="w-24 animate-spin" />
      </div>
    </div>
  </div>
</template>
