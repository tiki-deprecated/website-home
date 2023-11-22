<script lang="ts" setup>

const stats = ["700k Users", "1,5M Records", "2 Publishers"]
</script>

<template>
    <div class="flex flex-col justify-center text-center">
        <p class="px-2">The estimated cost to subscribe</p>
        <p class="px-5">
          to this dataset is: <span class="text-green underline"> $3,000 - $4,000/month </span>
        </p>
    </div>
       <span class="flex gap-5 text-lg" v-for="stat of stats">
        <img src="../assets/images/progessbox.svg" alt=""> {{stat}}
       </span> 



</template>

<style>
</style>