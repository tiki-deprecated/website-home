<template>
  <div class="raffleGift">
    <utils-svg-cmp name="home/raffle/gift" class="gift" />
    <div class="textContainer">
      <div class="title">TIKI Giveaway</div>
      <div class="text">
        Join the TIKI Tribe this week and get your own
        <b class="highlight">TIKI party in a box</b>.
      </div>
      <div class="text line2">We'll raffle a winner every Friday!</div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'
export default {
  name: 'HomeRaffleGiftCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.raffleGift
  display: flex
  align-items: flex-start

::v-deep .gift.svg > .bkg
  fill: $white

::v-deep .gift.svg > .ico
  fill: $pink

.title
  font-family: $font-family-koara
  font-weight: bold
  color: $pink

.text
  font-family: $font-family-montserrat
  font-weight: bold
  color: $blue-dark

.highlight
  font-weight: bold
  color: $blue

@include for-phone
  .title
    font-size: 8vw
    margin: 4vw 0

  .text
    font-size: 5vw

  .gift.svg
    width: 90vw
    margin: 0 2.5vw

  .textContainer
    margin-right: 2.5vw

  .line2
    margin-top: 4vw

@include for-tablet
  .raffleGift
    justify-content: center

  .title
    font-size: 2vw
    margin: 1vw 0

  .text
    font-size: 1.1vw

  .gift.svg
    width: 8vw
    margin: 0 2.5vw

  .textContainer
    margin-right: 2.5vw
    width: 20%

  .line2
    margin-top: 1vw
</style>
