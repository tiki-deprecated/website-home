<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="teamCmp">
    <div class="title">Meet our team!</div>
    <div class="subtitle">Content & Code</div>
    <div class="bios">
      <team-bio-cmp
        name="Mike Audi"
        role="Founder & CEO"
        img-name="jpg/maudi"
        img-type="jpg"
        :img-sizes="[200, 400]"
        link="https://linkedin.com/in/maudi"
        class="bio"
      />
      <team-bio-cmp
        name="Shane Faria"
        role="Head of Content"
        img-name="jpg/sfaria"
        img-type="jpg"
        :img-sizes="[200, 400]"
        link="https://linkedin.com/in/shane-faria-263a0b178/"
        class="bio"
      />
      <team-bio-cmp
        name="Ricardo Gonçalves"
        role="Mobile Lead"
        img-name="jpg/rgoncalves"
        img-type="jpg"
        :img-sizes="[200, 368]"
        link="https://linkedin.com/in/ricardolg/"
        class="bio"
      />
      <team-bio-cmp
        name="Barry O'Connor"
        role="Governance Lead"
        img-name="jpg/boconnor"
        img-type="jpg"
        :img-sizes="[200, 400]"
        link="https://www.linkedin.com/in/barryoconnor/"
        class="bio"
      />
      <team-bio-cmp
        name="Vignesh Sanathkumar"
        role="Product Design"
        img-name="jpg/vsanathkumar"
        img-type="jpg"
        :img-sizes="[200, 532]"
        link="https://www.linkedin.com/in/vignesh-sanathkumar/"
        class="bio"
      />
      <team-bio-cmp
        name="Tim O'Guin"
        role="Dev Communities"
        img-name="jpg/toguin"
        img-type="jpg"
        :img-sizes="[200, 400]"
        link="https://www.linkedin.com/in/timoguin/"
        class="bio"
      />
    </div>
    <div class="contact">
      <utils-btn-cmp txt="Get in touch!" link="mailto:hello@mytiki.com" />
    </div>
  </div>
</template>

<script>
import UtilsBtnCmp from '../utils/UtilsBtnCmp'
import TeamBioCmp from './TeamBioCmp'

export default {
  name: 'TeamCmp',
  components: { UtilsBtnCmp, TeamBioCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.title
  font-weight: bold
  text-align: center

.subtitle
  font-size: .95em

.contact
  margin-left: auto
  margin-right: auto
  width: fit-content

.bios
  display: flex
  justify-content: center
  flex-wrap: wrap
  align-items: flex-start

@include for-tablet
  .title
    font-size: 2em

  .teamCmp
    width: 80%
    margin: 75px auto 0 auto

  .subtitle
    text-align: center
    width: 50%
    margin: 10px auto 0 auto

  .contact
    margin-top: 50px

  .bios
    margin: 30px auto 0 auto

  .bio
    margin: 20px 20px

@include for-phone
  .title
    font-size: 2em

  .teamCmp
    width: 90%
    margin: 75px auto 30px auto

  .subtitle
    text-align: center
    margin: 20px auto 0 auto

  .contact
    margin-top: 30px

  .bios
    margin: 40px auto 0 auto

  .bio
    margin: 20px 10px
    width: 40%
</style>
