<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['submit'])

const submit = () => {
    if(token.value !== undefined && token.value !== ''){
        emit('submit', token.value)
        return
    }
    error.value = 'The token field should not be empty'
}

const token = ref<string>()

const error = ref<string>()

</script>

<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-black bg-opacity-70 transition-opacity"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          class="bg-white flex-col gap-6 flex justify-center items-center relative overflow-hidden rounded-lg text-left shadow-xl transition-all px-12 w-[80vw] h-[80vh]"
        >
          <img src="../assets/images/pineapple_rounded.svg" alt="" class="w-32" />
          <h1 class="text-3xl">Hey! Thanks for choosing TIKI!</h1>
          <p>
            Before you can generate an estimate, we need your auth token to make it happen.
            <a href="https://mytiki.com/reference/intro/authentication" target="_blank" class="text-green">Click here to get it.</a>
          </p>
          <input
            type="password"
            class="border border-solid border-dark-gray/20 rounded-lg px-4 py-1.5"
            placeholder="Paste your token here..."
            v-model="token"
            @keydown="error = ''"
          />
          <button class="border py-2 bg-green rounded-xl w-60 text-white hover:bg-green/70" @click="submit">
            Continue
          </button>
          <p v-if="error" class="text-red text-sm font-normal">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
