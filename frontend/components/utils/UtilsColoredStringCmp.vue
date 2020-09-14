<template>
  <div class="utilsColoredStringCmpCnt">
    <b class="utilsColoredStringCmpBold" :style="{ color: `${color}` }">
      {{ highlight }}
    </b>
    {{ desc }}
  </div>
</template>

<script>
export default {
  name: 'UtilsColoredStringCmp',
  props: {
    highlight: {
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
.utilsColoredStringCmpCnt
  color: $text-light
  font-weight: normal
  letter-spacing: 0.2ch
  word-break: break-word
  overflow: hidden
  text-align: justify

.utilsColoredStringCmpBold
  color: $blue
  font-weight: bold
  text-transform: uppercase
  letter-spacing: 0.2ch
</style>
