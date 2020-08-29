<template>
  <div class="indexPage">
    <header-cmp v-if="cms.header != null" class="headerCmp" :cms="cms.header" />
    <div class="cardCmps">
      <card-user-cmp
        v-if="cms.card.user != null"
        :cms="cms.card.user"
        class="cardUserCmp"
      />
      <card-buyer-cmp
        v-if="cms.card.buyer != null"
        :cms="cms.card.buyer"
        class="cardBuyerCmp"
      />
      <card-learn-cmp
        v-if="cms.card.learn != null"
        :cms="cms.card.learn"
        class="cardLearnCmp"
      />
    </div>
    <footer-cmp v-if="cms.footer != null" class="footerCmp" :cms="cms.footer" />
  </div>
</template>

<script>
import HeaderCmp from '~/components/header/HeaderCmp'
import CardUserCmp from '~/components/card/CardUserCmp'
import CardBuyerCmp from '~/components/card/CardBuyerCmp'
import CardLearnCmp from '~/components/card/CardLearnCmp'
import FooterCmp from '~/components/footer/FooterCmp'

export default {
  components: {
    HeaderCmp,
    CardUserCmp,
    CardBuyerCmp,
    CardLearnCmp,
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

.cardUserCmp, .cardBuyerCmp, .cardLearnCmp
  margin-top: 1em
</style>
