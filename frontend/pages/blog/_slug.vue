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
  width: 60px
  border: none
  padding: 2.5px
  background-image: radial-gradient(circle at 2.5px, $blue-dark 1.25px, rgba(255,255,255,0) 2.5px)
  background-size: 30px 5px, 5px 30px
  background-repeat: repeat-x

::v-deep .nuxt-content blockquote blockquote
  font-style: italic
  font-weight: normal
  border-left: black solid 2px
  margin-inline: 0
  margin-block: 0
  color: $purple

::v-deep .nuxt-content blockquote
  font-style: normal
  font-weight: normal
  color: $gray-dark
  margin-inline: 0
  margin-block: 0

::v-deep .nuxt-content img + em
  color: $gray-dark
  display: block
  text-align: center

::v-deep .nuxt-content img
  display: block
  margin-left: auto
  margin-right: auto

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
    margin: 10vw auto

  ::v-deep .nuxt-content blockquote blockquote
    padding-left: 4vw
    font-size: 5vw
    margin-top: 8vw
    margin-bottom: 8vw

  ::v-deep .nuxt-content blockquote
    padding-left: 4vw
    font-size: 6vw
    margin-top: 8vw
    margin-bottom: 8vw

  ::v-deep .nuxt-content img + em
    font-size: 3.5vw

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
    margin: 4vw auto

  ::v-deep .nuxt-content blockquote blockquote
    padding-left: 1.5vw
    font-size: 1.5vw
    margin-top: 2.5vw
    margin-bottom: 2.5vw

  ::v-deep .nuxt-content blockquote
    padding-left: 1.5vw
    font-size: 2vw
    margin-top: 2.5vw
    margin-bottom: 2.5vw

  ::v-deep .nuxt-content img + em
    font-size: 1vw
</style>
