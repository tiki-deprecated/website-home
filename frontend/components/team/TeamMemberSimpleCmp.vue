<template>
  <div class="teamMemberSimpleCmpCnt">
    <team-avatar-cmp
      v-if="cms.img != null"
      :name="cms.img"
      class="teamAvatarCmp"
    />
    <div class="teamMemberSimpleCmpName">
      <div v-if="cms.fname" class="teamMemberSimpleCmpFname">
        {{ cms.fname }}
      </div>
      <div v-if="cms.fname" class="teamMemberSimpleCmpLname">
        {{ cms.lname }}
      </div>
    </div>
    <div v-if="cms.social != null" class="teamMemberSimpleCmpSocial">
      <a
        v-if="cms.social.linkedin != null"
        :href="`https://linkedin.com/in/${cms.social.linkedin}`"
        class="teamMemberSimpleCmpSocialLink"
      >
        <utils-svg-cmp name="linkedin" class="utilsSvgCmp" />
      </a>
      <a
        v-if="cms.social.medium != null"
        :href="`https://medium.com/@${cms.social.medium}`"
        class="teamMemberSimpleCmpSocialLink"
      >
        <utils-svg-cmp name="medium" class="utilsSvgCmp" />
      </a>
      <a
        v-if="cms.social.twitter != null"
        :href="`https://twitter.com/${cms.social.twitter}`"
        class="teamMemberSimpleCmpSocialLink"
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
  name: 'TeamMemberSimpleCmp',
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

.teamMemberSimpleCmpName
  color: $blue
  text-transform: uppercase
  letter-spacing: 0.2ch
  font-weight: bold
  font-size: medium
  text-align: center
  margin-top: 1em

.teamMemberSimpleCmpSocial
  margin: 0.75em auto 0 auto
  display: flex
  align-items: center
  width: fit-content

.utilsSvgCmp
  height: 1.5em
  margin: 0 0.4em
</style>
