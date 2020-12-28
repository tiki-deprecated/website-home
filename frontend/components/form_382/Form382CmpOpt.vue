<template>
  <div class="form382CmpOptCnt">
    <div @click="onYes">
      <utils-svg-cmp name="button/check" class="form382CmpOptCheck" />
      <div class="form382CmpOptText">YES</div>
    </div>
    <div @click="onNo">
      <utils-svg-cmp name="button/x" class="form382CmpOptX" />
      <div class="form382CmpOptText">NO</div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import { optIn } from '@/libs/api'

export default {
  name: 'Form382CmpOpt',
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
.form382CmpOptCnt
  display: flex
  align-items: center
  justify-content: space-between

.form382CmpOptText
  color: $blue-dark
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center

::v-deep .form382CmpOptX.svg > .ico, ::v-deep .form382CmpOptCheck.svg > .ico
  fill: $white

::v-deep .form382CmpOptX.svg > .border, ::v-deep .form382CmpOptCheck.svg > .border
  fill: $gray-xxlight

::v-deep .form382CmpOptX.svg > .bkg
  fill: $orange

::v-deep .form382CmpOptX:hover.svg > .bkg
  fill: $orange-dark

::v-deep .form382CmpOptCheck.svg > .bkg
  fill: $green

::v-deep .form382CmpOptCheck:hover.svg > .bkg
  fill: $green-dark

.form382CmpOptCheck, .form382CmpOptX
  cursor: pointer

@include for-phone
  ::v-deep .form382CmpOptCheck.svg, ::v-deep .form382CmpOptX.svg
    height: 15vw

  .form382CmpOptText
    font-size: 4vw
    margin-top: 1vw

  .form382CmpOptCnt
    margin: 6vw auto 0 auto
    width: 50%
@include for-tablet
  ::v-deep .form382CmpOptCheck.svg, ::v-deep .form382CmpOptX.svg
    height: 4.5vw

  .form382CmpOptText
    font-size: 1.25vw
    margin-top: 0.25vw

  .form382CmpOptCnt
    margin: 2vw auto 0 auto
    width: 25%
</style>
