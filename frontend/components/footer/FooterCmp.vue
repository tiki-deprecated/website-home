<template>
  <div class="footerCmpCnt">
    <div class="footerCmpCopyright">{{ cms.copyright }}</div>
  </div>
</template>

<script>
export default {
  name: 'FooterCmp',
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.footerCmpCnt
  margin-top: 1em

.footerCmpCopyright
  color: $text
  font-size: smaller
  text-align: center
  padding: 1em 0
</style>
