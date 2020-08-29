<template>
  <div class="cardTitleCmpCnt">
    <div class="cardTitleCmpTitle">{{ title }}</div>
    <div v-if="subtitle != null" class="cardTitleCmpSubtitle">
      {{ subtitle }}
    </div>
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
.cardTitleCmpCnt
  width: unset
  margin-bottom: 1em

.cardTitleCmpTitle
  color: $text
  width: fit-content
  font-size: large
  margin-bottom: .25em
  font-weight: bold
  text-transform: uppercase
  letter-spacing: 0.2ch

.cardTitleCmpSubtitle
  color: $text-light
  font-size: small
  word-break: break-word
  overflow: hidden
  font-weight: normal
  letter-spacing: 0.2ch
</style>
