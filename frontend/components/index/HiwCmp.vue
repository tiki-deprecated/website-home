<template>
  <div class="hiw">
    <div class="hiwContainer">
      <div class="title">How it works (the abridged version)</div>
      <div class="hiw1">
        <div class="hiwRow">
          <div class="hiwRowNum">1.</div>
          <div class="hiwRowText">
            A mobile app, where users link their existing accounts like Google
            or Facebook to take control of their data.
          </div>
        </div>
        <img
          sizes="(max-width: 325px) 100vw, 325px"
          srcset="
            ~/assets/images/png/google-sticker_w_200.png 200w,
            ~/assets/images/png/google-sticker_w_325.png 265w
          "
          src="~/assets/images/png/google-sticker_w_325.png"
          alt=""
          class="googleSticker"
        />
        <video
          autoplay=""
          loop=""
          muted=""
          playsinline=""
          class="hiwVideo"
          :poster="require(`~/assets/images/jpg/mobile-app.jpg`)"
        >
          Your browser does not support HTML5 video.
          <source src="~/assets/images/mp4/mobile-app.mp4" type="video/mp4" />
        </video>
        <div class="hiwNote hiw1Note">
          Swipe left to turn off tracking, swipe right to get paid for it. It’s
          your data, it’s your choice. You’re in control.
        </div>
      </div>
      <div class="hiw2">
        <div class="hiwRow">
          <span class="hiwRowLeft">
            <div class="hiwRowNum">2.</div>

            <img
              sizes="(max-width: 265px) 100vw, 265px"
              srcset="
                ~/assets/images/png/sticker-stack_w_200.png 200w,
                ~/assets/images/png/sticker-stack_w_265.png 265w
              "
              src="~/assets/images/png/sticker-stack_w_265.png"
              alt=""
              class="hiwRowSticker"
            />
          </span>
          <div class="hiwRowText">
            Data ownership via NFTs. It’s simple. To sell (license) your data,
            first you must own it.<br /><br />As the seller, you choose who can
            license your data and how they can use it. If they break the terms,
            they lose access.
          </div>
        </div>
        <div class="hiwRow">
          <div class="hiwNote hiw2Note">
            Don’t fret if you don’t get NFTs or are worried it’s all hype. It’s
            mostly just fancy words for digitally owning something (your data).
          </div>
          <img
            sizes="(max-width: 316px) 100vw, 316px"
            srcset="
              ~/assets/images/png/pineapple-floatie_w_200.png 200w,
              ~/assets/images/png/pineapple-floatie_w_316.png 316w
            "
            src="~/assets/images/png/pineapple-floatie_w_316.png"
            alt=""
            class="hiw2Img"
          />
        </div>
        <a
          class="hiw2Button"
          href="https://youtu.be/7YXnA357LN8"
          target="_blank"
          ><div class="hiw2ButtonText">
            <span>
              Or watch our hilarious explainer video (no guarantee it
              helps).&nbsp;
              <utils-svg-cmp name="arrow-right" class="arrow"
            /></span></div
        ></a>
        <div class="hiwNote hiw1Note">
          For the crypto dorks and engineers, it’s all powered by TIKI’s
          purpose-built hybrid permissionless blockchain. On which, we will mint
          more NFTs than the world has ever seen.
        </div>
      </div>
      <div class="hiw3">
        <div class="hiwRow">
          <div class="hiwRowNum">3.</div>
          <div class="hiwRowText">
            Data marketplace. Think Amazon for data, or rather insights.<br /><br />
            Businesses purchase insights they need in the formats they want,
            without the overhead.<br /><br />When businesses spend, users get
            paid, keeping 100% of their data earnings.
          </div>
        </div>
        <img
          sizes="(max-width: 1216px) 100vw, 1216px"
          srcset="
            ~/assets/images/png/coming-soon_w_200.png   200w,
            ~/assets/images/png/coming-soon_w_1216.png 1216w
          "
          src="~/assets/images/png/coming-soon_w_1216.png"
          alt="Coming Soon"
          class="hiw3Img"
        />
        <div class="hiwNote hiw1Note">
          TIKI’s knowledge graph aggregates insights across platforms and
          companies delivering an unprecedented 360° view into customers. Oh and
          it’s searchable.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'
