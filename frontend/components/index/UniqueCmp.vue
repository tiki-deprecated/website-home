<template>
  <div class="unique">
    <div class="uniqueContainer">
      <div class="title">Why Us</div>
      <div class="subtitle">
        A company is much more than its product. We stand by the following
        values. If we build it right, TIKI will out last us all.
      </div>
      <div class="value">
        <div class="valueTitle">user-centric</div>
        <div class="valueSubtitle">How could it be anything else?</div>
        <a
          class="valueLink"
          href="https://discord.com/invite/evjYQq48Be"
          target="_blank"
        >
          <span>
            <utils-svg-cmp
              name="arrow-right"
              class="arrow"
            />&nbsp;&nbsp;Community Owned</span
          ></a
        >
        <div class="valueDesc">300+ User Investors. Visit our Discord</div>
        <a class="valueLink" href="https://feedback.mytiki.com" target="_blank">
          <span>
            <utils-svg-cmp
              name="arrow-right"
              class="arrow"
            />&nbsp;&nbsp;Feedback Driven</span
          ></a
        >
      </div>
      <div class="value">
        <div class="valueTitle">trust</div>
        <div class="valueSubtitle">
          Required. But never take our word for it. Proof is in the pudding.
        </div>
        <div class="valueLink">
          <span>•&nbsp;&nbsp;Decentralized</span>
        </div>
        <div class="valueDesc">
          Don’t trust us with your data. It stays on your phone, in your pocket,
          where it’s safest.
        </div>
        <div class="valueLink">
          <span>•&nbsp;&nbsp;100% Anonymous</span>
        </div>
        <div class="valueDesc">
          Any data you sell cannot be traced back to you, protecting both buyers
          and sellers.
        </div>
      </div>
      <div class="value">
        <div class="valueTitle">transparent</div>
        <div class="valueSubtitle">
          Talk is cheap, so we open-sourced EVERYTHING. Accountability.
        </div>
        <a class="valueLink" href="https://github.com/tiki" target="_blank">
          <span>
            <utils-svg-cmp
              name="arrow-right"
              class="arrow"
            />&nbsp;&nbsp;Github</span
          ></a
        >
        <a class="valueLink" href="" target="_blank">
          <span>
            <utils-svg-cmp
              name="arrow-right"
              class="arrow"
            />&nbsp;&nbsp;Roadmap</span
          ></a
        >
        <a class="valueLink" href="" target="_blank">
          <span>
            <utils-svg-cmp name="arrow-right" class="arrow" />&nbsp;&nbsp;Team &
            Investors</span
          ></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'

export default {
  name: 'UniqueCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.unique
  width: 100%
  position: relative
  background-color: $gray-1

.uniqueContainer
  background-color: $white

.title
  font-family: $font-family-nunito-sans
  font-weight: 800
  color: $tiki-pink
  display: inline-block

.subtitle
  font-family: $font-family-nunito-sans
  color: $tiki-blue
  font-weight: 600

.valueTitle
  font-family: $font-family-nunito-sans
  color: $tiki-blue
  font-weight: 800
  text-transform: uppercase

.valueSubtitle
  font-family: $font-family-nunito-sans
  color: $gray-5
  font-weight: 600
  font-style: italic

.valueLink, .valueLink:hover, .valueLink:link, .valueLink:visited, .valueLink:active
  font-family: $font-family-nunito-sans
  color: $blue
  font-weight: bold
  text-transform: uppercase
  text-decoration: none
  display: block

::v-deep .arrow.svg
  fill: $blue
  display: inline-block

.valueDesc
  font-family: $font-family-nunito-sans
  color: $gray-5
  font-weight: 600

@include for-phone
  .unique
    padding-top: 3vh

  .uniqueContainer
    width: 90%
    margin: 0 auto
    border-radius: 6vw
    padding-bottom: 3vh

  .title
    font-size: 5.25vw
    margin: 3vh auto 0 5vw

  .subtitle
    font-size: 4.25vw
    margin: 2vh 5vw 0 5vw

  .valueTitle
    font-size: 5vw
    margin: 5vh 5vw 0 5vw

  .valueSubtitle
    font-size: 4.25vw
    margin: 2vh 5vw 0 5vw

  .valueLink
    margin: 2vh 5vw 0 10vw
    font-size: 4.25vw

  ::v-deep .arrow.svg
    height: 3.5vw

  .valueDesc
    margin: 1vh 5vw 0 10vw
    font-size: 4vw

@include for-tablet
  .unique
    padding-top: 5vh

  .uniqueContainer
    width: 66%
    margin: 0 auto
    border-radius: 1vw
    padding-bottom: 5vh

  .title
    font-size: 2.25vw
    margin: 3vh auto 0 2vw

  .subtitle
    font-size: 1.25vw
    margin: 3vh 2vw 0 2vw

  .valueTitle
    font-size: 2vw
    margin: 5vh 2vw 0 2vw

  .valueSubtitle
    font-size: 1.25vw
    margin: 2vh 2vw 0 2vw

  .valueLink
    margin: 2vh 2vw 0 4vw
    font-size: 1.25vw

  ::v-deep .arrow.svg
    height: 1vw

  .valueDesc
    margin: 1vh 2vw 0 4vw
    font-size: 1vw
</style>
