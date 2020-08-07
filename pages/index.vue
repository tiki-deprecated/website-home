<template>
  <div class="container">
    <header-cmp class="header" />
    <div class="cards">
      <div class="row1">
        <card-user-cmp
          v-if="cms.card.user != null"
          :cms="cms.card.user"
          class="user"
          @CardSignupCmpSubmit="showModal"
        />
      </div>
      <div class="row2">
        <card-buyer-cmp
          v-if="cms.card.buyer != null"
          :cms="cms.card.buyer"
          class="buyer"
        />
        <card-learn-cmp
          v-if="cms.card.learn != null"
          :cms="cms.card.learn"
          class="learn"
        />
      </div>
    </div>
    <footer-cmp class="footer" />
    <modal-success-cmp
      v-show="isModalVisible"
      v-if="cms.success != null"
      :cms="cms.success"
      class="modal"
      @close="closeModal"
    />
  </div>
</template>

<script>
import HeaderCmp from '~/components/header/HeaderCmp'
import CardUserCmp from '~/components/card/CardUserCmp'
import CardBuyerCmp from '~/components/card/CardBuyerCmp'
import CardLearnCmp from '~/components/card/CardLearnCmp'
import FooterCmp from '~/components/footer/FooterCmp'
import ModalSuccessCmp from '~/components/modal/ModalSuccessCmp'

export default {
  components: {
    HeaderCmp,
    CardUserCmp,
    CardBuyerCmp,
    CardLearnCmp,
    FooterCmp,
    ModalSuccessCmp,
  },
  async asyncData({ $content }) {
    const cms = await $content('index').fetch()
    return { cms }
  },
  data() {
    return {
      isModalVisible: false,
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
}
</script>

<style lang="sass">
@import "assets/styles/mixins"

.container
  width: 100%
  position: relative

.header .footer .cards
  z-index: 2

.header
  margin-bottom: 2em

.modal
  position: fixed
  z-index: 1
  top: 0
  left: 0

@include for-phone
  .cards
    width: 100%

@include for-tablet
  .cards
    margin: 1em 0

@include for-tablet
  .row2
    display: flex
    justify-content: space-between
    max-width: 95%
    margin: 0 auto

@include for-tablet
  .buyer
    width: 40%

@include for-tablet
  .learn
    width: 40%
</style>
