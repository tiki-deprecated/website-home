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
import { optIn } from '@/libs/api'

export default {
  name: 'FormAffiliateCmpOpt',
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
      this.$store.commit('form_affiliate/setOpt', opt)
      // eslint-disable-next-line no-unused-vars
      const rsp = await optIn(
        this.$axios,
        this.$store.state.form_affiliate.contact,
        this.$store.state.form_affiliate.code,
        opt
      ).then(function (data) {
        return data.success
      })
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
  color: $blue-dark
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center

::v-deep .formAffiliateCmpOptX.svg > .ico, ::v-deep .formAffiliateCmpOptCheck.svg > .ico
  fill: $white

::v-deep .formAffiliateCmpOptX.svg > .border, ::v-deep .formAffiliateCmpOptCheck.svg > .border
  fill: $gray-xxlight

::v-deep .formAffiliateCmpOptX.svg > .bkg
  fill: $orange

::v-deep .formAffiliateCmpOptX:hover.svg > .bkg
  fill: $orange-dark

::v-deep .formAffiliateCmpOptCheck.svg > .bkg
  fill: $green

::v-deep .formAffiliateCmpOptCheck:hover.svg > .bkg
  fill: $green-dark

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
