<template>
  <div class="privacyPage">
    <header-cmp v-if="cms.header != null" class="headerCmp" :cms="cms.header" />
    <div class="privacyCnt">
      <utils-title-subtitle-cmp
        :title="cms.title"
        :subtitle="cms.date"
        class="utilsTitleSubtitleCmp"
      />
      <article>
        <nuxt-content :document="cms" />
      </article>
    </div>
    <footer-cmp v-if="cms.footer != null" class="footerCmp" :cms="cms.footer" />
  </div>
</template>

<script>
import HeaderCmp from '~/components/header/HeaderCmp'
import FooterCmp from '~/components/footer/FooterCmp'
import UtilsTitleSubtitleCmp from '~/components/utils/UtilsTitleSubtitleCmp'

export default {
  name: 'PrivacyPage',
  components: { HeaderCmp, FooterCmp, UtilsTitleSubtitleCmp },
  async asyncData({ $content }) {
    const cms = await $content('privacy').fetch()
    return { cms }
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.privacyPage
  width: 100%
  position: relative

.utilsTitleSubtitleCmp
  margin-top: 1em

.privacyCnt
  padding: 1em
  color: $black-light
  font-size: small
  word-break: break-word
  overflow: hidden
  font-weight: normal
  letter-spacing: 0.2ch
  text-align: justify

.nuxt-content
  margin: 1em auto 0 auto

@include for-tablet
  .privacyPage
    max-width: 50%
    margin: 0 auto

@include for-desktop
  .privacyPage
    max-width: 35%
    margin: 0 auto
</style>
