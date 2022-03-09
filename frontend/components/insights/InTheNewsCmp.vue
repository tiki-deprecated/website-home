<template>
  <div class="ctrl">
    <div class="ctrlContainer">
      <div class="newsHeader">
        <div class="halfLine"><hr /></div>
        <span class="newsText">IN THE NEWS</span>
        <div class="halfLine"><hr /></div>
      </div>

      <div class="newsBody">
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcset="
            ~/assets/images/png/NewsSources_w_200.png   200w,
            ~/assets/images/png/NewsSources_w_792.png   792w,
            ~/assets/images/png/NewsSources_w_1135.png 1156w,
            ~/assets/images/png/NewsSources_w_1400.png 1400w
          "
          src="~/assets/images/png/NewsSources_w_1400.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyInfoCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.ctrl
    background-color: $gray-1

.ctrlContainer
    margin: 0 auto
    justify-content: center
    align-items: center

.newsHeader
    text-align: center
    color: $gray-4
    overflow: hidden
    display: flex
    align-items: center
    justify-content: center

.newsText
    font-family: "Nunito Sans ExtraBold"

@include for-phone

.halfLine
    width: 20vw
    float: left

.newsHeader
    font-size: 8vw

.newsText
    margin: 0vh 3vw

.ctrl
    padding-top: 2vh
    padding-bottom: 2.5vh

@include for-tablet
</style>
