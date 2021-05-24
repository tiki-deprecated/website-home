<template>
  <div>
    <blog-header-cmp />
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
      <div class="section">
        <div class="sectionTitle">Categories</div>
        <div class="categories">
          <blog-tile-cmp
            image="/blog-images/1*Rqpfp7JPokgvE5Sa48TFMQ.jpg"
            name="Company"
            category="company"
            class="category"
          />
          <blog-tile-cmp
            image="/blog-images/1*grKh1EhOu2IbrFgG-BQ4qQ.jpeg"
            name="Product"
            category="product"
          />
          <blog-tile-cmp
            image="/blog-images/1*mDrAkUAW0w1wkNeMmAHlyA.png "
            name="Help & Support"
            category="help"
          />
          <blog-tile-cmp
            image="/blog-images/1*rDPnLPY-HbA4B0cMfx8lUA.jpeg"
            name="Press & Media"
            category="press"
          />
          <blog-tile-cmp
            image="/blog-images/1*kxlS8zRpCForrH32VIco7g.png"
            name="The Tech"
            category="tech"
          />
          <blog-tile-cmp
            image="/blog-images/1*zKW9Oa-wf-DJxQDRzSy2oQ.png"
            name="All"
            category="all"
          />
        </div>
      </div>
    </div>
    <utils-footer-cmp />
  </div>
</template>

<script>
import BlogHeaderCmp from '../../components/blog/BlogHeaderCmp'
import BlogTileCmp from '../../components/blog/BlogTileCmp'
import BlogCardCmp from '../../components/blog/BlogCardCmp'
import UtilsFooterCmp from '../../components/utils/footer/UtilsFooterCmp'

export default {
  name: 'BlogIndex',
  components: { UtilsFooterCmp, BlogCardCmp, BlogTileCmp, BlogHeaderCmp },
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

.sectionTitle
  font-family: $font-family-koara
  font-weight: bold
  color: $yellow

.categories
  display: flex
  flex-wrap: wrap
  justify-content: space-between

@include for-phone
  .content
    margin: 0 4vw

  .sectionTitle
    font-size: 5vw
    margin-bottom: 2vw

  .section
    margin-top: 8vw

  .feature
    margin-bottom: 4vw

  .category
    margin: 0 2vw

@include for-tablet
  .content
    width: 40%
    margin: 0 auto

  .sectionTitle
    font-size: 2vw
    margin-bottom: 1vw

  .section
    margin-top: 2vw

  .feature
    margin-bottom: 2vw

  .category
    margin: 0 1vw
</style>
