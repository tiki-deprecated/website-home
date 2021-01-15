<template>
  <div class="headerControlCmpFormDoneCnt">
    <div class="headerControlCmpFormDoneTitle">Done!</div>
    <div class="headerControlCmpFormDoneText">
      <div class="headerControlCmpFormDoneTextLine">
        Thank you for signing up.
      </div>
      <div
        class="headerControlCmpFormDoneTextLine"
        :class="{ headerControlCmpFormDoneTextLineHide: !opt }"
      >
        We will let you know when our Beta launches in January and we may get in
        touch beforehand for feedback.
      </div>
      <div
        class="headerControlCmpFormDoneTextLine"
        :class="{ headerControlCmpFormDoneTextLineHide: opt }"
      >
        We will let you know when our Beta launches in January.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderControlCmpFormDone',
  computed: {
    opt() {
      return this.$store.state.form_signup.opt
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.headerControlCmpFormDoneTextLineHide
  display: none

.headerControlCmpFormDoneTitle
  color: $green
  font-family: $font-family-montserrat
  font-weight: 600

.headerControlCmpFormDoneText
  color: $blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .headerControlCmpFormDoneCnt
    width: 90%
    margin: 0 auto

  .headerControlCmpFormDoneTitle
    font-size: 8vw

  .headerControlCmpFormDoneText
    font-size: 5vw
    margin-top: 3vw

  .headerControlCmpFormDoneTextLine
    padding: 2vw 0

@include for-tablet
  .headerControlCmpFormDoneTitle
    font-size: 2.5vw
    text-align: center

  .headerControlCmpFormDoneText
    font-size: 1.5vw
    text-align: center
    margin-top: 1vw

  .headerControlCmpFormDoneTextLine
    padding: 0.5vw 0
</style>
