<template>
  <div class="signupLtd">
    <utils-svg-cmp name="home/signup/signup" class="sketch" />
    <div class="textContainer">
      <div class="text">
        Hurry up! We only have
        <b class="highlight">{{ spotsRemaining }}</b> spaces left. Sign up below
        to claim your spot when we launch.
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'
import { count } from '~/libs/api'

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
@import "assets/styles/mixins"

.textContainer
  position: relative

.text
  font-family: $font-family-nunito
  color: $blue-dark
  font-weight: bold
  position: absolute
  top: 0
  left: 0
  z-index: 1

.highlight
  color: $red-dark
  font-weight: bold

@include for-phone
  ::v-deep .sketch.svg
    height: 9vw
    margin: 0 auto

  .textContainer
    height: 22vw

  .text
    margin-top: 5vw
    font-size: 4vw
    text-align: center

@include for-tablet
  ::v-deep .sketch.svg
    height: 3vw
    margin: 0 auto

  .textContainer
    height: 5vw

  .text
    font-size: 1.25vw
    text-align: center
    margin-top: 1.5vw
    width: 100%
</style>
