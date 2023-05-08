<template>
  <div class="grid h-[100vh] place-content-center">
    <label for="email" class="sr-only">Email</label>
    <input
      id="search"
      type="text"
      name="text"
      class="block w-full rounded-md border border-blue px-6 py-2 text-black placeholder:text-black-xlight sm:text-sm sm:leading-6"
      placeholder="what do you want to hear?"
      @keyup.stop.prevent="submit"
    />
  </div>
</template>

<script lang="ts" setup>
import { navigateTo } from '#app'

const submit = (event) => {
  if (event.keyCode === 13 && event.target.value.toLowerCase() === 'nofx')
    navigateTo('player')
}
</script>
