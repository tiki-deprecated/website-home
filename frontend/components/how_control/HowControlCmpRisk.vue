<template>
  <div class="howControlCmpRiskCnt">
    <div class="howControlCmpRiskText">
      <div class="howControlCmpRiskHeading">
        Sounds risky, all my data being for sale....
      </div>
      <div class="howControlCmpRiskBody">
        <p>
          Selling/sharing your data shouldn’t be risky.
          <b>It can be anonymous and secure.</b>
        </p>
        <p>
          Take a simple example, company x wants to know what people like or
          don’t like about their new product. To get this answer, the company
          never needs to who said what.
        </p>
        <p>
          And this is exactly how it is with TIKI - it makes your data
          <b>as anonymous and secure it can possibly be.</b>
        </p>
      </div>
    </div>
    <div class="howControlCmpRiskImgWrapper">
      <img
        src="~/assets/images/control_w_772.png"
        alt=""
        class="howControlCmpRiskImg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowControlCmpRisk',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.howControlCmpRiskCnt
  display: flex
  flex-wrap: wrap
  width: 100%

.howControlCmpRiskImg
  height: 100%
  display: block
  margin: 0 auto

.howControlCmpRiskText
  font-family: $font-family-montserrat

.howControlCmpRiskHeading
  font-weight: 600

@include for-phone
  .howControlCmpRiskText, .howControlCmpRiskImgWrapper
    width: 100%

@include for-tablet
  .howControlCmpRiskCnt
    flex-direction: row-reverse

  .howControlCmpRiskText
    width: 45%
    margin: 0 auto
    font-size: 1vw

  .howControlCmpRiskHeading, .howControlCmpRiskBody
    width: 80%
    margin-right: auto
    margin-left: 0

  .howControlCmpRiskImgWrapper
    width: 45%
    height: 13vw
    margin: 0 auto

  .howControlCmpRiskHeading
    font-size: 1.25vw
</style>
