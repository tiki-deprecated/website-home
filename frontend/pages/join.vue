<template>
  <div class="joinPage">
    <header-cmp v-if="cms.header != null" class="headerCmp" :cms="cms.header" />
    <join-cmp v-if="cms.join != null" :cms="cms.join" class="joinCmp" />
    <footer-cmp v-if="cms.footer != null" class="footerCmp" :cms="cms.footer" />
  </div>
</template>

<script>
import HeaderCmp from '~/components/header/HeaderCmp'
import JoinCmp from '~/components/join/JoinCmp'
import FooterCmp from '~/components/footer/FooterCmp'

export default {
  name: 'JoinPage',
  components: { HeaderCmp, JoinCmp, FooterCmp },
  async asyncData({ $content }) {
    const cms = await $content('join').fetch()
    return { cms }
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.joinPage
  width: 100%
  position: relative

.joinCmp
  margin: 1em auto 0 auto

@include for-tablet
  .joinPage
    max-width: 50%
    margin: 0 auto

@include for-desktop
  .joinPage
    max-width: 35%
    margin: 0 auto
</style>
