<template>
  <div class="howSellCnt">
    <div class="howSellTitle">How do I actually sell my data?</div>
    <div class="howSellSubtitle">
      So how do I actually sell my data? TIKI is based on 3 simple features to
      make it easy for you to make decisions about your data.
      <b>See, control, monetize</b>.
    </div>
    <div class="howSellSteps">
      <how-sell-cmp-steps
        title="Link a supported account (like fb or google)."
        body="All you have to do is login one time and we wont change anything, post anything, or affect your account in any way. Instead, what we’re going to do is show you what data they’ve collected on you."
        img="control_w_200"
        class="howSellCmpSteps"
      />
      <how-sell-cmp-steps
        title="Control your options"
        body="Once you’ve got an idea on what sort of data you actually own, we’ll help you with various data control options like changing privacy or data collection settings and which companies can buy your data. "
        img="control_w_200"
        class="howSellCmpSteps"
      />
      <how-sell-cmp-steps
        title="Finalise your choice...."
        body="We’ll take care of packaging your data up and facilitating the transation with qualified buyers, making sure its anonymized and secure. When the transaction goes thru, money appears in the wallet in the app. Hold onto it (it accrues value) or cash out, your choice"
        img="control_w_200"
        class="howSellCmpSteps"
      />
    </div>
  </div>
</template>

<script>
import HowSellCmpSteps from '@/components/how_sell/HowSellCmpSteps'

export default {
  name: 'HowSellCmp',
  components: { HowSellCmpSteps },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.howSellTitle
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center

.howSellSubtitle
  font-family: $font-family-montserrat
  text-align: center

.howSellSteps
  display: flex
  align-items: start
  justify-content: space-evenly

.howSellCmpSteps
  width: 25%

@include for-phone
@include for-tablet
  .howSellCnt
    padding: 4vw 0

  .howSellTitle
    font-size: 1.25vw
    width: 30%
    margin: 0 auto

  .howSellSubtitle
    width: 60%
    margin: 3vw auto 0 auto

  .howSellSteps
    margin: 2vw auto 0 auto
</style>
