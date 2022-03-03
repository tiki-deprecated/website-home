<template>
  <div class="own">
    <div class="title">USER DATA OWNERSHIP</div>
    <div class="subtitle">
      When you own something you decide what happens to it. You can sell it,
      license it, destroy it, &
      <a
        class="subtitle_link"
        href="https://wikipedia.org/wiki/Property_rights_(economics)"
        target="_blank"
        >more</a
      >.
    </div>
    <a class="imgContainer" href="https://wikipedia.org/wiki/Free_market">
      <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        srcset="
          ~/assets/images/png/free-market_w_200.png   200w,
          ~/assets/images/png/free-market_w_640.png   640w,
          ~/assets/images/png/free-market_w_973.png   973w,
          ~/assets/images/png/free-market_w_1400.png 1400w
        "
        src="~/assets/images/png/free-market_w_1400.png"
        alt="CREATES THE WORLD'S FIRST FREE MARKET FOR DATA"
        class="img"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'OwnCmp',
  components: {},
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.own
  height: 100vh
  width: 100%
  position: relative
  background-color: $tiki-blue

.title
  font-family: $font-family-koara
  font-weight: normal
  color: $white
  text-align: center
  display: inline-block

.subtitle
  font-family: $font-family-nunito-sans
  font-weight: normal
  color: $gray-2
  text-align: left
  display: block
  text-transform: uppercase

.subtitle_link, .subtitle_link:hover, .subtitle_link:link, .subtitle_link:visited, .subtitle_link:active
  color: $gray-2

.imgContainer
  display: block

.img
  width: 100%

@include for-phone
  .title
    font-size: 10vw
    margin: 12vh auto 0 auto

  .subtitle
    font-size: 4.5vw
    margin: 6vh auto 0 auto
    width: 75%

  .imgContainer
    width: 95%
    margin: 8vh auto 0 auto

@include for-tablet
  .title
    font-size: 3.5vw
    margin: 12vh auto 0 auto
    padding-left: 5vw

  .subtitle
    font-size: 1.5vw
    margin: 6vh auto 0 5vw
    width: 33%

  .imgContainer
    position: absolute
    width: 33%
    top: 20%
    right: 10%
</style>
