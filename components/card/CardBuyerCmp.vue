<template>
  <div class="box">
    <card-title-cmp
      v-if="title != null"
      :title="title"
      :subtitle="subtitle"
      class="title"
    />
    <div class="buttons">
      <div v-if="storyHeading != null" class="buttonHeader">
        {{ storyHeading }}
      </div>
      <card-button-h-cmp
        v-if="story1Text != null && story1Url != null"
        :url="story1Url"
        :text="story1Text"
        class="button"
        button-color="#52ffb8"
      />
      <card-button-h-cmp
        v-if="story2Text != null && story2Url != null"
        :url="story2Url"
        :text="story2Text"
        class="button"
        button-color="#52ffb8"
      />
      <card-button-h-cmp
        v-if="story3Text != null && story3Url != null"
        :url="story3Url"
        :text="story3Text"
        class="button"
        button-color="#52ffb8"
      />
    </div>
    <card-signup-cmp v-if="cta != null" :title="cta" />
  </div>
</template>

<script>
import CardTitleCmp from '~/components/card/CardTitleCmp'
import CardButtonHCmp from '~/components/card/CardButtonHCmp'
import CardSignupCmp from '~/components/card/CardSignupCmp'
export default {
  name: 'CardUserCmp',
  components: { CardTitleCmp, CardButtonHCmp, CardSignupCmp },
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
    storyHeading: {
      type: String,
      required: false,
      default: null,
    },
    story1Text: {
      type: String,
      required: false,
      default: null,
    },
    story1Url: {
      type: String,
      required: false,
      default: null,
    },
    story2Text: {
      type: String,
      required: false,
      default: null,
    },
    story2Url: {
      type: String,
      required: false,
      default: null,
    },
    story3Text: {
      type: String,
      required: false,
      default: null,
    },
    story3Url: {
      type: String,
      required: false,
      default: null,
    },
    cta: {
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
  margin-bottom: 1.5em

.button
  margin: 1em 0

.buttons
  margin-bottom: 1.5em

.buttonHeader
  font-size: medium
  font-weight: bold
  margin-bottom: 0.5em
  color: $brown
</style>
