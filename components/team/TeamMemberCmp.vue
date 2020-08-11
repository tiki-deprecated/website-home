<template>
  <div class="teamMemberCmpCnt">
    <team-avatar-cmp
      v-if="cms.img != null"
      :name="cms.img"
      class="teamAvatarCmp"
    />
    <div v-if="cms.name != null" class="teamMemberCmpName">
      {{ cms.name }}
    </div>
    <div v-if="cms.title != null" class="teamMemberCmpTitle">
      {{ cms.title }}
    </div>
    <div v-if="cms.social != null" class="teamMemberCmpSocial">
      <a
        v-if="cms.social.linkedin != null"
        :href="`https://linkedin.com/in/${cms.social.linkedin}`"
        class="teamMemberCmpSocialLink"
      >
        <utils-svg-cmp name="linkedin" class="utilsSvgCmp" />
      </a>
      <a
        v-if="cms.social.medium != null"
        :href="`https://medium.com/@${cms.social.medium}`"
        class="teamMemberCmpSocialLink"
      >
        <utils-svg-cmp name="medium" class="utilsSvgCmp" />
      </a>
      <a
        v-if="cms.social.twitter != null"
        :href="`https://twitter.com/${cms.social.twitter}`"
        class="teamMemberCmpSocialLink"
      >
        <utils-svg-cmp name="twitter" class="utilsSvgCmp" />
      </a>
    </div>
    <div v-if="cms.bio != null" class="teamMemberCmpBio">
      {{ cms.bio }}
    </div>
    <team-mantra-cmp
      v-if="cms.mantra != null"
      :mantra="cms.mantra"
      class="teamMantraCmp"
    />
    <div v-if="cms.fact != null" class="teamMemberCmpFact">
      <team-fact-cmp
        v-if="cms.fact.one != null"
        :cms="cms.fact.one"
        class="teamFactCmp"
      />
      <team-fact-cmp
        v-if="cms.fact.two != null"
        :cms="cms.fact.two"
        class="teamFactCmp"
      />
      <team-fact-cmp
        v-if="cms.fact.three != null"
        :cms="cms.fact.three"
        class="teamFactCmp"
      />
      <team-fact-cmp
        v-if="cms.fact.four != null"
        :cms="cms.fact.four"
        class="teamFactCmp"
      />
    </div>
    <div v-if="cms.spotify != null" class="teamMemberCmpSpotify">
      <iframe
        :src="`https://open.spotify.com/embed/playlist/${cms.spotify}`"
        width="300"
        height="80"
        allowtransparency="true"
        allow="encrypted-media"
        class="teamMemberCmpSpotifyIframe"
      />
    </div>
  </div>
</template>

<script>
import TeamAvatarCmp from '~/components/team/TeamAvatarCmp'
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'
import TeamFactCmp from '~/components/team/TeamFactCmp'
import TeamMantraCmp from '~/components/team/TeamMantraCmp'

export default {
  name: 'TeamMemberCmp',
  components: { TeamAvatarCmp, UtilsSvgCmp, TeamFactCmp, TeamMantraCmp },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.teamMemberCmpCnt
  width: fit-content

.teamAvatarCmp
  width: 10em
  margin: 2em auto 0 auto

.teamMemberCmpName
  color: $blue
  text-transform: uppercase
  letter-spacing: 0.2ch
  font-weight: bold
  font-size: large
  text-align: center
  margin-top: 1em

.teamMemberCmpTitle
  color: $text
  letter-spacing: 0.2ch
  font-size: large
  text-align: center
  margin-top: 0.5em

.teamMemberCmpSocial
  margin: 0.75em auto 0 auto
  display: flex
  align-items: center
  width: fit-content

.utilsSvgCmp
  height: 1.5em
  margin: 0 0.4em

.teamMemberCmpBio
  color: $text-light
  font-size: small
  word-break: break-word
  overflow: hidden
  font-weight: normal
  letter-spacing: 0.2ch
  margin-top: 1em
  text-align: justify

.teamMemberCmpFact
  margin: 2em auto 0 auto
  width: 90%

.teamFactCmp
  margin-top: 1em

.teamMemberCmpSpotifyIframe
  border: 0

.teamMemberCmpSpotify
  margin: 2em auto 0 auto
  width: fit-content
</style>
