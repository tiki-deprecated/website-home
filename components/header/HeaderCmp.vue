<template>
  <div class="header">
    <div class="bkg">
      <div class="overlay" />
      <div class="blur" />
      <header-hero-cmp name="hero-home" type="jpg" class="hero" />
    </div>
    <div class="cnt">
      <header-icon-cmp class="icon" name="icon-solid" />
      <header-logo-cmp class="logo" />
    </div>
  </div>
</template>

<script>
import HeaderLogoCmp from '~/components/header/HeaderLogoCmp'
import HeaderIconCmp from '~/components/header/HeaderIconCmp'
import HeaderHeroCmp from '~/components/header/HeaderHeroCmp'

export default {
  name: 'HeaderCmp',
  components: { HeaderLogoCmp, HeaderIconCmp, HeaderHeroCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.header
  position: relative
  box-shadow: 0px 1px 1px rgba($orange, 0.25)

.header .hero .bkg
  width: 100%

.cnt
  position: absolute
  left: 0
  top: 50%
  transform: translateY(-50%)
  display: flex
  align-items: baseline
  justify-content: left

.icon
  width: 2em
  margin: 0 1em

.logo
  width: 6em

.bkg
  position: relative

.overlay
  background-color: white
  opacity: 75%
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%

.blur
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  backdrop-filter: blur(0px)

@include for-tablet
  .icon
    width: 5em

@include for-tablet
  .logo
    width: 16em
</style>
