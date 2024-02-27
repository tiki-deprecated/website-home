<script setup lang="ts">
import { ButtonState } from '@/interfaces/ButtonState';
import HeaderTitle from './HeaderTitle.vue';
import TextButton from './TextButton.vue';


const goToLogin = () => {
  window.location.href = 'https://account.mytiki.com/pages/login'
}
</script>

<template>
  <div class="w-3/5 pr-10 border-r border-solid border-tiki-black/10">
    <header-title />
    <h1 class="mt-8 text-tiki-gray font-normal text-md">Please Log In to access this page</h1>
    <text-button
      :state="ButtonState.ACTIVE"
      :text="'Log In'"
      @submit="goToLogin"
    />
  </div>
  <div class="w-2/5 flex justify-center items-center">
    <img src="../assets/images/tiki-pineapple-block.png" alt="" class="w-40" />
  </div>
</template>

<style scoped></style>
