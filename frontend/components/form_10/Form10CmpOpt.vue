<template>
  <div class="form10CmpOptCnt">
    <div @click="onYes">
      <utils-svg-cmp name="button/check" class="form10CmpOptCheck" />
      <div class="form10CmpOptText">YES</div>
    </div>
    <div @click="onNo">
      <utils-svg-cmp name="button/x" class="form10CmpOptX" />
      <div class="form10CmpOptText">NO</div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import { optIn } from '@/libs/api'

export default {
  name: 'Form10CmpOpt',
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
.form10CmpOptCnt
  display: flex
  align-items: center
  justify-content: space-between

.form10CmpOptText
  color: $blue-dark
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center

::v-deep .form10CmpOptX.svg > .ico, ::v-deep .form10CmpOptCheck.svg > .ico
  fill: $white

::v-deep .form10CmpOptX.svg > .border, ::v-deep .form10CmpOptCheck.svg > .border
  fill: $gray-xxlight

::v-deep .form10CmpOptX.svg > .bkg
  fill: $orange

::v-deep .form10CmpOptX:hover.svg > .bkg
  fill: $orange-dark

::v-deep .form10CmpOptCheck.svg > .bkg
  fill: $green

::v-deep .form10CmpOptCheck:hover.svg > .bkg
  fill: $green-dark

.form10CmpOptCheck, .form10CmpOptX
  cursor: pointer

@include for-phone
  ::v-deep .form10CmpOptCheck.svg, ::v-deep .form10CmpOptX.svg
    height: 15vw

  .form10CmpOptText
    font-size: 4vw
    margin-top: 1vw

  .form10CmpOptCnt
    margin: 3vw auto 0 auto
    width: 50%

@include for-tablet
  ::v-deep .form10CmpOptCheck.svg, ::v-deep .form10CmpOptX.svg
    height: 4.5vw

  .form10CmpOptText
    font-size: 1.25vw
    margin-top: 0.25vw

  .form10CmpOptCnt
    margin: 1vw auto 0 auto
    width: 25%
</style>
