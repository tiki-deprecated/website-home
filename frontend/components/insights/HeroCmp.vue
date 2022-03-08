<template>
  <div class="hero">Hello World</div>
</template>

<script>
export default {
  name: 'HeroCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

@include for-phone

@include for-tablet
</style>
