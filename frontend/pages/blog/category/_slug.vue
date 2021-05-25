<template>
  <div>
    <blog-header-cmp />
    <div class="content">
      <blog-list-cmp :blogs="blogs" />
    </div>
    <utils-footer-cmp />
  </div>
</template>

<script>
import BlogHeaderCmp from '../../../components/blog/BlogHeaderCmp'
import BlogListCmp from '../../../components/blog/BlogListCmp'
import UtilsFooterCmp from '../../../components/utils/footer/UtilsFooterCmp'

export default {
  name: 'CategorySlug',
  components: { UtilsFooterCmp, BlogListCmp, BlogHeaderCmp },
  async asyncData({ $content, params }) {
    const all = await $content('blogs').sortBy('updatedAt', 'desc').fetch()
    const blogs =
      params.slug === 'all'
        ? all
        : all.filter((value) => value.category === params.slug)
    return { blogs }
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.noBullets
  list-style-type: none
  padding: 0
  margin: 0

@include for-phone
  .noBullets
    margin-top: 4vw

@include for-tablet
  .content
    width: 40%
    margin: 0 auto

  .noBullets
    margin-top: 2vw
</style>
