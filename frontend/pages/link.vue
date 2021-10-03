<template>
  <div class="page">
    <link-header-cmp class="header" />
    <link-title-cmp
      :image="title.image"
      :subtitle="title.subtitle"
      class="title"
    />
    <div class="featured">
      <div v-for="feature of featured" :key="feature.url" class="feature">
        <link-feature-cmp :text="feature.text" :url="feature.url" />
      </div>
    </div>
    <div class="socials">
      <div v-for="social of socials" :key="social.url" class="social">
        <link-social-cmp :platform="social.platform" :url="social.url" />
      </div>
    </div>
  </div>
</template>

<script>
import LinkHeaderCmp from '../components/link/LinkHeaderCmp'
import LinkTitleCmp from '../components/link/LinkTitleCmp'
import LinkFeatureCmp from '../components/link/LinkFeatureCmp'
import LinkSocialCmp from '../components/link/LinkSocialCmp'

export default {
  name: 'Link',
  components: {
    LinkHeaderCmp,
    LinkTitleCmp,
    LinkFeatureCmp,
    LinkSocialCmp,
  },
  async asyncData({ $content, params }) {
    const links = await $content('links').fetch()
    return {
      featured: links.links,
      title: {
        image: links.image,
        subtitle: links.subtitle,
      },
      socials: links.socials,
    }
  },
}
</script>

<style lang="sass">
body
  background-color: rgba($orange,0.5)
</style>

<style scoped lang="sass">
@import "assets/styles/mixins"

.socials
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: center

@include for-phone
  .header
    padding: 4vw

  .title
    margin-top: 8vw

  .featured
    margin: 8vw auto 0 auto
    width: 90%

  .feature
    margin-top: 5vw

  .socials
    margin: 8vw auto 0 auto

  .social
    margin: 2vw 4vw

@include for-tablet
  .header
    padding: 1.5vw

  .title
    margin-top: 1vw

  .featured
    margin: 1.5vw auto 0 auto
    width: 30%

  .feature
    margin-top: 1vw

  .socials
    margin: 1.5vw auto 0 auto

  .social
    margin: 1vw 1vw
</style>
