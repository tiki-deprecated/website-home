<template>
  <div>
    <div v-if="!isSubmitted" class="headerControlCmpFormOptCnt">
      <div @click="onYes">
        <utils-svg-cmp
          name="button/check"
          class="headerControlCmpFormOptCheck"
        />
        <div class="headerControlCmpFormOptText">YES</div>
      </div>
      <div @click="onNo">
        <utils-svg-cmp name="button/x" class="headerControlCmpFormOptX" />
        <div class="headerControlCmpFormOptText">NO</div>
      </div>
    </div>
    <div :class="{ headerControlCmpFormOptLoadingSubmit: isSubmitted }">
      <utils-svg-cmp
        name="icon/loading"
        class="headerControlCmpFormOptLoading"
        :class="{ headerControlCmpFormOptLoadingSubmit: isSubmitted }"
      />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import { optIn } from '@/libs/api'

export default {
  name: 'HeaderControlCmpFormOpt',
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
.headerControlCmpFormOptCnt
  display: flex
  align-items: center
  justify-content: space-between

.headerControlCmpFormOptText
  color: $blue-dark
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center

::v-deep .headerControlCmpFormOptX.svg > .ico, ::v-deep .headerControlCmpFormOptCheck.svg > .ico
  fill: $white

::v-deep .headerControlCmpFormOptX.svg > .border, ::v-deep .headerControlCmpFormOptCheck.svg > .border
  fill: $gray-xxlight

::v-deep .headerControlCmpFormOptX.svg > .bkg
  fill: $orange

::v-deep .headerControlCmpFormOptX:hover.svg > .bkg
  fill: $orange-dark

::v-deep .headerControlCmpFormOptCheck.svg > .bkg
  fill: $green

::v-deep .headerControlCmpFormOptCheck:hover.svg > .bkg
  fill: $green-dark

.headerControlCmpFormOptCheck, .headerControlCmpFormOptX
  cursor: pointer

.headerControlCmpFormOptLoading
  fill: $green
  width: 0
  margin: 0
  transition-property: transform
  transition-duration: 20s
  transition-timing-function: linear
  transition-delay: 0s

::v-deep .headerControlCmpFormOptLoadingSubmit.svg
  width: inherit

.headerControlCmpFormOptLoadingSubmit
  transform: rotate(-2000deg)

@include for-phone
  ::v-deep .headerControlCmpFormOptCheck.svg, ::v-deep .headerControlCmpFormOptX.svg
    height: 15vw

  .headerControlCmpFormOptText
    font-size: 5vw
    margin-top: 1vw

  .headerControlCmpFormOptCnt
    margin: 5vw auto 0 auto
    width: 50%

  .headerControlCmpFormOptLoadingSubmit
    height: 15vw
    margin: 5vw auto

@include for-tablet
  ::v-deep .headerControlCmpFormOptCheck.svg, ::v-deep .headerControlCmpFormOptX.svg
    height: 4.5vw

  .headerControlCmpFormOptText
    font-size: 1.25vw
    margin-top: 0.25vw

  .headerControlCmpFormOptCnt
    margin: 2.5vw auto 0 auto
    width: 50%

  .headerControlCmpFormOptLoadingSubmit
    height: 4.5vw
    margin: 2.5vw auto

  .headerControlCmpFormOptCnt
    justify-content: space-evenly
</style>
