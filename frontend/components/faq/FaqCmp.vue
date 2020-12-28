<template>
  <div class="faqCnt">
    <div class="faqBkg">
      <div class="faqBkgBlobWrapper">
        <utils-svg-cmp name="blob/b5" class="faqBkgBlob" />
      </div>
      <div class="faqBkgBlobLgWrapper">
        <utils-svg-cmp name="blob/b5-lg" class="faqBkgBlobLg" />
      </div>
      <div class="faqBkgBulbWrapper">
        <utils-svg-cmp name="background/bulb" class="faqBkgBulb" />
      </div>
      <div class="faqBkgExtension" />
    </div>
    <div class="faqContent">
      <div class="faqContentWrapper">
        <div class="faqTitle">Your questions</div>
        <faq-cmp-q-a
          question="How much do I get paid?"
          answer="The amount that you get paid will depend on the accounts that you link and the amount of data you want to share. Currently we estimate you can get paid up to **$10/month**."
          class="faqCmpQA"
        />
        <faq-cmp-q-a
          question="How does TIKI work?"
          answer="TIKI gets you paid by selling the data from the accounts you link (like Facebook and Google). **You choose which accounts to link, and you can stop sharing your data at any point**."
          class="faqCmpQA"
        />
        <faq-cmp-q-a
          question="How do I sign up?"
          answer="We are launching our Beta in January and you can sign up to take one of our limited spaces. We will then let you know shortly before the launch and provide you with login info."
          class="faqCmpQA"
        />
        <faq-cmp-q-a
          question="How does TIKI affect the accounts I link to it?"
          answer="It simply doesn’t. A lot of other apps integrate third party logins - Spotify, for example, uses Facebook for authorisation and login purposes. It’s a standard practice."
          class="faqCmpQA"
        />
        <faq-cmp-q-a
          question="How secure is TIKI?"
          answer="TIKI is as secure as it can possibly be. We take security AND privacy extremely seriously, and we have taken various measures to protect your data. Find out more on our blog."
          class="faqCmpQA"
        />
        <faq-cmp-q-a
          question="Can my data be linked to me as an individual?"
          answer="No. Individual data is “de-individualised” and NOONE, ever sees any of your data. We only sell “datasets” - that is, groups of data for thousands of people where noone can ever be recognised."
          class="faqCmpQA"
        />
        <faq-cmp-q-a
          question="Are you making money off MY data then?"
          answer="TIKI is designed to make YOU money first, and us second. Majority of money (???%) are yours, and we don’t charge you. We only charge our business customers."
          class="faqCmpQA"
        />
        <faq-cmp-q-a
          question="But you are still selling my data?"
          answer="You can actually choose NOT to sell your data, but just CONTROL it. This service is absolutely free. We only sell your data IF you want to make money off it."
          class="faqCmpQA"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import FaqCmpQA from '@/components/faq/FaqCmpQA'

export default {
  name: 'FaqCmp',
  components: { UtilsSvgCmp, FaqCmpQA },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.faqCnt
  background: $blue-light
  width: 100%
  position: relative

.faqBkg
  width: 100%
  position: absolute
  top: 0
  left: 0
  z-index: 1
  overflow: hidden
  height: 100%

.faqBkgBlobWrapper, .faqBkgBlobLgWrapper
  position: absolute
  z-index: 2

.faqBkgBulbWrapper
  position: absolute
  z-index: 3

::v-deep .faqBkgBlob.svg, ::v-deep .faqBkgBlobLg.svg
  fill: $tan

::v-deep .faqBkgBulb.svg > .bulb
  fill: $black

::v-deep .faqBkgBulb.svg > .layer2
  fill: $orange

::v-deep .faqBkgBulb.svg > .layer1
  fill: $pink

.faqContent
  position: absolute
  top: 0
  left: 0
  z-index: 2
  width: 100%

.faqBkgExtension
  position: absolute
  bottom: 0
  left: 0
  z-index: 1
  width: 100%
  background: $tan

.faqContentWrapper
  position: relative
  margin: 0 auto

.faqTitle
  text-align: center
  font-family: $font-family-montserrat
  color: $blue-dark
  font-weight: 600

@include for-phone
  .faqCnt
    height: 420vw

  .faqBkgBlobLgWrapper
    display: none

  .faqBkgBlobWrapper
    top: -29vw
    left: 0
    width: 100%

  ::v-deep .faqBkgBulb.svg
    height: 30vw

  .faqBkgBulbWrapper
    top: 30vw
    right: -12vw

  .faqBkgExtension
    height: 380vw

  .faqTitle
    margin-top: 12vw
    font-size: 6vw
    margin-bottom: 2vw

  .faqContentWrapper
    width: 80%

@include for-tablet
  .faqCnt
    height: 65vw

  .faqBkgBlobWrapper
    display: none

  .faqBkgBlobLgWrapper
    top: -25vw
    left: 0
    width: 100%

  ::v-deep .faqBkgBulb.svg
    height: 15vw

  .faqBkgBulbWrapper
    top: 8vw
    right: 0

  .faqBkgExtension
    height: 20vw

  .faqTitle
    margin-top: 7vw
    margin-bottom: 2.5vw
    font-size: 1.5vw

  .faqContentWrapper
    width: 50%
</style>
