<template>
  <div>
    <div v-if="!isSubmitted" class="formBetaCmpOptCnt">
      <div @click="onYes">
        <utils-svg-cmp name="button/check" class="formBetaCmpOptCheck" />
        <div class="formBetaCmpOptText">YES</div>
      </div>
      <div @click="onNo">
        <utils-svg-cmp name="button/x" class="formBetaCmpOptX" />
        <div class="formBetaCmpOptText">NO</div>
      </div>
    </div>
    <div :class="{ formBetaCmpOptLoadingSubmit: isSubmitted }">
      <utils-svg-cmp
        name="icon/loading"
        class="formBetaCmpOptLoading"
        :class="{ formBetaCmpOptLoadingSubmit: isSubmitted }"
      />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import { optIn } from '@/libs/api'

export default {
  name: 'FormBetaCmpOpt',
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
      await optIn(
        this.$axios,
        this.$store.state.form_signup.contact,
        this.$store.state.code,
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
.formBetaCmpOptCnt
  display: flex
  align-items: center
  justify-content: space-between

.formBetaCmpOptText
  color: $blue-dark
  font-family: $font-family-montserrat
  text-align: center

::v-deep .formBetaCmpOptX.svg > .ico, ::v-deep .formBetaCmpOptCheck.svg > .ico
  fill: $white

::v-deep .formBetaCmpOptX.svg > .border, ::v-deep .formBetaCmpOptCheck.svg > .border
  fill: $gray-xxlight

::v-deep .formBetaCmpOptX.svg > .bkg
  fill: $orange

::v-deep .formBetaCmpOptX:hover.svg > .bkg
  fill: $orange-dark

::v-deep .formBetaCmpOptCheck.svg > .bkg
  fill: $green

::v-deep .formBetaCmpOptCheck:hover.svg > .bkg
  fill: $green-dark

.formBetaCmpOptCheck, .formBetaCmpOptX
  cursor: pointer

.formBetaCmpOptLoading
  fill: $green
  width: 0
  margin: 0
  transition-property: transform
  transition-duration: 20s
  transition-timing-function: linear
  transition-delay: 0s

::v-deep .formBetaCmpOptLoadingSubmit.svg
  width: inherit

.formBetaCmpOptLoadingSubmit
  transform: rotate(-2000deg)

@include for-phone
  ::v-deep .formBetaCmpOptCheck.svg, ::v-deep .formBetaCmpOptX.svg
    height: 15vw

  .formBetaCmpOptText
    font-size: 5vw
    margin-top: 1vw

  .formBetaCmpOptCnt
    margin: 5vw auto 0 auto
    width: 50%

  .formBetaCmpOptLoadingSubmit
    height: 15vw
    margin: 5vw auto

@include for-tablet
  ::v-deep .formBetaCmpOptCheck.svg, ::v-deep .formBetaCmpOptX.svg
    height: 4.5vw

  .formBetaCmpOptText
    font-size: 1.25vw
    margin-top: 0.25vw

  .formBetaCmpOptCnt
    margin: 2vw auto 0 auto
    width: 50%

  .formBetaCmpOptLoadingSubmit
    height: 4.5vw
    margin: 2vw auto

  .formBetaCmpOptCnt
    justify-content: space-evenly
</style>
