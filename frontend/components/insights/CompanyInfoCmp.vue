<template>
  <div class="companyInfo">
    <div class="companyInfoContainer">
      <div class="infoText">
        <span class="infoDesktop">
          Data is a disaster and at the center of the biggest challenges we face
          online. We’re building
          <a class="tikiLink" href="https://mytiki.com">TIKI</a>, a powerful new
          technology to reshape how the world interacts with data.
        </span>
        <span class="infoMobile">
          Data is a disaster and at the center of the biggest challenges we face
          online.
          <br /><br />
          <span>
            We’re building
            <a class="tikiLink" href="https://mytiki.com">TIKI</a>, a powerful
            new technology to reshape how the world interacts with data.
          </span>
        </span>
      </div>
      <div class="mascot">
        <img
          sizes="(max-width: 316px) 100vw, 316px"
          srcset="
            ~/assets/images/png/pineapple-floatie_w_200.png 200w,
            ~/assets/images/png/pineapple-floatie_w_316.png 316w
          "
          src="~/assets/images/png/pineapple-floatie_w_316.png"
          alt=""
          class="mascotImg"
        />
      </div>
      <div class="mascotText">(our adorable mascot)</div>
      <div class="busProp">
        <span>Users gain privacy, control, and compensation.</span>
        <br /><br class="infoMobile" />
        <span class="blueText"
          >Businesses get the insights they need without the hassle — no
          engineers or lawyers needed.</span
        >
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

.companyInfo
  background-color: $gray-1

.companyInfoContainer
  margin: 0 auto
  justify-content: center
  align-items: center

.disasterHeader
  font-family: $font-family-koara
  color: $tiki-blue
  font-weight: normal

.infoText
  font-family: $font-family-nunito-sans
  color: $tiki-black
  font-weight: 300

.tikiLink
  color: $blue
  text-decoration: underline

.mascot
  display: flex
  justify-content: center
  align-items: center

.mascotText
  font-family: $font-family-nunito-sans
  font-weight: 300
  color: $tiki-black
  text-align: center

.busProp
  font-family: $font-family-nunito-sans
  color: $tiki-black
  font-weight: 500

.blueText
  color: $blue

@include for-phone
  .companyInfo
    padding-top: 10vh

  .companyInfoContainer
    width: 86.15vw

  .disasterHeader
    font-size: 2.9rem

  .infoText, .busProp
    font-size: 1.2rem

  .mascotImg
    width: 20vw
    margin-top: 5.5vh

  .mascotText
    font-size: .9rem
    padding-top: 1vh
    margin-bottom: 5.5vh

  .infoDesktop
    display: none

  .infoMobile
    display: block

@include for-tablet
  .companyInfo
    padding-top: 10vh

  .companyInfoContainer
    width: 86.15%

  .disasterHeader
    font-size: 2.9rem
    margin-bottom: 4.3vh

  .infoText, .busProp
    font-size: 1.2rem

  .mascotImg
    width: 5vw
    margin-top: 5.5vh

  .mascotText
    font-size: .9rem
    padding-top: 1vh
    margin-bottom: 5.5vh

  .infoDesktop
    display: block

  .infoMobile
    display: none
</style>
