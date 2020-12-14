<template>
  <div class="mnySignupOptCnt">
    <div @click="onYes">
      <utils-svg-cmp name="money/btn-check" class="mnySignupOptCheck" />
      <div class="mnySignupOptText">YES</div>
    </div>
    <div @click="onNo">
      <utils-svg-cmp name="money/btn-x" class="mnySignupOptX" />
      <div class="mnySignupOptText">NO</div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'
export default {
  name: 'MnySignupOptCmp',
  components: { UtilsSvgCmp },
  data() {
    return {
      opt: false,
    }
  },
  methods: {
    onYes(inputEvent) {
      this.opt = true
      this.submit(this.opt)
    },
    onNo(inputEvent) {
      this.opt = false
      this.submit(this.opt)
    },
    submit(opt) {
      this.$store.commit('signup/setOpt', opt)
      this.$store.commit('signup/setPosDone')
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"
.mnySignupOptCnt
  display: flex
  align-items: center
  justify-content: space-between

.mnySignupOptText
  color: $money-blue-dark
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center

::v-deep .mnySignupOptX.svg > .ico, ::v-deep .mnySignupOptCheck.svg > .ico
  fill: $money-white

::v-deep .mnySignupOptX.svg > .border, ::v-deep .mnySignupOptCheck.svg > .border
  fill: $money-gray-xxlight

::v-deep .mnySignupOptX.svg > .bkg
  fill: $money-orange

::v-deep .mnySignupOptX:hover.svg > .bkg
  fill: $money-orange-dark

::v-deep .mnySignupOptCheck.svg > .bkg
  fill: $money-green

::v-deep .mnySignupOptCheck:hover.svg > .bkg
  fill: $money-green-dark

@include for-phone
  ::v-deep .mnySignupOptCheck.svg, ::v-deep .mnySignupOptX.svg
    height: 15vw

  .mnySignupOptText
    font-size: 4vw
    margin-top: 1vw

  .mnySignupOptCnt
    margin: 6vw auto 0 auto
    width: 50%
@include for-tablet
  ::v-deep .mnySignupOptCheck.svg, ::v-deep .mnySignupOptX.svg
    height: 4.5vw

  .mnySignupOptText
    font-size: 1.25vw
    margin-top: 0.25vw

  .mnySignupOptCnt
    margin: 2vw auto 0 auto
    width: 25%
</style>
