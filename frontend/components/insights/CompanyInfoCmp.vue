<template>
  <div class="ctrl">
    <div class="ctrlContainer">
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

      <div class="mascotText">(Our adorable mascot)</div>

      <div class="infoText busProp">
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

.tikiLink
  color: $blue
  text-decoration: underline

.ctrl
  background-color: $gray-1
  padding-top: 25px
  padding-bottom: 52px

.ctrlContainer
  width: 86.15vw
  margin: 0 auto
  justify-content: center
  align-items: center

.mascot
  display: flex
  justify-content: center
  align-items: center

.mascotImg
  width: 20vw
  max-width: 200px
  margin-top: 36px

.mascotText
  text-align: center
  font-size: 14px
  padding-top: 10.7px
  margin-bottom: 37px

.busProp
  font-weight: bold

.blueText
  color: $blue

.infoText
  font-family: $font-family-nunito-sans
  color: $black
  font-size: 18px

@include for-phone

@include for-tablet
  .ctrl
    display: flex
    justify-content: center
    align-items: center

  .ctrlContainer
    width: 80vw

  .whoWeAreText
    font-size: 25px
</style>
