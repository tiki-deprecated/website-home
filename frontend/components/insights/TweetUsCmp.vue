<template>
  <div class="ctrl">
    <div class="ctrlContainer">
      <div class="insightBox">
        <div class="insightHeader">Looking for a specific insight?</div>
        <span class="insightText"> Tweet it at us, we'll add it.</span>
      </div>
      <a
        class="twitterLink"
        href="https://twitter.com/my_tiki_"
        target="_blank"
      >
        <div class="twitter">
          <utils-svg-cmp name="twitter" class="twitterIcon" />
          <span class="twitterHandle">@my_tiki_</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'

export default {
  name: 'CompanyInfoCmp',
  components: { UtilsSvgCmp },
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

.insightBox
  font-family: $font-family-koara
  font-weight: lighter
  color: $tiki-black

.twitter
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  font-family: $font-family-nunito-sans

.twitterHandle
  color: #1DA1F2

a, a:hover, a:focus, a:active
  text-decoration: none
  color: inherit

@include for-phone
  .ctrl
    padding-top: 2.5em

  .ctrlContainer
    width: 86.15vw

  .insightHeader
    font-size: 1.95em
    margin-bottom: 2.3vh

  .insightText
    font-size: 1.32em

  .twitter
    padding: 7.4vh 0

  .twitterIcon
    width: 9.3vw
    padding-right: 1em

  .twitterHandle
    font-size: 1.7rem

@include for-tablet
</style>
