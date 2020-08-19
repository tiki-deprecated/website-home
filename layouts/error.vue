<template>
  <div class="errorCnt">
    <div class="errorCode">{{ error.statusCode }}</div>
    <div class="errorMessage">{{ error.message }}</div>
    <nuxt-link to="/" class="home" />
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped></style>
