<template>
  <div class="indexPage">
    <header-cmp v-if="cms.header != null" class="headerCmp" :cms="cms.header" />
    <div class="indexPageCnt">
      <join-cmp v-if="cms.join != null" :cms="cms.join" class="joinCmp" />
      <product-cmp
        v-if="cms.product != null"
        :cms="cms.product"
        class="productCmp"
      />
      <learn-cmp v-if="cms.learn != null" :cms="cms.learn" class="learnCmp" />
    </div>
    <footer-cmp v-if="cms.footer != null" class="footerCmp" :cms="cms.footer" />
  </div>
</template>

<script>
import HeaderCmp from '~/components/header/HeaderCmp'
import JoinCmp from '~/components/join/JoinCmp'
import ProductCmp from '~/components/product/ProductCmp'
import LearnCmp from '~/components/learn/LearnCmp'
import FooterCmp from '~/components/footer/FooterCmp'

export default {
  components: {
    HeaderCmp,
    JoinCmp,
    ProductCmp,
    LearnCmp,
    FooterCmp,
  },
  async asyncData({ $content }) {
    const cms = await $content('index').fetch()
    return { cms }
  },
}
</script>

<style lang="sass">
@import "assets/styles/mixins"

.indexPage
  width: 100%
  position: relative

.indexPageCnt
  margin: 0 auto 0 auto

.joinCmp, .productCmp, .learnCmp
  margin-top: 1em

@include for-tablet
  .indexPage
    max-width: 60%
    margin: 0 auto 0 auto

@include for-desktop
  .indexPage
    max-width: 40%
    margin: 0 auto 0 auto
</style>
