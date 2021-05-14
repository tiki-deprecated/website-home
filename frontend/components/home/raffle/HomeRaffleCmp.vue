<template>
  <div class="raffle">
    <home-raffle-count-cmp class="countCmp" />
    <home-raffle-gift-cmp class="giftCmp" />
  </div>
</template>

<script>
import HomeRaffleCountCmp from './HomeRaffleCountCmp'
import HomeRaffleGiftCmp from './HomeRaffleGiftCmp'

export default {
  name: 'HomeRaffleCmp',
  components: { HomeRaffleGiftCmp, HomeRaffleCountCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.raffle
  background-color: $blue-light

@include for-phone
  .countCmp
    padding-top: 10vw

  .giftCmp
    margin-top: 8vw
    padding-bottom: 10vw

@include for-tablet
  .countCmp
    padding-top: 3vw

  .giftCmp
    margin-top: 2vw
    padding-bottom: 3vw
</style>
