<template>
  <div>
    <div v-if="!isSubmitted" class="signupOpt">
      <div @click="onYes">
        <utils-svg-cmp name="home/signup/check" class="btnCheck" />
        <div class="text">YES</div>
      </div>
      <div @click="onNo">
        <utils-svg-cmp name="home/signup/x" class="btnX" />
        <div class="text">NO</div>
      </div>
    </div>
    <div :class="{ loadingSubmit: isSubmitted }">
      <utils-svg-cmp
        name="home/signup/loading"
        class="loading"
        :class="{ loadingSubmit: isSubmitted }"
      />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'
import { post } from '~/libs/api'

export default {
  name: 'HomeSignupOptCmp',
  components: { UtilsSvgCmp },
  data() {
    return {
      opt: false,
      isSubmitted: false,
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
      this.isSubmitted = true
      const success = await post(
        this.$axios,
        this.$store.state.form_signup.contact,
        this.$store.state.code,
        opt,
        null
      ).then(function (data) {
        return data.success
      })
      if (success) this.$store.commit('form_signup/setPosDone')
      else {
        this.isSubmitted = false
        this.$store.commit('form_signup/setPosFailed')
      }
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"
.signupOpt
  display: flex
  align-items: center
  justify-content: space-between

.text
  color: $blue-dark
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center

::v-deep .btnX.svg > .icoLock, ::v-deep .btnCheck.svg > .icoLock
  fill: $white

::v-deep .btnX.svg > .border, ::v-deep .btnCheck.svg > .border
  fill: $gray-xxlight

::v-deep .btnX.svg > .bkg
  fill: $orange

::v-deep .btnX:hover.svg > .bkg
  fill: $orange-dark

::v-deep .btnCheck.svg > .bkg
  fill: $green

::v-deep .btnCheck:hover.svg > .bkg
  fill: $green-dark

.btnCheck, .btnX
  cursor: pointer

.loading
  fill: $blue-xlight
  width: 0
  margin: 0
  transition-property: transform
  transition-duration: 20s
  transition-timing-function: linear
  transition-delay: 0s

::v-deep .loadingSubmit.svg
  width: inherit

.loadingSubmit
  transform: rotate(-2000deg)

@include for-phone
  ::v-deep .btnCheck.svg, ::v-deep .btnX.svg
    height: 15vw

  .text
    font-size: 4vw
    margin-top: 1vw

  .signupOpt
    margin: 6vw auto 0 auto
    width: 50%

  .loadingSubmit
    height: 15vw
    margin: 6vw auto

@include for-tablet
  ::v-deep .btnCheck.svg, ::v-deep .btnX.svg
    height: 4.5vw

  .text
    font-size: 1.25vw
    margin-top: 0.25vw

  .signupOpt
    margin: 2vw auto 0 auto
    width: 15%

  .loadingSubmit
    height: 4.5vw
    margin: 2vw auto
</style>