export default {
  name: 'HiwCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.hiw
  width: 100%
  position: relative
  background-color: $gray-1

.hiwContainer
  background-color: $white

.title
  font-family: $font-family-nunito-sans
  font-weight: 800
  color: $tiki-purple
  display: inline-block

.hiwRow
  display: flex

.hiwRowNum
  font-family: $font-family-koara
  font-weight: bold
  color: $tiki-purple
  grid-column: 1
  grid-row: 1

.hiwRowText
  font-family: $font-family-nunito-sans
  font-weight: 600
  color: $tiki-blue

.hiwNote
  font-family: $font-family-nunito-sans
  font-weight: 600
  font-style: italic
  color: $gray-5

.hiw2Button, .hiw2Button:hover, .hiw2Button:link, .hiw2Button:visited, .hiw2Button:active
  background-color: $orange
  display: block
  text-decoration: none

.hiw2ButtonText
  color: $white
  font-family: $font-family-nunito-sans
  font-weight: 600

.hiw3Img
  display: block

::v-deep .arrow.svg
  fill: $white
  display: inline-block

@include for-phone
  .hiwContainer
    width: 90%
    margin: 0 auto
    border-radius: 6vw
    padding-bottom: 3vh

  .hiw
    padding-top: 3vh

  .title
    font-size: 5.25vw
    margin: 3vh auto 0 5vw

  .hiwRowLeft
    display: grid
    margin: 0 0.5vh 0 0vh

  .hiwRow
    margin-top: 5vh

  .hiwRowNum
    font-size: 15vw
    margin: -3.15vh auto

  .hiwRowSticker
    margin: 0 auto
    max-height: 20vh
    max-width: 20vw
    height: auto
    width: auto
    grid-column: 1
    grid-row: 2
    position: relative
    top: 5vh
    right: 7vw

  .hiwRowText
    font-size: 4.25vw
    width: 70%
    margin-right: 5vw

  .hiw1Note
    width: 90%
    margin: 0 auto
    font-size: 4.25vw

  .googleSticker
    margin: 0 auto
    max-height: 20vh
    max-width: 20vw
    height: auto
    width: auto
    position: relative
    top: 6.5vh
    right: -74vw

  .hiwVideo
    margin: 3vh auto
    width: 100%

  .hiw2Note
    margin-left: 5vw
    width: 55%
    font-size: 4.25vw

  .hiw2Img
    margin-right: auto
    margin-left: auto
    max-height: 10vh
    height: auto
    width: auto

  .hiw2Button
    width: 90%
    margin: 3vh auto
    border-radius: 2vw

  .hiw2ButtonText
    font-size: 4.25vw
    padding: 2vh 0
    margin: 0 auto
    width: 80%

  .hiw3Img
    width: 90%
    margin: 3vh auto

  ::v-deep .arrow.svg
    height: 3.75vw

@include for-tablet
  .hiwContainer
    width: 33%
    margin: 0 auto
    border-radius: 1vw
    padding-bottom: 5vh

  .hiw
    padding-top: 5vh

  .title
    font-size: 2.25vw
    margin: 3vh auto 0 2vw

  .hiwRowLeft
    display: grid
    margin: -3.15vh auto

  .hiwRow
    margin-top: 5vh

  .hiwRowNum
    font-size: 5vw
    margin: -3.15vh auto

  .hiwRowSticker
    margin: 0 auto
    max-height: 15vh
    max-width: 8vw
    height: auto
    width: auto
    grid-column: 1
    grid-row: 2
    position: relative
    top: 3vh
    right: 2vw

  .hiwRowText
    font-size: 1.25vw
    width: 70%
    margin-right: 2vw

  .hiw1Note
    width: 90%
    margin: 0 auto
    font-size: 1.25vw

  .hiwVideo
    margin: 5vh auto
    width: 100%

  .hiw2Note
    margin-left: 2vw
    width: 55%
    font-size: 1.25vw

  .hiw2Img
    margin-right: auto
    margin-left: auto
    max-height: 10vh
    height: auto
    width: auto

  .googleSticker
    margin: 0 auto
    max-height: 7vh
    height: auto
    width: auto
    position: relative
    top: 6.5vh
    right: -28vw

  .hiw2Button
    width: 90%
    margin: 5vh auto
    border-radius: 1vw

  .hiw2ButtonText
    font-size: 1.25vw
    padding: 2vh 0
    margin: 0 auto
    width: 80%

  .hiw3Img
    width: 90%
    margin: 5vh auto

  ::v-deep .arrow.svg
    height: 1vw
</style>
