<template>
  <div class="companyInfo">
    <div class="companyInfoContainer">
      <div class="infoText">
        <span>
          Data is a disaster and at the center of the biggest challenges we face
          online.
        </span>
        <br /><br />
        <span>
          We’re building <a class="tikiLink" href="https://mytiki.com">TIKI</a>,
          a powerful new technology to reshape how the world interacts with
          data.
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
        <br /><br />
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
    padding: 3vh 0

  .companyInfoContainer
    width: 86.15vw

  .infoText, .busProp
    font-size: 1.2rem

  .mascotImg
    width: 20vw
    margin-top: 5.5vh

  .mascotText
    font-size: .9rem
    padding-top: 1vh
    margin-bottom: 5.5vh

@include for-tablet
  .companyInfo
    display: flex
    justify-content: center
    align-items: center

  .companyInfoContainer
    width: 80vw

  .whoWeAreText
    font-size: 2rem
</style>
