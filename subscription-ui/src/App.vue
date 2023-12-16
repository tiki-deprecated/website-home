<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SubscriptionUi from './components/SubscriptionUi.vue'
import AuthSheet from './components/AuthSheet.vue'

const token = ref<string>()

const handleToken = (submittedToken: string) => {
  token.value = submittedToken
  sessionStorage.setItem('authToken', token.value)
}
onMounted(() => {
  token.value = sessionStorage.getItem('authToken') ?? ''
})
</script>

<template>
  <auth-sheet v-if="!token" @submit="handleToken" />
  <subscription-ui />
</template>

<style scoped></style>
