<template>
  <div class="form382CmpLtdCnt">
    <utils-svg-cmp name="sketch/signup" class="form382CmpLtdSketch" />
    <div class="form382CmpLtdTextCnt">
      <div class="form382CmpLtdText">
        Beta access is limited to make sure everyone gets their fair (and
        significant) share.&nbsp;
        <b class="form382CmpLtdTextHlt"> Only {{ spotsRemaining }} left</b>
      </div>
      <utils-svg-cmp name="paint/warn" class="form382CmpLtdPaintWarn" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import { count } from '@/libs/api'

export default {
  name: 'Form382CmpLtd',
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

.form382CmpLtdTextCnt
  position: relative

.form382CmpLtdText
  font-family: $font-family-nunito
  color: $blue-dark
  font-weight: bold
  position: absolute
  top: 0
  left: 0
  z-index: 1

.form382CmpLtdTextHlt
  color: $red-dark
  font-weight: bold

.form382CmpLtdPaintWarn
  position: absolute

::v-deep .form382CmpLtdPaintWarn.svg > .warn
  fill: $red-dark

::v-deep .form382CmpLtdPaintWarn.svg > .layer1
  fill: $yellow

@include for-phone
  ::v-deep .form382CmpLtdSketch.svg
    height: 9vw

  .form382CmpLtdTextCnt
    height: 22vw

  .form382CmpLtdText
    margin-top: 5vw
    font-size: 4vw

  .form382CmpLtdPaintWarn
    bottom: -4%
    right: -3%

  ::v-deep .form382CmpLtdPaintWarn.svg
    height: 8vw

@include for-tablet
  ::v-deep .form382CmpLtdSketch.svg
    height: 3vw
    margin: 0 auto

  .form382CmpLtdTextCnt
    height: 6.75vw

  .form382CmpLtdText
    font-size: 1.25vw
    text-align: center
    top: 40%
    left: 50%
    transform: translate(-50%, -40%)
    width: 60%

  .form382CmpLtdPaintWarn
    bottom: 22%
    right: 16%

  ::v-deep .form382CmpLtdPaintWarn.svg
    height: 2.6vw
</style>
