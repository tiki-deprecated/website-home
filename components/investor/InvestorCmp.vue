<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="investorContainer">
    <investor-bkg-cmp class="bkgContainer" />
    <div class="cntContainer">
      <picture class="pineappleImg">
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcset="
            ~/assets/images/png/booty_pineapple_w_200.png   200w,
            ~/assets/images/png/booty_pineapple_w_659.png   659w,
            ~/assets/images/png/booty_pineapple_w_1048.png 1048w,
            ~/assets/images/png/booty_pineapple_w_1400.png 1400w
          "
          src="~/assets/images/png/booty_pineapple_w_1400.png"
          alt=""
          class="pineappleImgImg"
        />
      </picture>
      <div>
        <div class="title">Backed by</div>
        <picture class="vcImg">
          <img
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcset="
              ~/assets/images/png/vcs_w_200.png   200w,
              ~/assets/images/png/vcs_w_1400.png 1400w
            "
            src="~/assets/images/png/vcs_w_1400.png"
            alt="LAGO, 11 Tribes Ventures, Long Run Capital, Join Forces Ventures, ids.company, 1121.vc"
            class="vcImgImg desktop"
          />
          <img
            sizes="(max-width: 1348px) 100vw, 1348px"
            srcset="
              ~/assets/images/png/vcs_mobile_w_200.png   200w,
              ~/assets/images/png/vcs_mobile_w_1348.png 1348w
            "
            src="~/assets/images/png/vcs_mobile_w_1348.png"
            class="vcImgImg mobile"
            alt="LAGO, 11 Tribes Ventures, Long Run Capital, Join Forces Ventures, ids.company, 1121.vc"
          />
          <div class="angels">
            + Jim O'Neill, Deven Sharma, Ken Rapp, Kashish Mittal, Rikesh Govan,
            and many more amazing individuals.
          </div>
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
import investorBkgCmp from './investorBkgCmp'

export default {
  name: 'InvestorCmp',
  components: { investorBkgCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
@import "../../assets/styles/theme"

.investorContainer
  position: relative
  display: inline-block

.bkgContainer
  display: block
  height: auto
  width: 100%

.cntContainer
  position: absolute
  z-index: 2
  top: 0
  left: 0
  right: 0

.title
  font-weight: bold

@include for-phone
  .title
    text-align: center
    margin-top: 175px
    font-size: 2em

  .pineappleImg
    display: block
    width: 50%
    margin: 50px auto

  .pineappleImgImg
    width: 100%

  .cntContainer
    margin: auto
    width: 100%
    display: flex
    flex-wrap: wrap
    flex-direction: column-reverse

  .desktop
    display: none

  .mobile
    display: block

  .vcImg
    width: 90%
    display: block
    margin: 25px auto

  .vcImgImg
    width: 90%
    margin: auto

  .angels
    text-align: center
    font-size: .95em
    font-weight: 500
    margin-top: 50px

@include for-tablet
  .title
    text-align: right
    margin-top: 15vw
    margin-right: 15%
    font-size: 2em

  .vcImg
    max-width: 500px
    display: block
    margin-right: 5%
    margin-left: auto
    margin-top: 75px

  .vcImgImg
    width: 100%

  .angels
    text-align: right
    margin-left: auto
    font-size: .95em
    font-weight: 500
    max-width: 500px
    margin-top: 50px

  .pineappleImg
    display: block
    width: 20%
    margin-right: 10%
    margin-top: 30%
    margin-left: 20%

  .pineappleImgImg
    width: 100%

  .cntContainer
    margin: auto
    width: 100%
    display: flex

  .mobile
    display: none
</style>
