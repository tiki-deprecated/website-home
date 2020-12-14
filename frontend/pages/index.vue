<template>
  <div class="indexPage">
    <header-home-cmp
      v-if="cms.header != null"
      class="headerCmp"
      :cms="cms.header"
    />
    <div class="indexPageCnt">
      <form-signup-cmp
        v-if="cms.join != null"
        :cms="cms.join"
        class="joinCmp"
      />
      <you-can-cmp
        v-if="cms.product != null"
        :cms="cms.product"
        class="productCmp"
      />
      <believe-cmp v-if="cms.learn != null" :cms="cms.learn" class="learnCmp" />
    </div>
    <footer-cmp v-if="cms.footer != null" class="footerCmp" :cms="cms.footer" />
  </div>
</template>

<script>
import HeaderHomeCmp from '~/components/header_home/HeaderHomeCmp'
import FormSignupCmp from '~/components/form_signup/FormSignupCmp'
import YouCanCmp from '~/components/you_can/YouCanCmp'
import BelieveCmp from '~/components/believe/BelieveCmp'
import FooterCmp from '~/components/footer/FooterCmp'

export default {
  name: 'IndexPage',
  components: {
    HeaderHomeCmp,
    FormSignupCmp,
    YouCanCmp,
    BelieveCmp,
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
    max-width: 50%
    margin: 0 auto

@include for-desktop
  .indexPage
    max-width: 35%
    margin: 0 auto
</style>
