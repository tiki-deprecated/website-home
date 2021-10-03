<template>
  <div class="button">
    <div @click="onClick($event, name, url)">
      <utils-svg-cmp :name="`utils/footer/${name}`" class="icon" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'

export default {
  name: 'LinkSocialCmp',
  components: {
    UtilsSvgCmp,
  },
  props: {
    platform: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    name() {
      return this.platform.toLowerCase()
    },
  },
  methods: {
    onClick(clickEvent, name, href) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('social', {
        props: { platform: name },
      })
      const win = window.open(href, '_blank')
      win.focus()
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"
::v-deep .icon.svg
  fill: $white

@include for-phone
  ::v-deep .icon.svg
    height: 8vw

@include for-tablet
  ::v-deep .icon.svg
    height: 1.75vw
</style>
