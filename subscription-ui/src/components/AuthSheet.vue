<script setup lang="ts">
import { ref } from 'vue'
import { Subscription } from '@/subscription'
import type { ProfileInfo } from '@/interfaces/ProfileInfo'
import HeaderTitle from './HeaderTitle.vue'

const subscription = new Subscription()

const emit = defineEmits(['submit'])

const submit = async () => {
  if (token.value !== undefined && token.value !== '') {
    const response: ProfileInfo = await subscription.validate(token.value)
    if (!response.orgId && !response.userId) {
      error.value = 'Invalid auth token'
      return
    }
    sessionStorage.setItem('userId', response.userId)
    sessionStorage.setItem('orgId', response.orgId)
    emit('submit', token.value)
    return
  }
  error.value = 'The token field should not be empty'
}

const token = ref<string>()

const error = ref<string>()
</script>

<template>
    <div class="w-3/5 m-5 px-10 py-4 border-r border-solid border-tiki-black/10">
      <header-title />
      <h1 class="mt-4 text-tiki-gray font-semibold">API KEY</h1>
      <label for="" class="text-tiki-gray font-normal mt-1 block">
        Copy and paste your API Key from
        <a
          class="text-green underline"
          href="https://mytiki.com/reference/intro/authentication"
          target="_blank"
          >Get Access</a
        >
        to start.
      </label>
      <input
        v-model="token"
        type="password"
        class="block border border-tiki-black/10 border-solid rounded-md flex gap-2 p-2.5 mt-4 w-full"
      />
      <div class="w-full flex justify-end mt-4">
        <button
          class="mt-6 bg-green text-white w-32 px-2 py-3 text-lg rounded-lg"
          @click="submit"
          :disabled="!token"
          :class="!token ? 'bg-green/50' : ''"
        >
          Continue
        </button>
      </div>
    </div>
    <div class="w-2/5 flex justify-center">
      <img src="../assets/images/tiki-pineapple-block.svg" alt="" class="w-40" />
    </div>

</template>

<style scoped></style>
