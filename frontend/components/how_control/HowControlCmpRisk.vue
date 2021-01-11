<template>
  <div class="howControlCmpRiskCnt">
    <div class="howControlCmpRiskText">
      <div class="howControlCmpRiskHeading">
        Sounds risky, all my data being for sale....
      </div>
      <div class="howControlCmpRiskBody">
        <p>
          Selling/sharing your data shouldn’t be risky. It can be anonymous and
          secure.
        </p>
        <p>
          Take a simple example, company x wants to know what people like or
          don’t like about their new product. To get this answer, the company
          never needs to who said what.
        </p>
        <p>
          And this is exactly how it is with TIKI - it makes your data as
          anonymous and secure it can possibly be.
        </p>
      </div>
    </div>
    <div class="howControlCmpRiskImgWrapper">
      <img
        sizes="(max-width: 772px) 100vw, 772px"
        srcset="
          ~/assets/images/control_w_200.png 200w,
          ~/assets/images/control_w_479.png 479w,
          ~/assets/images/control_w_772.png 772w
        "
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
  width: 100%

@include for-phone
  .howControlCmpRiskText, .howControlCmpRiskImgWrapper
    width: 100%

@include for-tablet
  .howControlCmpRiskCnt
    flex-direction: row-reverse

  .howControlCmpRiskText, .howControlCmpRiskImgWrapper
    width: 50%
</style>
