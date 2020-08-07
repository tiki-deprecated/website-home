<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div v-if="subtitle != null" class="subtitle">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  name: 'CardTitleCmp',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style scoped lang="sass">
.container
  width: unset
  margin-bottom: 1em

.title
  color: $black
  width: fit-content
  font-size: large
  margin-bottom: .5em
  font-weight: bolder

.subtitle
  color: $text-light
  font-size: small
  word-break: break-word
  overflow: hidden
</style>
