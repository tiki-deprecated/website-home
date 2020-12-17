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
import { optIn } from '@/libs/api'

export default {
  name: 'FormSignupCmpOpt',
  components: { UtilsSvgCmp },
  data() {
    return {
      opt: false,
    }
  },
  methods: {
    async onYes(inputEvent) {
      this.opt = true
      await this.submit(this.opt)
    },
    async onNo(inputEvent) {
      this.opt = false
      await this.submit(this.opt)
    },
    async submit(opt) {
      this.$store.commit('form_signup/setOpt', opt)
      // eslint-disable-next-line no-unused-vars
      const rsp = await optIn(
        this.$axios,
        this.$store.state.form_signup.contact,
        '',
        opt
      ).then(function (data) {
        return data.success
      })
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
    width: 15%
</style>
