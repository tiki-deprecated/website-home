<template>
  <div class="mnySignupDoneCnt">
    <div class="mnySignupDoneTitle">Done!</div>
    <div class="mnySignupDoneText">
      <div class="mnySignupDoneTextLine">Thank you for signing up.</div>
      <div
        class="mnySignupDoneTextLine"
        :class="{ mnySignupDoneTextLineHide: !opt }"
      >
        We will let you know when our Beta launches in January and we may get in
        touch beforehand for feedback.
      </div>
      <div
        class="mnySignupDoneTextLine"
        :class="{ mnySignupDoneTextLineHide: opt }"
      >
        We will let you know when our Beta launches in January.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MnySignupDoneCmp',
  props: {
    opt: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.mnySignupDoneTextLineHide
  display: none

.mnySignupDoneTitle
  color: $money-green
  font-family: $font-family-montserrat
  font-weight: 600

.mnySignupDoneText
  color: $money-blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .mnySignupDoneTitle
    font-size: 8vw

  .mnySignupDoneText
    font-size: 4vw
    margin-top: 3vw

  .mnySignupDoneTextLine
    padding: 2vw 0
@include for-tablet
  .mnySignupDoneTitle
    font-size: 2.5vw
    text-align: center

  .mnySignupDoneText
    font-size: 1.25vw
    text-align: center
    margin-top: 1vw

  .mnySignupDoneTextLine
    padding: 0.5vw 0
</style>
