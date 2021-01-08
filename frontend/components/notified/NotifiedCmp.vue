<template>
  <div class="notifiedCnt">
    <utils-svg-cmp name="background/notified" class="notifiedBkg" />
    <nuxt-image src="/images/control.png" class="controlImage" />
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'NotifiedCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.notifiedCnt
  flex-grow: 1
  display: flex
  justify-content: space-between

::v-deep .notifiedBkg.svg > .bkg
  fill: $orange-xxlight

::v-deep .notifiedBkg.svg > .signup
  fill: $orange

::v-deep .notifiedBkg.svg > .notified
  fill: $blue-dark

@include for-phone
  .notifiedCnt
    height: 35vw

  ::v-deep .notifiedBkg.svg
    width: 40vw
    margin: 0 auto auto auto

  .controlImage
    width: 50vw
    margin-top: auto

@include for-tablet
  ::v-deep .notifiedBkg.svg
    width: 12vw
    margin: 0 0 0 10%

  .controlImage
    width: 18vw
    margin-top: auto
</style>
