<template>
  <div class="page">
    <div class="stack">
      <blog-header-cmp />
      <div class="content">
        <blog-list-cmp :blogs="blogs" />
      </div>
      <utils-footer-cmp />
    </div>
  </div>
</template>

<script>
import BlogHeaderCmp from '../../../components/blog/BlogHeaderCmp'
import BlogListCmp from '../../../components/blog/BlogListCmp'
import UtilsFooterCmp from '../../../components/utils/footer/UtilsFooterCmp'

export default {
  name: 'CategorySlug',
  components: {
    UtilsFooterCmp,
    BlogListCmp,
    BlogHeaderCmp,
  },
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

.page
  width: 100%
  position: relative

.stack
  position: absolute
  top: 0
  left: 0
  width: 100%
  z-index: 1

.noBullets
  list-style-type: none
  padding: 0
  margin: 0

.cfPopupCmp, .cfBannerCmp
  position: fixed
  z-index: 9

@include for-phone
  .noBullets
    margin-top: 4vw

  .cfBannerCmp
    bottom: 10vw
    right: 5vw

@include for-tablet
  .content
    width: 40%
    margin: 0 auto

  .noBullets
    margin-top: 2vw

  .cfBannerCmp
    bottom: 3vw
    left: 2vw
</style>
