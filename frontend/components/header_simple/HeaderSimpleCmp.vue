<template>
  <div class="headerSimpleCnt">
    <div class="headerSimpleLogoWrapper">
      <nuxt-link to="/">
        <utils-svg-cmp name="tiki/logo" class="headerSimpleLogo" />
      </nuxt-link>
    </div>
    <div class="headerSimpleHeading" v-html="sanitizeHeading" />
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'HeaderSimpleCmp',
  components: { UtilsSvgCmp },
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
  computed: {
    sanitizeHeading() {
      return this.heading
        .replace(/\*\*(.*?)\*\*/gm, '<b>$1</b>')
        .replace(/\\[\r\n]\s+/gm, '<br>')
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.headerSimpleCnt
  background: $blue-xxlight

.headerSimpleHeading
  color: $blue-dark
  font-family: $font-family-montserrat
  font-weight: 600

::v-deep .headerSimpleHeading b
  color: $orange
  font-weight: 600

::v-deep .headerSimpleLogo.svg
  fill: $black-dark

.headerSimpleLogoWrapper
  width: fit-content
  cursor: pointer

@include for-phone
  .headerSimpleCnt
    padding: 5vw

  ::v-deep .headerSimpleLogo
    height: 7vw

  .headerSimpleHeading
    margin-top: 12vw

  .headerSimpleHeading
    font-size: 8vw
    width: 85%
    margin-bottom: 5vw

@include for-tablet
  .headerSimpleCnt
    padding: 2vw

  ::v-deep .headerSimpleLogo
    height: 2vw

  .headerSimpleHeading
    margin-top: 4vw

  .headerSimpleHeading
    font-size: 3vw
    margin-bottom: 2vw
    width: 50%
</style>
