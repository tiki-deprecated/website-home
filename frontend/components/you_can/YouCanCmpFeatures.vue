<template>
  <div class="youCanFeatures">
    <div class="youCanFeatureSee">
      <utils-svg-cmp name="blob/b1" class="youCanFeatureSeeBlob" />
      <div class="youCanFeatureSeeCnt">
        <div class="youCanFeatureSeeNum">1. See</div>
        <div class="youCanFeatureSeeText">
          what data companies are collecting on you, how its used, and how
          secure it really is.
        </div>
      </div>
    </div>
    <div class="youCanFeatureControl">
      <utils-svg-cmp name="blob/b2" class="youCanFeatureControlBlob" />
      <div class="youCanFeatureControlCnt">
        <div class="youCanFeatureControlNum">2. Control</div>
        <div class="youCanFeatureControlText">
          who has access to your data and for what purpose. It’s your decision.
        </div>
      </div>
    </div>
    <div class="youCanFeatureMonetize">
      <utils-svg-cmp name="blob/b3" class="youCanFeatureMonetizeBlob" />
      <div class="youCanFeatureMonetizeCnt">
        <div class="youCanFeatureMonetizeNum">3. Monetize</div>
        <div class="youCanFeatureMonetizeText">
          Get paid your fair share for granting buyers access to your data.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'YouCanCmpFeatures',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.youCanFeatureSeeNum, .youCanFeatureControlNum, .youCanFeatureMonetizeNum
  color: $money-black-dark
  font-family: $font-family-montserrat
  font-weight: 600

.youCanFeatureSee, .youCanFeatureControl, .youCanFeatureMonetize
  position: relative

.youCanFeatureSeeBlob, .youCanFeatureControlBlob, .youCanFeatureMonetizeBlob
  position: absolute
  top: 0
  left: 0
  z-index: 1

.youCanFeatureSeeCnt, .youCanFeatureControlCnt, .youCanFeatureMonetizeCnt
  position: absolute
  top: 0
  left: 0
  z-index: 2

.youCanFeatureSeeText, .youCanFeatureControlText, .youCanFeatureMonetizeText
  font-family: $font-family-nunito-sans
  color: $money-black-dark
  font-weight: normal

.youCanFeatureSeeBlob
  fill: $money-yellow

.youCanFeatureControlBlob
  fill: $money-red

.youCanFeatureMonetizeBlob
  fill: $money-pink

@include for-phone
  .youCanFeatures
    margin-top: 10vw

  .youCanFeatureSee, .youCanFeatureControl, .youCanFeatureMonetize
    margin: 7vw 15vw
    height: 22vw

  .youCanFeatureSeeNum, .youCanFeatureControlNum, .youCanFeatureMonetizeNum
    font-size: 5vw

  .youCanFeatureSeeText
    margin-left: 2ch
    margin-top: 0.5vw
    font-size: 4vw

  .youCanFeatureControlText, .youCanFeatureMonetizeText
    margin-left: 2.5ch
    margin-top: 0.5vw
    font-size: 4vw

  .youCanFeatureSeeBlob
    width: 11.5vw
    top: -12%
    left: -6%

  .youCanFeatureControlBlob
    width: 10vw
    top: -12%
    left: -4%

  .youCanFeatureMonetizeBlob
    width: 10.25vw
    top: -12%
    left: -5%

@include for-tablet
  .youCanFeatures
    margin-top: 3vw
    display: flex
    align-items: center
    justify-content: center

  .youCanFeatureSee
    width: 20%
    margin: 0 2vw 0 10vw
    height: 5vw

  .youCanFeatureControl, .youCanFeatureMonetize
    width: 20%
    margin: 0 2vw
    height: 5vw

  .youCanFeatureSeeNum, .youCanFeatureControlNum, .youCanFeatureMonetizeNum
    font-size: 1.5vw

  .youCanFeatureSeeText
    margin-left: 2.5ch
    margin-top: 0.25vw
    font-size: 1vw

  .youCanFeatureControlText, .youCanFeatureMonetizeText
    margin-left: 3ch
    margin-top: 0.25vw
    font-size: 1vw

  .youCanFeatureSeeBlob
    width: 3.5vw
    top: -12%
    left: -6%

  .youCanFeatureControlBlob
    width: 3vw
    top: -12%
    left: -4%

  .youCanFeatureMonetizeBlob
    width: 3.25vw
    top: -12%
    left: -5%
</style>
