<template>
  <div class="my-20 grid place-content-center">
    <h1 class="text-center">NOFX</h1>
    <img
      src="~/assets/images/309271768_195960966127335_6680437083617631206_n.jpg"
      alt=""
      class="my-10"
    />
    <h2 class="text-center"># of Songs: 305</h2>
    <button
      class="mx-auto my-5 w-fit rounded-md border border-black px-6 py-2 hover:shadow-sm"
      @click.stop.prevent="issue"
    >
      License
    </button>
  </div>
</template>

<script setup lang="ts">
import { LicenseUsecase, TitleTag } from '@mytiki/tiki-sdk-js'
import * as catalog from '~/assets/catalog.json'

const { $license } = useNuxtApp()

const issue = async () => {
  console.log('Issuing Licenses')
  for (const album of catalog.default) {
    for (const track of album.tracks) {
      const ptr = album.id + btoa(track)
      const use = {
        usecases: [LicenseUsecase.aiTraining()],
      }
      await $license(
        ptr,
        [use],
        'THIS IS A DEMO.',
        [TitleTag.audio()],
        album.album
      )
    }
  }
}
</script>
