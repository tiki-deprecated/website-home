<template>
  <div class="hiw">
    <div class="hiwContainer">
      <div class="title">How it works (the abridged version)</div>
      <div class="hiw1">
        <div class="hiwRow">
          <div class="hiwRowNum tabletOnly">1.</div>

          <span class="hiwRowTextCol">
            <div class="hiwRowNum phoneOnly">1.</div>

            <div class="hiwRowText">
              A mobile app, where users link their existing accounts like Google
              or Facebook to take control of their data.
            </div>

            <video
              autoplay=""
              loop=""
              muted=""
              playsinline=""
              class="hiwVideo phoneOnly"
              :poster="require(`~/assets/images/jpg/mobile-app.jpg`)"
            >
              Your browser does not support HTML5 video.
              <source
                src="~/assets/images/mp4/mobile-app.mp4"
                type="video/mp4"
              />
            </video>

            <div class="hiwNote hiw1Note">
              Swipe left to turn off tracking, swipe right to get paid for it.
              It’s your data, it’s your choice. You’re in control.
            </div>
          </span>

          <span class="hiwImgCol hiw1ImgCol tabletOnly">
            <video
              autoplay=""
              loop=""
              muted=""
              playsinline=""
              class="hiwVideo"
              :poster="require(`~/assets/images/jpg/mobile-app.jpg`)"
            >
              Your browser does not support HTML5 video.
              <source
                src="~/assets/images/mp4/mobile-app.mp4"
                type="video/mp4"
              />
            </video>
          </span>
        </div>

        <hr class="hiwDivider" />

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
      </div>
      <div class="hiw2">
        <div class="hiwRow">
          <span class="hiwImgCol">
            <img
              sizes="(max-width: 316px) 100vw, 316px"
              srcset="
                ~/assets/images/png/pineapple-floatie_w_200.png 200w,
                ~/assets/images/png/pineapple-floatie_w_316.png 316w
              "
              src="~/assets/images/png/pineapple-floatie_w_316.png"
              alt=""
              class="hiw2Img tabletOnly"
            />
            <div class="hiwNote hiw2Note">
              For the crypto dorks and engineers, it’s all powered by TIKI’s
              purpose-built hybrid permissionless blockchain. On which, we will
              mint more NFTs than the world has ever seen.
            </div>
          </span>

          <div class="hiwRowNum tabletOnly">2.</div>

          <span class="hiwRowTextCol">
            <span class="hiwRowNum phoneOnly">
              2.

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
              first you must own it.<br /><br />As the seller, you choose who
              can license your data and how they can use it. If they break the
              terms, they lose access.
            </div>

            <div class="hiw2NoteRow">
              <div class="hiwNote hiw2Note2">
                Don’t fret if you don’t get NFTs or are worried it’s all hype.
                It’s mostly just fancy words for digitally owning something
                (your data).
              </div>

              <img
                sizes="(max-width: 316px) 100vw, 316px"
                srcset="
                  ~/assets/images/png/pineapple-floatie_w_200.png 200w,
                  ~/assets/images/png/pineapple-floatie_w_316.png 316w
                "
                src="~/assets/images/png/pineapple-floatie_w_316.png"
                alt=""
                class="hiw2Img phoneOnly"
              />
            </div>

            <a
              class="hiw2Button"
              href="https://youtu.be/7YXnA357LN8"
              target="_blank"
              ><div class="hiw2ButtonText">
                <span>
                  Watch our hilarious explainer video (no guarantee it
                  helps).&nbsp;
                  <utils-svg-cmp name="arrow-right" class="arrow"
                /></span></div
            ></a>
          </span>
        </div>
      </div>

      <hr class="hiwDivider" />

      <div class="hiw3">
        <div class="hiwRow">
          <div class="hiwRowNum tabletOnly">3.</div>

          <span class="hiwRowTextCol">
            <div class="hiwRowNum phoneOnly">3.</div>

            <div class="hiwRowText">
              Data marketplace. Think Amazon for data, or rather insights.<br /><br />
              Businesses purchase insights they need in the formats they want,
              without the overhead.<br /><br />When businesses spend, users get
              paid, keeping 100% of their data earnings.
            </div>
          </span>

          <span class="hiwImgCol hiw3ImgCol">
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
            <div class="hiwNote hiw3Note">
              TIKI’s knowledge graph aggregates insights across platforms and
              companies delivering an unprecedented 360° view into customers. Oh
              and it’s searchable.
            </div>
          </span>
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

