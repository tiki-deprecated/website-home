<template>
  <div class="utilsTitleSubtitleCmpCnt">
    <div class="utilsTitleSubtitleCmpTitle">{{ title }}</div>
    <div v-if="subtitle != null" class="utilsTitleSubtitleCmpSubtitle">
      {{ subtitle }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'UtilsTitleSubtitleCmp',
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
.utilsTitleSubtitleCmpCnt
  width: unset

.utilsTitleSubtitleCmpTitle
  color: $text
  width: fit-content
  font-size: large
  margin-bottom: .25em
  font-weight: bold
  text-transform: uppercase
  letter-spacing: 0.2ch

.utilsTitleSubtitleCmpSubtitle
  color: $text-light
  font-size: medium
  word-break: break-word
  overflow: hidden
  font-weight: normal
  letter-spacing: 0.2ch
  text-align: justify
  margin-top: 0.5em
</style>
