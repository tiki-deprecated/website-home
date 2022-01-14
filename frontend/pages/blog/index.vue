<template>
  <div class="page">
    <div class="stack">
      <blog-header-cmp />
      <div class="explain">
        Here you’ll find all you need to know about TIKI - mission, team,
        product and everything else.
      </div>
      <div class="content">
        <div class="section">
          <div class="sectionTitle">Latest</div>
          <blog-card-cmp :blog="latest" />
        </div>
        <div class="section">
          <div class="sectionTitle">Featured</div>
          <div v-for="feature of featured" :key="feature.slug">
            <blog-card-cmp :blog="feature" class="feature" />
          </div>
        </div>
        <div id="categories" class="section">
          <div class="sectionTitle">Categories</div>
          <div class="categories">
            <blog-tile-cmp
              icon="blog/finger"
              name="Product"
              category="product"
              class="category"
              color="#5CE9D8"
            />
            <blog-tile-cmp
              icon="blog/pineapple"
              name="Company"
              category="company"
              class="category"
              color="#FCDA57"
            />
            <blog-tile-cmp
              icon="blog/microphone"
              name="Press & Media"
              category="press"
              class="category"
              color="#8DB0FF"
            />
            <blog-tile-cmp
              icon="blog/help"
              name="Help & Support"
              category="help"
              class="category"
              color="#FEA184"
            />
            <blog-tile-cmp
              icon="blog/robot"
              name="The Tech"
              category="tech"
              class="category"
              color="#91DBC0"
            />
            <blog-tile-cmp
              icon="blog/check"
              name="All"
              category="all"
              class="category"
              color="#D8D8D8"
            />
          </div>
        </div>
      </div>
      <utils-footer-cmp />
    </div>
  </div>
</template>

<script>
import BlogHeaderCmp from '../../components/blog/BlogHeaderCmp'
import BlogTileCmp from '../../components/blog/BlogTileCmp'
import BlogCardCmp from '../../components/blog/BlogCardCmp'
import UtilsFooterCmp from '../../components/utils/footer/UtilsFooterCmp'

export default {
  name: 'BlogIndex',
  components: {
    UtilsFooterCmp,
    BlogCardCmp,
    BlogTileCmp,
    BlogHeaderCmp,
  },
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
        'featured',
        'category',
      ])
      .sortBy('updatedAt', 'desc')
      .fetch()

    const latest = blogs[0]
    const featured = blogs.filter((value) => value.featured === true)

    return {
      latest,
      featured,
    }
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"
.page
  width: 100%
  position: relative

.stack
  top: 0
  left: 0
  width: 100%
  z-index: 1

.sectionTitle
  font-family: $font-family-koara
  font-weight: bold
  color: $blue-dark

.categories
  display: flex
  flex-wrap: wrap
  justify-content: space-between

.explain
  font-family: $font-family-nunito-sans
  color: $gray-xdark

.cfPopupCmp, .cfBannerCmp
  position: fixed
  z-index: 9

@include for-phone
  .content
    margin: 0 4vw

  .sectionTitle
    font-size: 6vw
    margin-bottom: 4vw

  .section
    margin: 8vw 0

  .feature
    margin-bottom: 6vw

  .explain
    margin: 8vw 4vw
    font-size: 3.75vw

  .category
    margin: 2vw 2vw

  .cfBannerCmp
    bottom: 10vw
    right: 5vw

@include for-tablet
  .content
    width: 40%
    margin: 0 auto

  .sectionTitle
    font-size: 1.75vw
    margin-bottom: 1vw

  .section
    margin: 2vw 0

  .feature
    margin-bottom: 2vw

  .category
    margin: 1vw 1vw

  .explain
    width: fit-content
    margin: 2vw auto
    font-size: 1vw

  .cfBannerCmp
    bottom: 3vw
    left: 2vw
</style>
