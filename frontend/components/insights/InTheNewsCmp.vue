<template>
  <div class="news">
    <div class="newsContainer">
      <div class="newsHeader">
        <hr class="halfLine" />
        <span class="newsText">IN THE NEWS</span>
        <hr class="halfLine" />
      </div>
      <div class="newsBody">
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcset="
            ~/assets/images/png/NewsSources_w_200.png        200w,
            ~/assets/images/png/NewsSources_w_792.png        792w,
            ~/assets/images/png/InTheNewsDesktop_w_1400.png 1400w
          "
          src="~/assets/images/png/InTheNewsDesktop_w_1400.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InTheNewsCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.news
  background-color: $gray-1

.newsContainer
  margin: 0 auto
  justify-content: center
  align-items: center

.newsHeader
  text-align: center
  color: $gray-4
  overflow: hidden
  display: flex
  align-items: center
  justify-content: space-between

.halfLine
  color: $gray-2
  background-color: $gray-2
  border-width: 0
  margin: 0
  height: 1px

.newsText
  font-family: $font-family-nunito-sans
  text-transform: uppercase
  font-weight: 800

@include for-phone
  .news
    padding-bottom: 2.5vh

  .newsHeader
    font-size: 1.5rem

  .halfLine
    width: 18vw

  .newsText
    margin: 0 .1em

@include for-tablet
  .newsBody > img
    width: 90%
    margin-left: 5%

  .news
    padding-top: 8vh
    padding-bottom: 2.5vh

  .newsHeader
    font-size: 2rem

  .halfLine
    width: 35vw

  .newsText
    margin: 0 .1em
</style>
