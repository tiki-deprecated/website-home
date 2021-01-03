<template>
  <div>
    <div v-if="!isSubmitted" class="formHomeCmpOptCnt">
      <div @click="onYes">
        <utils-svg-cmp name="button/check" class="formHomeCmpOptCheck" />
        <div class="formHomeCmpOptText">YES</div>
      </div>
      <div @click="onNo">
        <utils-svg-cmp name="button/x" class="formHomeCmpOptX" />
        <div class="formHomeCmpOptText">NO</div>
      </div>
    </div>
    <div :class="{ formHomeCmpOptLoadingSubmit: isSubmitted }">
      <utils-svg-cmp
        name="icon/loading"
        class="formHomeCmpOptLoading"
        :class="{ formHomeCmpOptLoadingSubmit: isSubmitted }"
      />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import { optIn } from '@/libs/api'

export default {
  name: 'FormHomeCmpOpt',
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
.formHomeCmpOptCnt
  display: flex
  align-items: center
  justify-content: space-between

.formHomeCmpOptText
  color: $blue-dark
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center

::v-deep .formHomeCmpOptX.svg > .ico, ::v-deep .formHomeCmpOptCheck.svg > .ico
  fill: $white

::v-deep .formHomeCmpOptX.svg > .border, ::v-deep .formHomeCmpOptCheck.svg > .border
  fill: $gray-xxlight

::v-deep .formHomeCmpOptX.svg > .bkg
  fill: $orange

::v-deep .formHomeCmpOptX:hover.svg > .bkg
  fill: $orange-dark

::v-deep .formHomeCmpOptCheck.svg > .bkg
  fill: $green

::v-deep .formHomeCmpOptCheck:hover.svg > .bkg
  fill: $green-dark

.formHomeCmpOptCheck, .formHomeCmpOptX
  cursor: pointer

.formHomeCmpOptLoading
  fill: $blue-xlight
  width: 0
  margin: 0
  transition-property: transform
  transition-duration: 20s
  transition-timing-function: linear
  transition-delay: 0s

::v-deep .formHomeCmpOptLoadingSubmit.svg
  width: inherit

.formHomeCmpOptLoadingSubmit
  transform: rotate(-2000deg)

@include for-phone
  ::v-deep .formHomeCmpOptCheck.svg, ::v-deep .formHomeCmpOptX.svg
    height: 15vw

  .formHomeCmpOptText
    font-size: 4vw
    margin-top: 1vw

  .formHomeCmpOptCnt
    margin: 6vw auto 0 auto
    width: 50%

  .formHomeCmpOptLoadingSubmit
    height: 15vw
    margin: 6vw auto

@include for-tablet
  ::v-deep .formHomeCmpOptCheck.svg, ::v-deep .formHomeCmpOptX.svg
    height: 4.5vw

  .formHomeCmpOptText
    font-size: 1.25vw
    margin-top: 0.25vw

  .formHomeCmpOptCnt
    margin: 2vw auto 0 auto
    width: 15%

  .formHomeCmpOptLoadingSubmit
    height: 4.5vw
    margin: 2vw auto
</style>
