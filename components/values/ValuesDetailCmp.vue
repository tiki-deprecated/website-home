<template>
  <div class="valuesDetailCmpCnt">
    <b class="valuesDetailCmpBold" :style="{ color: `${color}` }">
      {{ value }}
    </b>
    {{ desc }}
  </div>
</template>

<script>
export default {
  name: 'ValuesDetailCmp',
  props: {
    value: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.valuesDetailCmpCnt
  color: $text-light
  font-size: small
  font-weight: normal
  letter-spacing: 0.2ch
  word-break: break-word
  overflow: hidden

.valuesDetailCmpBold
  color: $blue
  font-size: small
  font-weight: bold
  text-transform: uppercase
  letter-spacing: 0.2ch
</style>
