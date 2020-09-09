<template>
  <div class="teamMemberCmpCnt">
    <team-avatar-cmp
      v-if="cms.img != null"
      :name="cms.img"
      class="teamAvatarCmp"
    />
    <div class="teamMemberCmpName">
      <div v-if="cms.fname" class="teamMemberCmpFname">{{ cms.fname }}</div>
      <div v-if="cms.fname" class="teamMemberCmpLname">{{ cms.lname }}</div>
    </div>
    <div class="teamMemberCmpTitleRole">
      <div v-if="cms.title" class="teamMemberCmpTitle">{{ cms.title }}</div>
      <div v-if="cms.role" class="teamMemberCmpRole">- {{ cms.role }} -</div>
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
  </div>
</template>

<script>
import TeamAvatarCmp from '~/components/team/TeamAvatarCmp'
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'

export default {
  name: 'TeamMemberCmp',
  components: { TeamAvatarCmp, UtilsSvgCmp },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.teamAvatarCmp
  width: 6em
  margin: 2em auto 0 auto

.teamMemberCmpName
  color: $blue
  text-transform: uppercase
  letter-spacing: 0.2ch
  font-weight: bold
  font-size: medium
  text-align: center
  margin-top: 1em

.teamMemberCmpSocial
  margin: 0.75em auto 0 auto
  display: flex
  align-items: center
  width: fit-content

.utilsSvgCmp
  height: 1.25em
  margin: 0 0.4em

.teamMemberCmpTitleRole
  color: $text-light
  margin-top: .75em
  font-size: smaller
  text-align: center
  font-weight: normal
  letter-spacing: 0.2ch
</style>
