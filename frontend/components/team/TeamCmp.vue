<template>
  <div class="teamCnt">
    <div class="teamTitle">Team</div>
    <div class="teamWrapper">
      <team-cmp-member
        fname="Mike"
        lname="Audi"
        img="mike-audi.jpeg"
        title="Founder"
        role="CEO"
        twitter="tiki_mike"
        linkedin="maudi"
        medium="tikimike"
        class="teamCmpMember"
      />
      <team-cmp-member
        fname="Anna"
        lname="Stoilova"
        img="anna-stoilova.jpeg"
        title="Co-founder"
        role="Product"
        twitter="nomorewhite"
        linkedin="annastoilova"
        medium="annastoilova"
        class="teamCmpMember"
      />
      <team-cmp-member
        fname="Shane"
        lname="Faria"
        img="shane-faria.jpeg"
        title="Co-founder"
        role="User Champion"
        twitter="shane_faria"
        linkedin="shane-faria-263a0b178"
        medium="shanefaria"
        class="teamCmpMember"
      />
      <team-cmp-member
        fname="Brian"
        lname="Gagnon"
        img="brian-gagnon.jpeg"
        title="Co-founder"
        role="Advisor"
        twitter="BriVirtual"
        linkedin="bmgagnon"
        class="teamCmpMember"
      />
      <team-cmp-member
        fname="Barry"
        lname="O'Connor"
        img="barry-oconnor.jpeg"
        title="Advisor"
        role="Data Market"
        linkedin="barryoconnor"
        medium="boc111"
        class="teamCmpMember"
      />
      <team-cmp-member
        fname="Kashish"
        lname="Mittal"
        img="kashish-mittal.jpeg"
        title="Advisor"
        role="Security"
        twitter="iamkmittal"
        linkedin="kashishmittalcmu"
        class="teamCmpMember"
      />
    </div>
    <div class="teamTitle">Contributors</div>
    <div class="teamWrapper">
      <team-cmp-member
        fname="Ken"
        lname="Rapp"
        img="ken-rapp.jpeg"
        title="Advisor"
        role="Corporate"
        linkedin="ken-rapp-b922766"
        class="teamCmpMember"
      />
      <team-cmp-member
        fname="Malinda"
        lname="Gagnon"
        img="malinda-gagnon.jpeg"
        title="Advisor"
        role="Marketing"
        linkedin="malindagagnon"
        twitter="malinda_g"
        class="teamCmpMember"
      />
      <team-cmp-member
        fname="Jon"
        lname="Morgan"
        img="jon-morgan.jpeg"
        title="Advisor"
        role="Product"
        linkedin="jonmorganpm"
        twitter="jonmorganpm"
        class="teamCmpMember"
      />
      <team-cmp-member
        fname="Derek"
        lname="Canton"
        img="derek-canton.jpeg"
        title="Advisor"
        role="UX"
        linkedin="derekecanton"
        twitter="derekcanton"
        class="teamCmpMember"
      />
      <team-cmp-member
        fname="Brandon"
        lname="Sanders"
        img="brandon-sanders.jpeg"
        title="Advisor"
        role="Blockchain"
        linkedin="brsanders"
        twitter="crahda"
        class="teamCmpMember"
      />
    </div>
  </div>
</template>

<script>
import TeamCmpMember from '@/components/team/TeamCmpMember'

export default {
  name: 'TeamCmp',
  components: { TeamCmpMember },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.teamCnt
  background: $blue-xlight

.teamTitle
  font-family: $font-family-koara
  font-weight: 600
  color: $purple
  text-align: center

.teamWrapper
  display: flex
  align-items: start
  justify-content: center
  flex-wrap: wrap

@include for-phone
  .teamCnt
    padding: 10vw 0 18vw 0

  .teamTitle
    font-size: 8vw
    margin-top: 8vw

  .teamCmpMember
    margin: 5vw 0
    width: 42vw

@include for-tablet
  .teamCnt
    padding: 2vw 0 3vw 0

  .teamTitle
    font-size: 1.75vw
    margin-top: 3vw

  .teamCmpMember
    margin: 2vw 0
    width: 13vw
</style>
