<template>
  <div class="blogPage">
    <div class="content">
      <div class="headerBar">
        <nuxt-link to="/">
          <utils-svg-cmp name="utils/logo" class="headerLogo" />
        </nuxt-link>
      </div>
      <article class="blog">
        <a :href="blog.img">
          <img
            v-if="blog.img != null"
            :src="blog.img"
            :alt="blog.alt"
            class="image"
        /></a>
        <div class="heading">
          <h1 class="title">{{ blog.title }}</h1>
          <p class="subtitle">{{ blog.description }}</p>
          <p class="byline">
            {{ blog.author }} -
            {{
              new Date(blog.updatedAt).toLocaleDateString(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }}
          </p>
        </div>
        <div class="blogBody">
          <nuxt-content :document="blog" />
        </div>
      </article>
    </div>
    <div class="footerWrapper">
      <utils-footer-cmp />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../components/utils/UtilsSvgCmp'
import UtilsFooterCmp from '../../components/utils/footer/UtilsFooterCmp'

export default {
  name: 'Slug',
  components: { UtilsSvgCmp, UtilsFooterCmp },
  async asyncData({ $content, params }) {
    const blog = await $content('blogs', params.slug).fetch()
    return { blog }
  },
  /* computed: {
    lastUpdated() {
      return blog.updatedAt.toDateString()
    },
  }, */
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.blogPage
  background-color: $white
  font-family: $font-family-nunito-sans
  color: $purple

::v-deep .headerLogo.svg
  fill: $white

.headerBar
  background-color: $purple

::v-deep .nuxt-content a
  color: $orange
  text-decoration: none

::v-deep .nuxt-content hr
  border-color: $blue-xlight

@include for-phone
  ::v-deep .headerLogo.svg
    height: 8vw

  .headerBar
    padding: 4vw

  .heading
    padding: 0 4vw

  .image
    width: 100%
    margin: 0 auto
    display: block

  .title
    font-size: 9vw
    margin: 8vw 0 0 0

  .subtitle
    color: $gray-dark
    font-size: 5vw
    margin: 2vw 0 0 0

  .byline
    font-size: 4vw
    margin: 2vw 0 0 0

  .date
    font-size: 4vw
    margin: 1vw 0 0 0

  .blog
    margin-top: 0
    width: 100%

  .blogBody
    font-size: 5vw
    margin-top: 8vw
    padding: 0 4vw

  ::v-deep .nuxt-content img
    max-width: 100%

  ::v-deep .nuxt-content hr
    width: 40%
    margin: 10vw auto

@include for-tablet
  ::v-deep .headerLogo.svg
    height: 2vw

  .headerBar
    padding: 1.5vw

  .heading
    padding: 0 4vw

  .image
    width: 100%
    margin: 1.5vw auto
    display: block

  .title
    font-size: 3vw
    margin: 1.5vw 0 0 0

  .subtitle
    color: $gray-dark
    font-size: 2vw
    margin: 0

  .byline
    font-size: 1.25vw
    margin: 0

  .date
    font-size: 1.5vw
    margin: 1vw 0 0 0

  .blog
    width: 60%
    margin: 0 auto

  .blogBody
    font-size: 1.5vw
    margin-top: 1.5vw
    padding: 0 4vw

  ::v-deep .nuxt-content img
    max-width: 100%

  ::v-deep .nuxt-content hr
    width: 50%
    margin: 1.5vw auto
</style>
