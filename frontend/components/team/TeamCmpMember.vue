<template>
  <div class="teamMemberCmpCnt">
    <utils-avatar-cmp v-if="img != null" :name="img" class="utilsAvatarCmp" />
    <div class="teamMemberCmpName">
      <div v-if="fname" class="teamMemberCmpFname">{{ fname }}</div>
      <div v-if="fname" class="teamMemberCmpLname">{{ lname }}</div>
    </div>
    <div class="teamMemberCmpTitleRole">
      <div v-if="title" class="teamMemberCmpTitle">{{ title }}</div>
      <div v-if="role" class="teamMemberCmpRole">- {{ role }} -</div>
    </div>
    <div class="teamMemberCmpSocial">
      <a
        v-if="linkedin != null"
        :href="`https://linkedin.com/in/${linkedin}`"
        class="teamMemberCmpSocialLink"
      >
        <utils-svg-cmp name="icon/linkedin" class="utilsSvgCmp" />
      </a>
      <a
        v-if="medium != null"
        :href="`https://medium.com/@${medium}`"
        class="teamMemberCmpSocialLink"
      >
        <utils-svg-cmp name="icon/medium" class="utilsSvgCmp" />
      </a>
      <a
        v-if="twitter != null"
        :href="`https://twitter.com/${twitter}`"
        class="teamMemberCmpSocialLink"
      >
        <utils-svg-cmp name="icon/twitter" class="utilsSvgCmp" />
      </a>
    </div>
  </div>
</template>

<script>
import UtilsAvatarCmp from '@/components/utils/UtilsAvatarCmp'
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'TeamMemberCmp',
  components: { UtilsAvatarCmp, UtilsSvgCmp },
  props: {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: false,
      default: null,
    },
    medium: {
      type: String,
      required: false,
      default: null,
    },
    linkedin: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.teamMemberCmpName
  color: $blue-dark
  text-transform: uppercase
  text-align: center
  font-family: $font-family-montserrat
  font-weight: bold

.teamMemberCmpSocial
  display: flex
  align-items: center
  width: fit-content

.teamMemberCmpTitleRole
  color: $black-dark
  text-align: center
  font-weight: normal
  font-family: $font-family-nunito

@include for-phone
  .utilsAvatarCmp
    width: 30vw
    margin: 5vw auto 0 auto

  .teamMemberCmpName
    margin-top: 5vw
    font-size: 6vw

  .teamMemberCmpSocial
    margin: 4vw auto 0 auto

  .utilsSvgCmp
    height: 6vw
    margin: 0 1.5vw

  .teamMemberCmpTitleRole
    margin-top: 4vw
    font-size: 4.5vw

@include for-tablet
  .utilsAvatarCmp
    width: 8vw
    margin: 1vw auto 0 auto

  .teamMemberCmpName
    margin-top: 1vw
    font-size: 1.25vw

  .teamMemberCmpSocial
    margin: 1vw auto 0 auto

  .utilsSvgCmp
    height: 1.5vw
    margin: 0 0.4vw

  .teamMemberCmpTitleRole
    margin-top: .75vw
    font-size: 1vw
</style>
