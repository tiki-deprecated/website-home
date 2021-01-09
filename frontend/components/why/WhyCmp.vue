<template>
  <div class="whyCnt">
    <div class="whyMoney">
      <div class="whyTitle">Why TIKI?</div>
      <div class="whyText">
        <div class="whyTextLine">You think you own your data?</div>
        <div class="whyTextLine">
          In 2020 alone, the data on our behaviour and purchases was worth more
          than <b>$382 billion</b> in advertising revenue.
        </div>
      </div>
      <why-cmp-counter class="whyCmpCounter" />
    </div>
    <div class="whyVideo">
      <div class="utilsVideoCmp">
        <utils-video-cmp id="IP4UeduStUI" placeholder="yt-placeholder" />
      </div>
    </div>
  </div>
</template>

<script>
import WhyCmpCounter from '@/components/why/WhyCmpCounter'
import UtilsVideoCmp from '@/components/utils/UtilsVideoCmp'

export default {
  name: 'WhyCmp',
  components: { WhyCmpCounter, UtilsVideoCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.whyCnt
  background: $blue-dark

.whyTitle
  font-family: $font-family-montserrat
  font-weight: 600
  color: $white

.whyText
  font-family: $font-family-nunito-sans
  font-weight: 300
  color: $white

.whyCmpCounter
  margin-left: auto
  margin-right: auto

@include for-phone
  .whyCnt
    width: 90%
    border-radius: 2vw
    padding: 2vw

  .whyMoney
    width: 100%

  .whyTitle
    font-size: 6vw
    margin-top: 5vw

  .whyText
    font-size: 4vw
    margin-top: 5vw

  .whyCmpCounter
    margin-top: 5vw
    margin-bottom: 10vw

  .whyVideo
    width: 100%
    height: 39%

  .utilsVideoCmp
    width: 100%
    height: 100%

@include for-tablet
  .whyCnt
    width: 66%
    border-radius: 1vw
    padding: 2vw
    display: flex
    align-items: flex-end
    justify-content: space-between

  .whyMoney
    width: 50%

  .whyTitle
    font-size: 1.75vw
    margin-top: 3vw

  .whyText
    width: 80%
    font-size: 1vw
    margin-top: 1vw

  .whyCmpCounter
    margin-top: 3vw

  .whyVideo
    width: 50%
    height: 100%

  .utilsVideoCmp
    width: 100%
    height: 100%
    margin-left: auto
</style>
