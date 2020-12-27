<template>
  <div class="formHomeCmpOptCnt">
    <div @click="onYes">
      <utils-svg-cmp name="button/check" class="formHomeCmpOptCheck" />
      <div class="formHomeCmpOptText">YES</div>
    </div>
    <div @click="onNo">
      <utils-svg-cmp name="button/x" class="formHomeCmpOptX" />
      <div class="formHomeCmpOptText">NO</div>
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
      this.$store.commit('form_home/setOpt', opt)
      this.$store.commit('form_home/setPosDone')
      await optIn(
        this.$axios,
        this.$store.state.form_home.contact,
        '',
        opt
      ).then(function (data) {
        return data.success
      })
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

@include for-phone
  ::v-deep .formHomeCmpOptCheck.svg, ::v-deep .formHomeCmpOptX.svg
    height: 15vw

  .formHomeCmpOptText
    font-size: 4vw
    margin-top: 1vw

  .formHomeCmpOptCnt
    margin: 6vw auto 0 auto
    width: 50%
@include for-tablet
  ::v-deep .formHomeCmpOptCheck.svg, ::v-deep .formHomeCmpOptX.svg
    height: 4.5vw

  .formHomeCmpOptText
    font-size: 1.25vw
    margin-top: 0.25vw

  .formHomeCmpOptCnt
    margin: 2vw auto 0 auto
    width: 15%
</style>