.hiwRow, .hiwLeft
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
    margin: 0 1vh

  .hiwRow
    margin-top: 5vh
    display: block
    display: flex
    flex-flow: column

  .hiwRowNum
    font-size: 3.7rem
    width: 15vw
    vertical-align: top
    margin-left: 4.7%
    margin-right: 0
    margin-top: -3.375vh
    display: inline-block
    order: 1

  .hiwRowSticker
    margin: 0 auto
    max-height: 35vh
    max-width: 15vw
    height: auto
    top: 2vh
    right: 10vw
    position: relative

  .hiwRowText
    width: 73%
    font-size: 4.25vw
    display: inline-block

  .hiw1Note
    width: 90%
    margin: 0 auto
    font-size: 4.25vw

  .hiw2Note2
    margin: 2vh 0
    margin-left: 4.8%
    width: 67%
    font-size: 1.1rem
    display: inline-block

  .googleSticker
    margin: 0 auto
    max-height: 25vh
    max-width: 25vw
    height: auto
    width: auto
    position: absolute
    top: 27.5vh
    right: 0vw

  .hiwRowTextCol
    order: 2
    display: inline-block

  .hiwImgCol
    display: block
    margin: auto
    width: 100%
    order: 3

  .hiwDivider
    display: none

  .hiwVideo
    margin: 3vh auto
    width: 100%

  .hiw2Note
    max-height: 20vh
    height: auto
    width: auto
    margin: 1vh 4.8% 0 4.8%

  .hiw2Img
    margin: auto
    vertical-align: center
    max-width: 20vw
    height: auto
    width: auto
    margin-bottom: 1.5vh

  .hiw2Button
    width: 90%
    margin: 2vh auto
    border-radius: 2vw

  .hiw2ButtonText
    font-size: 4.25vw
    padding: 2vh 0
    margin: 0 auto
    width: 80%

  .hiw3ImgCol
    width: 90%

  .hiw3Img
    width: 100%
    margin: 2vh auto

  ::v-deep .arrow.svg
    height: 3.75vw

  .tabletOnly
    display: none

@include for-tablet
  .hiwContainer
    width: 66%
    margin: 0 auto
    border-radius: 1vw
    padding-bottom: 5vh

  .hiw
    padding-top: 5vh

  .title
    font-size: 2.25vw
    margin: 3vh auto 0 10%

  .hiwRowLeft
    display: grid
    margin: -3.15vh auto

  .hiwRow
    margin: 2.5vh 7% 2.5vh 7%

  .hiwRowNum
    font-size: 5vw
    margin: -3vh 0 0 3.15vw

  .hiwRowSticker
    display: none
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
    font-size: 1.5rem

  .hiwRowTextCol
    margin: 0 2vw 0 2vw
    width: 35vw

  .hiwDivider
    width: 70%
    border-color: #C4C4C4
    margin: 0 auto

  .hiwNote
    margin-top: 4vh

  .hiw1Note
    margin-top: 13vh

  .hiw1Note, .hiw2Note2
    font-size: 1.2rem

  .hiwVideo
    max-width: 15vw

  .hiwImgCol
    display: block
    margin: auto
    width: 30%

  .hiw1ImgCol
    width: 40%
    text-align: center

  .hiw3ImgCol
    width: 40%

  .hiw2Note
    font-size: .75rem
    max-height: 20vh
    height: auto
    width: auto
    margin: 1vh auto 0vh

  .hiw3Note
    font-size: 1rem
    max-height: 20vh
    height: auto
    width: auto
    margin: 1vh auto 0vh

  .hiw2Img
    max-height: 15vh
    height: auto
    width: auto
    margin: auto
    display: flex

  .hiw3Img
    max-height: 25vh
    height: auto
    width: auto
    margin: auto
    display: flex

  .googleSticker
    display: none
    margin: 0 auto
    max-height: 7vh
    height: auto
    width: auto
    position: relative
    top: 5vh
    right: -28vw

  .hiw2Button
    width: 90%
    margin: 3vh auto
    border-radius: 1vw

  .hiw2ButtonText
    font-size: 1.5rem
    padding: 2vh 0
    margin: 0 auto
    width: 80%

  .phoneOnly
    display: none

  ::v-deep .arrow.svg
    height: 1vw
</style>
