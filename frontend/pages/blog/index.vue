<template>
  <div>
    <div class="headerBar">
      <nuxt-link to="/">
        <utils-svg-cmp name="utils/logo" class="headerLogo" />
      </nuxt-link>
    </div>
    <div class="content">
      <ul class="noBullets">
        <li v-for="blog of pinned" :key="blog.slug">
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
            class="link"
          >
            <h2 class="title">{{ blog.title }}</h2>
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
            <p class="subtitle">{{ blog.description }}</p>
            <img :src="blog.img" :alt="blog.alt" class="image" />
            <div class="divider" />
          </NuxtLink>
        </li>
      </ul>
      <ul class="noBullets">
        <li v-for="blog of all" :key="blog.slug">
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
            class="link"
          >
            <h2 class="title">{{ blog.title }}</h2>
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
            <p class="subtitle">{{ blog.description }}</p>
            <img :src="blog.img" :alt="blog.alt" class="image" />
            <div class="divider" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../components/utils/UtilsSvgCmp'
const pinnedSlugs = ['team']

export default {
  name: 'BlogIndex',
  components: { UtilsSvgCmp },
  async asyncData({ $content, params }) {
    const blogs = await $content('blogs')
      .only([
        'title',
        'description',
        'img',
        'alt',
        'slug',
        'author',
        'updatedAt',
      ])
      .sortBy('updatedAt', 'desc')
      .fetch()
    const pinned = blogs.filter((value) => pinnedSlugs.includes(value.slug))
    const all = blogs.filter((value) => !pinnedSlugs.includes(value.slug))
    return {
      all,
      pinned,
    }
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.noBullets
  list-style-type: none
  padding: 0
  margin: 0

.link
  text-decoration: none
  font-family: $font-family-nunito-sans

.title
  color: $purple
  font-weight: bold

.subtitle
  color: $gray-dark

.byline
  color: $purple

.divider
  background-color: $yellow

::v-deep .headerLogo.svg
  fill: $white

.headerBar
  background-color: $purple

@include for-phone
  .image
    width: 100%
    margin: 4vw 0 0 0

  .title
    font-size: 10vw
    margin: 0 4vw

  .subtitle
    margin: 2vw 4vw 0 4vw
    font-size: 6vw

  .byline
    font-size: 5vw
    margin: 0 4vw

  .divider
    height: 1px
    width: 100%
    margin: 4vw 0

  .headerBar
    padding: 4vw

  ::v-deep .headerLogo.svg
    height: 8vw

  .noBullets
    margin-top: 4vw

@include for-tablet
  .image
    width: 100%
    margin: 2vw 0 0 0

  .title
    font-size: 2.5vw
    margin: 0

  .subtitle
    margin: 1vw 0 0 0
    font-size: 1.5vw

  .byline
    font-size: 1.25vw
    margin: 0

  .divider
    height: 2px
    width: 100%
    margin: 2vw 0

  .headerBar
    padding: 1.5vw

  ::v-deep .headerLogo.svg
    height: 2vw

  .content
    width: 40%
    margin: 0 auto

  .noBullets
    margin-top: 2vw
</style>
