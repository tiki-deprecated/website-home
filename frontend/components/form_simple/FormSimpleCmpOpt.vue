<template>
  <div>
    <div v-if="!isSubmitted" class="formSimpleCmpOptCnt">
      <div @click="onYes">
        <utils-svg-cmp name="button/check" class="formSimpleCmpOptCheck" />
        <div class="formSimpleCmpOptText">YES</div>
      </div>
      <div @click="onNo">
        <utils-svg-cmp name="button/x" class="formSimpleCmpOptX" />
        <div class="formSimpleCmpOptText">NO</div>
      </div>
    </div>
    <div :class="{ formSimpleCmpOptLoadingSubmit: isSubmitted }">
      <utils-svg-cmp
        name="icon/loading"
        class="formSimpleCmpOptLoading"
        :class="{ formSimpleCmpOptLoadingSubmit: isSubmitted }"
      />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import { optIn } from '@/libs/api'

export default {
  name: 'FormSimpleCmpOpt',
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
.formSimpleCmpOptCnt
  display: flex
  align-items: center
  justify-content: space-between

.formSimpleCmpOptText
  color: $blue-dark
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center

::v-deep .formSimpleCmpOptX.svg > .ico, ::v-deep .formSimpleCmpOptCheck.svg > .ico
  fill: $white

::v-deep .formSimpleCmpOptX.svg > .border, ::v-deep .formSimpleCmpOptCheck.svg > .border
  fill: $gray-xxlight

::v-deep .formSimpleCmpOptX.svg > .bkg
  fill: $orange

::v-deep .formSimpleCmpOptX:hover.svg > .bkg
  fill: $orange-dark

::v-deep .formSimpleCmpOptCheck.svg > .bkg
  fill: $green

::v-deep .formSimpleCmpOptCheck:hover.svg > .bkg
  fill: $green-dark

.formSimpleCmpOptCheck, .formSimpleCmpOptX
  cursor: pointer

.formSimpleCmpOptLoading
  fill: $green
  width: 0
  margin: 0
  transition-property: transform
  transition-duration: 20s
  transition-timing-function: linear
  transition-delay: 0s

::v-deep .formSimpleCmpOptLoadingSubmit.svg
  width: inherit

.formSimpleCmpOptLoadingSubmit
  transform: rotate(-2000deg)

@include for-phone
  ::v-deep .formSimpleCmpOptCheck.svg, ::v-deep .formSimpleCmpOptX.svg
    height: 15vw

  .formSimpleCmpOptText
    font-size: 5vw
    margin-top: 1vw

  .formSimpleCmpOptCnt
    margin: 5vw auto 0 auto
    width: 50%

  .formSimpleCmpOptLoadingSubmit
    height: 15vw
    margin: 5vw auto

@include for-tablet
  ::v-deep .formSimpleCmpOptCheck.svg, ::v-deep .formSimpleCmpOptX.svg
    height: 4.5vw

  .formSimpleCmpOptText
    font-size: 1.25vw
    margin-top: 0.25vw

  .formSimpleCmpOptCnt
    margin: 1vw auto 0 auto
    width: 25%

  .formSimpleCmpOptLoadingSubmit
    height: 4.5vw
    margin: 1vw auto
</style>
