<template>
  <div class="formSignupCmpOptCnt">
    <div @click="onYes">
      <utils-svg-cmp name="button/check" class="formSignupCmpOptCheck" />
      <div class="formSignupCmpOptText">YES</div>
    </div>
    <div @click="onNo">
      <utils-svg-cmp name="button/x" class="formSignupCmpOptX" />
      <div class="formSignupCmpOptText">NO</div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'FormSignupCmpOpt',
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
      this.$store.commit('form_signup/setOpt', opt)
      this.$store.commit('form_signup/setPosDone')
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
.formSignupCmpOptCnt
  display: flex
  align-items: center
  justify-content: space-between

.formSignupCmpOptText
  color: $blue-dark
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center

::v-deep .formSignupCmpOptX.svg > .ico, ::v-deep .formSignupCmpOptCheck.svg > .ico
  fill: $white

::v-deep .formSignupCmpOptX.svg > .border, ::v-deep .formSignupCmpOptCheck.svg > .border
  fill: $gray-xxlight

::v-deep .formSignupCmpOptX.svg > .bkg
  fill: $orange

::v-deep .formSignupCmpOptX:hover.svg > .bkg
  fill: $orange-dark

::v-deep .formSignupCmpOptCheck.svg > .bkg
  fill: $green

::v-deep .formSignupCmpOptCheck:hover.svg > .bkg
  fill: $green-dark

@include for-phone
  ::v-deep .formSignupCmpOptCheck.svg, ::v-deep .formSignupCmpOptX.svg
    height: 15vw

  .formSignupCmpOptText
    font-size: 4vw
    margin-top: 1vw

  .formSignupCmpOptCnt
    margin: 6vw auto 0 auto
    width: 50%
@include for-tablet
  ::v-deep .formSignupCmpOptCheck.svg, ::v-deep .formSignupCmpOptX.svg
    height: 4.5vw

  .formSignupCmpOptText
    font-size: 1.25vw
    margin-top: 0.25vw

  .formSignupCmpOptCnt
    margin: 2vw auto 0 auto
    width: 25%
</style>
