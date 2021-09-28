<template>
  <div>
    <div class="blockWrapper">
      <div class="blockContainer">
        <div class="text">{{ count }}</div>
        <utils-svg-cmp name="home/header/block" class="block" />
      </div>
    </div>
    <div class="subtext">people have signed up</div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'
import { count } from '~/libs/api'

export default {
  name: 'HomeHeaderCountCmp',
  components: { UtilsSvgCmp },
  computed: {
    count() {
      const c = this.$store.state.signupCount
      return c === 0 || c == null ? '...' : Intl.NumberFormat('en-US').format(c)
    },
  },
  async mounted() {
    const rsp = await count(this.$axios).then(function (data) {
      return data
    })
    if (rsp.success) {
      this.$store.commit('setSignupCount', rsp.body.total)
    }
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

::v-deep .block.svg > .layer1
  fill: $yellow-xlight

::v-deep .block.svg > .layer2
  fill: $white

.blockWrapper
  position: relative

.block
  position: absolute
  z-index: 1
  height: 100%
  width: 100%

.text
  font-family: $font-family-koara
  font-weight: bold
  color: $blue-dark
  position: absolute
  z-index: 2
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.subtext
  text-align: center
  font-family: $font-family-koara
  font-weight: bold
  color: $blue-dark

@include for-phone
  .blockContainer
    height: 20vw

  .text
    font-size: 18vw

  .subtext
    margin-top: 2vw
    font-size: 5vw

@include for-tablet
  .blockContainer
    height: 6vw
    width: 20vw

  .text
    font-size: 4.5vw

  .subtext
    font-size: 1.2vw
</style>
