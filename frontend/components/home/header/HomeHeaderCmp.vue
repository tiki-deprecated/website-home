<template>
  <div class="header">
    <home-header-img-cmp />
    <div class="content">
      <div class="wrapper">
        <home-header-nav-cmp class="nav" />
        <home-header-text-cmp class="text" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeaderImgCmp from './HomeHeaderImgCmp'
import HomeHeaderNavCmp from './HomeHeaderNavCmp'
import HomeHeaderTextCmp from './HomeHeaderTextCmp'

export default {
  name: 'HeaderHomeCmp',
  components: {
    HomeHeaderImgCmp,
    HomeHeaderNavCmp,
    HomeHeaderTextCmp,
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.header
  background: $tan-light
  position: relative
  width: 100%

.content
  position: absolute
  top: 0
  left: 0
  z-index: 2
  height: 100%
  width: 100%

.wrapper
  position: relative

.text
  font-family: $font-family-montserrat
  font-weight: 600

.nav
  display: flex
  align-items: center
  justify-content: space-between

@include for-phone
  .header
    height: 160vw

  .wrapper
    padding: 4vw

  .text
    margin: 13vw 0 0 0

@include for-tablet
  .header
    height: 30vw

  .wrapper
    padding: 1.5vw

  .text
    margin: 5vw 0 0 5vw
    width: 42%
</style>
