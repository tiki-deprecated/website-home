<template>
  <div class="container">
    <header-cmp class="header" />
    <div class="cards">
      <div class="row1">
        <card-user-cmp
          :title="cms.card.user.title"
          :subtitle="cms.card.user.subtitle"
          :youtube-id="cms.card.user.youtubeId"
          :cta="cms.card.user.cta"
          class="user"
          @CardSignupCmpSubmit="showModal"
        />
      </div>
      <div class="row2">
        <card-buyer-cmp
          :title="cms.card.buyer.title"
          :subtitle="cms.card.buyer.subtitle"
          :story-heading="cms.card.buyer.story.heading"
          :story1-url="cms.card.buyer.story.one.url"
          :story1-text="cms.card.buyer.story.one.text"
          :story2-url="cms.card.buyer.story.two.url"
          :story2-text="cms.card.buyer.story.two.text"
          :story3-url="cms.card.buyer.story.three.url"
          :story3-text="cms.card.buyer.story.three.text"
          :cta="cms.card.buyer.cta"
          class="buyer"
        />
        <card-learn-cmp
          :title="cms.card.learn.title"
          :subtitle="cms.card.learn.subtitle"
          :meet-text="cms.card.learn.meet.text"
          :meet-url="cms.card.learn.meet.url"
          :join-text="cms.card.learn.join.text"
          :join-url="cms.card.learn.join.url"
          :follow-title="cms.card.learn.follow.title"
          :follow-subtitle="cms.card.learn.follow.subtitle"
          :follow-button1-icon="cms.card.learn.follow.button.one.icon"
          :follow-button1-url="cms.card.learn.follow.button.one.url"
          :follow-button2-icon="cms.card.learn.follow.button.two.icon"
          :follow-button2-url="cms.card.learn.follow.button.two.url"
          :follow-button3-icon="cms.card.learn.follow.button.three.icon"
          :follow-button3-url="cms.card.learn.follow.button.three.url"
          :tech-title="cms.card.learn.tech.title"
          :tech-subtitle="cms.card.learn.tech.subtitle"
          :tech-button1-icon="cms.card.learn.tech.button.one.icon"
          :tech-button1-url="cms.card.learn.tech.button.one.url"
          :tech-button1-text="cms.card.learn.tech.button.one.text"
          :tech-button2-icon="cms.card.learn.tech.button.two.icon"
          :tech-button2-url="cms.card.learn.tech.button.two.url"
          :tech-button2-text="cms.card.learn.tech.button.two.text"
          :tech-button3-icon="cms.card.learn.tech.button.three.icon"
          :tech-button3-url="cms.card.learn.tech.button.three.url"
          :tech-button3-text="cms.card.learn.tech.button.three.text"
          class="learn"
        />
      </div>
    </div>
    <footer-cmp class="footer" />
    <modal-success-cmp
      v-show="isModalVisible"
      :text="cms.success.text"
      :icon="cms.success.icon"
      :follow-button1-icon="cms.success.follow.button.one.icon"
      :follow-button1-url="cms.success.follow.button.one.url"
      :follow-button2-icon="cms.success.follow.button.two.icon"
      :follow-button2-url="cms.success.follow.button.two.url"
      :follow-button3-icon="cms.success.follow.button.three.icon"
      :follow-button3-url="cms.success.follow.button.three.url"
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
