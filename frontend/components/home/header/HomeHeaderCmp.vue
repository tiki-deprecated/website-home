<template>
  <div class="header">
    <home-header-img-cmp />
    <div class="content">
      <div class="wrapper">
        <home-header-nav-cmp class="nav" />
        <home-header-text-cmp class="text" />
        <home-header-count-cmp class="countCmp" />
        <div class="imgWrapper">
          <img
            sizes="(max-width: 1400px) 100vw, 1205px"
            srcset="
              ~/assets/images/png/home/header/news_w_200.png   200w,
              ~/assets/images/png/home/header/news_w_1205.png 1205w
            "
            src="~/assets/images/png/home/header/news_w_1205.png"
            alt=""
            class="img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeaderImgCmp from './HomeHeaderImgCmp'
import HomeHeaderNavCmp from './HomeHeaderNavCmp'
import HomeHeaderTextCmp from './HomeHeaderTextCmp'
import HomeHeaderCountCmp from './HomeHeaderCountCmp'

export default {
  name: 'HeaderHomeCmp',
  components: {
    HomeHeaderImgCmp,
    HomeHeaderNavCmp,
    HomeHeaderTextCmp,
    HomeHeaderCountCmp,
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

.imgWrapper
  width: fit-content

@include for-phone
  .header
    height: 185vw

  .wrapper
    padding: 4vw

  .text
    margin: 13vw 0 0 0

  .countCmp
    margin-top: 20vw

  .imgWrapper
    display: none

@include for-tablet
  .header
    height: 37vw

  .wrapper
    padding: 1.5vw

  .text
    margin: 5vw 0 0 5vw
    width: 42%

  .countCmp
    margin-top: 3vw
    width: fit-content
    margin-left: 5vw

  .imgWrapper
    position: absolute
    bottom: 1vw
    right: 10vw

  .img
    height: 7vw
</style>
