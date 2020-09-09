<template>
  <div class="valuesHeadingCmpCnt">
    <div class="valuesHeadingCmpTitle">{{ title }}</div>
    <div v-if="subtitle != null" class="valuesHeadingCmpSubtitle">
      {{ subtitle }}
    </div>
    <div v-if="extended != null" class="valuesHeadingCmpExtended">
      {{ extended }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ValuesHeadingCmp',
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
    extended: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style scoped lang="sass">
.valuesHeadingCmpCnt
  width: unset

.valuesHeadingCmpTitle
  color: $text
  width: fit-content
  font-size: large
  margin-bottom: .25em
  font-weight: bold
  text-transform: uppercase
  letter-spacing: 0.2ch

.valuesHeadingCmpSubtitle, .valuesHeadingCmpExtended
  color: $text-light
  font-size: small
  word-break: break-word
  overflow: hidden
  font-weight: normal
  letter-spacing: 0.2ch

.valuesHeadingCmpExtended
  margin-top: 1.5em
</style>
