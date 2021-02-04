<template>
  <div class="notifiedCnt">
    <utils-svg-cmp name="background/notified" class="notifiedBkg" />
    <img
      sizes="(max-width: 772px) 100vw, 772px"
      srcset="
        ~/assets/images/png/control/control_w_200.png 200w,
        ~/assets/images/png/control/control_w_479.png 479w,
        ~/assets/images/png/control/control_w_772.png 772w
      "
      src="~/assets/images/png/control/control_w_772.png"
      alt=""
      class="controlImage"
    />
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
  ::v-deep .notifiedBkg.svg
    width: 40vw
    margin: 0 auto auto auto

  .controlImage
    width: 50vw
    margin-top: auto

@include for-tablet
  ::v-deep .notifiedBkg.svg
    width: 10vw
    margin: 0 0 0 10%

  .controlImage
    width: 15vw
    margin-top: auto
</style>
