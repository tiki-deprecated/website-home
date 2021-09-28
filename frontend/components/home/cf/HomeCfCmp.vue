<template>
  <div class="cf">
    <div class="contentWrapper">
      <div class="title">Invest in TIKI</div>
      <div class="textWrapper">
        <p class="text">
          Unlike typical startups, anyone can now invest in TIKI!
        </p>
        <p class="text">
          Our mission is to return power to users. Anyone should be allowed to
          invest, now thanks to some new SEC laws and StartEngine, you can. In
          just a few clicks, you can join our growing list of prestigious
          investors.
        </p>
        <p class="hlt">
          <b class="hlt1">
            Data is this generation’s gold rush.<br />
            Join the revolution.
          </b>
          <b class="hlt2" @click="moreClick($event)"
            >Invest in TIKI on StartEngine.com</b
          >
        </p>
      </div>
      <div class="cta" @click="moreClick($event)">Learn more</div>
    </div>
    <div class="imgWrapper">
      <img
        sizes="(max-width: 1316px) 100vw, 1316px"
        srcset="
          ~/assets/images/png/home/cf/rocket_w_200.png   200w,
          ~/assets/images/png/home/cf/rocket_w_686.png   686w,
          ~/assets/images/png/home/cf/rocket_w_1316.png 1316w
        "
        src="~/assets/images/png/home/cf/rocket_w_1316.png"
        alt=""
        class="img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCfCmp',
  methods: {
    moreClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('cf-section', {
        props: { location: 'Learn More' },
      })
      const win = window.open('https://startengine.com/tiki', '_self')
      win.focus()
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.cf
  position: relative
  background-color: $white

.cta
  font-family: $font-family-montserrat
  color: $white
  text-decoration: none
  font-weight: 600
  background: $red
  width: fit-content
  cursor: pointer

.title
  font-family: $font-family-montserrat
  font-weight: bold
  color: $blue-dark

.textWrapper
  font-family: $font-family-montserrat
  font-weight: normal
  color: $blue-dark

.text
  display: inherit

.hlt1
  font-weight: bold

.hlt2
  font-weight: bold
  color: $orange
  cursor: pointer

.contentWrapper
  position: absolute
  top: 0
  left: 0
  z-index: 1

.imgWrapper
  position: absolute
  z-index: 9

@include for-phone
  .cf
    height: 135vw

  .cta
    font-size: 5vw
    margin-top: 10vw
    padding: 2vw 5vw
    border-radius: 2.5vw

  .title
    font-size: 6vw
    width: 70%

  .textWrapper
    margin-top: 1.5vw
    font-size: 4vw

  .text
    width: 68%

  .hlt
    width: 93%

  .hlt1, .hlt2
    font-size: 4vw
    width: 100%

  .img
    height: 35vw

  .imgWrapper
    right: 0
    top: 35vw

  .contentWrapper
    top: 12vw
    left: 7vw


@include for-tablet
  .cf
    height: 21vw

  .cta
    font-size: 1vw
    margin-top: 2vw
    padding: 0.5vw 1.75vw
    border-radius: 0.6vw

  .title
    font-size: 1.75vw

  .textWrapper
    margin-top: 1.5vw
    width: 38vw
    font-size: .9vw

  .hlt1, .hlt2
    font-size: 0.85vw

  .img
    height: 21vw

  .imgWrapper
    right: 14vw
    top: 0

  .contentWrapper
    top: 3vw
    left: 7vw
</style>
