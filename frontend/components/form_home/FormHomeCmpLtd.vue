<template>
  <div class="formHomeCmpLtdCnt">
    <utils-svg-cmp name="sketch/signup" class="formHomeCmpLtdSketch" />
    <div class="formHomeCmpLtdTextCnt">
      <div class="formHomeCmpLtdText">
        Hurry up! We only have
        <b class="formHomeCmpLtdTextHlt">{{ spotsRemaining }}</b> spaces left.
        Sign up below to claim your spot when we launch.
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import { count } from '@/libs/api'

export default {
  name: 'FormHomeCmpLtd',
  components: { UtilsSvgCmp },
  computed: {
    spotsRemaining() {
      return this.$store.getters.remainingSpots
    },
  },
  mounted() {
    if (this.$store.state.signupCount === 0) this.updateCount()
  },
  methods: {
    async updateCount() {
      const rsp = await count(this.$axios).then(function (data) {
        return data
      })
      if (rsp.success) {
        this.$store.commit('setSignupCount', rsp.body.total)
      }
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formHomeCmpLtdTextCnt
  position: relative

.formHomeCmpLtdText
  font-family: $font-family-nunito
  color: $blue-dark
  font-weight: bold
  position: absolute
  top: 0
  left: 0
  z-index: 1

.formHomeCmpLtdTextHlt
  color: $red-dark
  font-weight: bold

.formHomeCmpLtdPaintWarn
  position: absolute

::v-deep .formHomeCmpLtdPaintWarn.svg > .warn
  fill: $red-dark

::v-deep .formHomeCmpLtdPaintWarn.svg > .layer1
  fill: $yellow

@include for-phone
  ::v-deep .formHomeCmpLtdSketch.svg
    height: 9vw
    margin: 0 auto

  .formHomeCmpLtdTextCnt
    height: 22vw

  .formHomeCmpLtdText
    margin-top: 5vw
    font-size: 4vw
    text-align: center

@include for-tablet
  ::v-deep .formHomeCmpLtdSketch.svg
    height: 3vw
    margin: 0 auto

  .formHomeCmpLtdTextCnt
    height: 5vw

  .formHomeCmpLtdText
    font-size: 1.25vw
    text-align: center
    margin-top: 1.5vw
    width: 100%
</style>
