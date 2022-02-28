<template>
  <div class="pain" :style="css">
    <div class="userPain">
      As <b class="painBold">people</b>, too often our data is used to our
      detriment for profit.
    </div>
    <div class="bizPain">
      Customer data is transformative.<br />
      Many <b class="painBold">businesses</b> depend on it, even more need it.
    </div>
  </div>
</template>

<script>
export default {
  name: 'PainCmp',
  components: {},
  computed: {
    css() {
      if (process.client) {
        const width = window.innerWidth
        const height = window.innerHeight
        const angle = Math.atan(height / width)
        return {
          '--bg-deg': '-' + angle + 'rad',
        }
      } else {
        return {
          '--bg-deg': '-65deg',
        }
      }
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.pain
  height: 100vh
  width: 100%
  position: relative

.userPain, .bizPain
  font-family: $font-family-koara
  font-weight: lighter
  position: absolute

.userPain
  color: $yellow
  text-align: left

.bizPain
  color: $tiki-purple
  text-align: right

.painBold
  font-weight: normal

@include for-phone
  .pain
    background-image: linear-gradient(var(--bg-deg), $gray-1 50%, $tiki-purple 50%)

  .userPain, .bizPain
    font-size: 7vw
    width: 60%

  .userPain
    top: 20%
    left: 5%

  .bizPain
    bottom: 20%
    right: 5%

@include for-tablet
  .pain
    background-image: linear-gradient(-90deg, $gray-1 50%, $tiki-purple 50%)

  .userPain, .bizPain
    font-size: 3vw
    width: 40%

  .userPain
    top: 50%
    left: 5%
    -ms-transform: translateY(-50%)
    transform: translateY(-50%)

  .bizPain
    top: 50%
    right: 5%
    -ms-transform: translateY(-50%)
    transform: translateY(-50%)
</style>
