<template>
  <div class="box">
    <card-title-cmp
      v-if="title != null"
      :title="title"
      :subtitle="subtitle"
      class="title"
    />
    <div class="meetButton">
      <card-button-h-cmp
        v-if="meetText != null && meetUrl != null"
        :url="meetUrl"
        :text="meetText"
        button-color="#f3a12c"
      />
    </div>
    <div class="joinButton">
      <card-button-h-cmp
        v-if="joinText != null && joinUrl != null"
        :url="joinUrl"
        :text="joinText"
        button-color="#f3a12c"
      />
    </div>
    <card-title-cmp
      v-if="followTitle != null"
      :title="followTitle"
      :subtitle="followSubtitle"
      class="title"
    />
    <div class="buttons">
      <card-button-v-cmp
        v-if="followButton1Icon != null && followButton1Url != null"
        :icon="followButton1Icon"
        :url="followButton1Url"
        class="button"
      />
      <card-button-v-cmp
        v-if="followButton2Icon != null && followButton2Url != null"
        :icon="followButton2Icon"
        :url="followButton2Url"
        class="button"
      />
      <card-button-v-cmp
        v-if="followButton3Icon != null && followButton3Url != null"
        :icon="followButton3Icon"
        :url="followButton3Url"
        class="button"
      />
    </div>
    <card-title-cmp
      v-if="techTitle != null"
      :title="techTitle"
      :subtitle="techSubtitle"
      class="title"
    />
    <div class="tech">
      <card-button-v-cmp
        v-if="techButton1Icon != null && techButton1Url != null"
        :icon="techButton1Icon"
        :url="techButton1Url"
        :text="techButton1Text"
        class="button"
      />
      <card-button-v-cmp
        v-if="techButton2Icon != null && techButton2Url != null"
        :icon="techButton2Icon"
        :url="techButton2Url"
        :text="techButton2Text"
        class="button"
      />
      <card-button-v-cmp
        v-if="techButton3Icon != null && techButton3Url != null"
        :icon="techButton3Icon"
        :url="techButton3Url"
        :text="techButton3Text"
        class="button"
      />
    </div>
  </div>
</template>

<script>
import CardTitleCmp from '~/components/card/CardTitleCmp'
import CardButtonHCmp from '~/components/card/CardButtonHCmp'
import CardButtonVCmp from '~/components/card/CardButtonVCmp'

export default {
  name: 'CardUserCmp',
  components: { CardTitleCmp, CardButtonVCmp, CardButtonHCmp },
  props: {
    title: {
      type: String,
      required: false,
      default: null,
    },
    subtitle: {
      type: String,
      required: false,
      default: null,
    },
    meetText: {
      type: String,
      required: false,
      default: null,
    },
    meetUrl: {
      type: String,
      required: false,
      default: null,
    },
    joinText: {
      type: String,
      required: false,
      default: null,
    },
    joinUrl: {
      type: String,
      required: false,
      default: null,
    },
    followTitle: {
      type: String,
      required: false,
      default: null,
    },
    followSubtitle: {
      type: String,
      required: false,
      default: null,
    },
    followButton1Url: {
      type: String,
      required: false,
      default: null,
    },
    followButton1Icon: {
      type: String,
      required: false,
      default: null,
    },
    followButton2Url: {
      type: String,
      required: false,
      default: null,
    },
    followButton2Icon: {
      type: String,
      required: false,
      default: null,
    },
    followButton3Url: {
      type: String,
      required: false,
      default: null,
    },
    followButton3Icon: {
      type: String,
      required: false,
      default: null,
    },
    techTitle: {
      type: String,
      required: false,
      default: null,
    },
    techSubtitle: {
      type: String,
      required: false,
      default: null,
    },
    techButton1Url: {
      type: String,
      required: false,
      default: null,
    },
    techButton1Icon: {
      type: String,
      required: false,
      default: null,
    },
    techButton1Text: {
      type: String,
      required: false,
      default: null,
    },
    techButton2Url: {
      type: String,
      required: false,
      default: null,
    },
    techButton2Icon: {
      type: String,
      required: false,
      default: null,
    },
    techButton2Text: {
      type: String,
      required: false,
      default: null,
    },
    techButton3Url: {
      type: String,
      required: false,
      default: null,
    },
    techButton3Icon: {
      type: String,
      required: false,
      default: null,
    },
    techButton3Text: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style scoped lang="sass">
.box
  margin: 1em auto
  max-width: 85%
  background-color: white
  box-shadow: 0 0 .5em rgba($orange, 0.05)
  padding: 1.5em 1em

.title
  margin-bottom: 1em

.buttons
  display: flex
  margin-bottom: 1.5em

.button
  margin-right: 2em

.tech
  display: flex

.meetButton
  margin-bottom: 1em

.joinButton
  margin-bottom: 1.5em
</style>
