<template>
  <div class="formAffiliateCmpOptCnt">
    <div @click="onYes">
      <utils-svg-cmp name="button/check" class="formAffiliateCmpOptCheck" />
      <div class="formAffiliateCmpOptText">YES</div>
    </div>
    <div @click="onNo">
      <utils-svg-cmp name="button/x" class="formAffiliateCmpOptX" />
      <div class="formAffiliateCmpOptText">NO</div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'FormAffiliateCmpOpt',
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
      this.$store.commit('form_affiliate/setOpt', opt)
      this.$store.commit('form_affiliate/setPosDone')
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
.formAffiliateCmpOptCnt
  display: flex
  align-items: center
  justify-content: space-between

.formAffiliateCmpOptText
  color: $money-blue-dark
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center

::v-deep .formAffiliateCmpOptX.svg > .ico, ::v-deep .formAffiliateCmpOptCheck.svg > .ico
  fill: $money-white

::v-deep .formAffiliateCmpOptX.svg > .border, ::v-deep .formAffiliateCmpOptCheck.svg > .border
  fill: $money-gray-xxlight

::v-deep .formAffiliateCmpOptX.svg > .bkg
  fill: $money-orange

::v-deep .formAffiliateCmpOptX:hover.svg > .bkg
  fill: $money-orange-dark

::v-deep .formAffiliateCmpOptCheck.svg > .bkg
  fill: $money-green

::v-deep .formAffiliateCmpOptCheck:hover.svg > .bkg
  fill: $money-green-dark

@include for-phone
  ::v-deep .formAffiliateCmpOptCheck.svg, ::v-deep .formAffiliateCmpOptX.svg
    height: 15vw

  .formAffiliateCmpOptText
    font-size: 4vw
    margin-top: 1vw

  .formAffiliateCmpOptCnt
    margin: 6vw auto 0 auto
    width: 50%
@include for-tablet
  ::v-deep .formAffiliateCmpOptCheck.svg, ::v-deep .formAffiliateCmpOptX.svg
    height: 4.5vw

  .formAffiliateCmpOptText
    font-size: 1.25vw
    margin-top: 0.25vw

  .formAffiliateCmpOptCnt
    margin: 2vw auto 0 auto
    width: 25%
</style>
