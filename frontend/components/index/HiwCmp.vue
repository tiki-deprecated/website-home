<template>
  <div class="hiw">
    <div class="hiwContainer">
      <div class="title">How it works (the abridged version)</div>
      <div class="hiw1">
        <div class="hiwRow">
          <div class="hiwRowNum tabletOnly">1.</div>

          <div class="hiwRowTextCol">
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
          </div>

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
          <div class="hiwRowNum tabletOnly">2.</div>

          <span class="hiwRowTextCol hiw2RowTextCol">
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

            <div class="hiw2ButtonRow">
              <a
                class="hiwButton hiw2Button"
                href="https://youtu.be/7YXnA357LN8"
                target="_blank"
                ><div class="hiwButtonText">
                  <span>
                    Watch our hilarious explainer video (no guarantee it
                    helps).&nbsp;
                    <utils-svg-cmp name="arrow-right" class="arrow"
                  /></span></div
              ></a>

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
            </div>

            <img
              sizes="(max-width: 265px) 100vw, 265px"
              srcset="
                ~/assets/images/png/sticker-stack_w_200.png 200w,
                ~/assets/images/png/sticker-stack_w_265.png 265w
              "
              src="~/assets/images/png/sticker-stack_w_265.png"
              alt=""
              class="hiwRowSticker tabletOnly"
            />

            <div class="hiwNote hiw2Note">
              For the crypto dorks and engineers, it’s all powered by TIKI’s
              purpose-built hybrid permissionless blockchain. On which, we will
              mint more NFTs than the world has ever seen.
            </div>
          </span>
        </div>
      </div>

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
            <div class="strictVideoContainer">
              <utils-yt-cmp
                class="buildingVideo"
                yt-id="JaWLtfIt8m4"
                img-name="jpg/insights_thumbnail"
                img-type="jpg"
                :img-sizes="[200, 457, 642, 841, 1014, 1195, 1351, 1400]"
              />
            </div>

            <a class="hiwButton hiw3Button" href="/insights" target="_blank"
              ><div class="hiwButtonText">
                <span>
                  Learn More&nbsp;
                  <utils-svg-cmp name="arrow-right" class="arrow"
                /></span></div
            ></a>

            <!-- <div class="hiwNote hiw3Note">
              TIKI’s knowledge graph aggregates insights across platforms and
              companies delivering an unprecedented 360° view into customers. Oh
              and it’s searchable.
            </div> -->
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

.hiwButton, .hiwButton:hover, .hiwButton:link, .hiwButton:visited, .hiwButton:active
  background-color: $orange
  display: block
  text-decoration: none

.hiwButtonText
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

  .hiw2Button, .hiw3Button
    width: 90%
    margin: 2vh auto
    border-radius: 2vw

  .hiwButtonText
    font-size: 4.25vw
    padding: 2vh 0
    margin: 0 auto
    width: 80%

  .strictVideoContainer
    margin-top: 2vh

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
    margin: 3vh auto 0 2vw

  .hiwRowLeft
    display: grid
    margin: -3.15vh auto

  .hiwRow
    margin: 4vh 2vw 3vh 2vw

  .hiw1, .hiw2, .hiw3
    margin: 2vh 0

  .hiwRowNum
    font-size: 5vw
    margin-top: -3vh

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

  .verticalAlign
    display: flex
    align-items: center

  .hiw2RowTextCol
    width: 100%

  .hiwNote
    margin-top: 4vh

  .hiw1Note
    margin-top: 2vh

  .hiw1Note, .hiw2Note2
    font-size: 1.2rem

  .hiwVideo
    max-width: 60%

  .hiwImgCol
    display: inline-block
    margin: auto 0 auto auto
    width: 20%

  .hiw1ImgCol
    width: 40%
    text-align: center

  .hiw3ImgCol
    width: 40%

  .hiw2Note
    font-size: 1rem
    max-height: 20vh
    height: auto
    width: auto
    margin: 1vh auto

  .hiw3Note
    font-size: 1rem
    max-height: 20vh
    height: auto
    width: auto
    margin: 1vh auto 0vh

  .hiw2Img
    max-height: 12vh
    float: right
    margin-right: 55%

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

  .hiwButton, .hiwButton:hover, .hiwButton:link, .hiwButton:visited, .hiwButton:active
    display: inline-block
    width: 33%
    margin: 3vh 0 3vh 0
    border-radius: 1vw

  .hiw3Button, .hiw3Button:hover, .hiw3Button:link, .hiw3Button:visited, .hiw3Button:active
    width: 60%
    text-align: center
    display: block
    margin: 2vh auto

  .hiwButtonText
    font-size: 1rem
    padding: 2vh 0
    margin: 0 auto
    width: 90%

  .phoneOnly
    display: none

  ::v-deep .arrow.svg
    height: .75rem
</style>
