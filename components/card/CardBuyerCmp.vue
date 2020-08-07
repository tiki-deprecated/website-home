<template>
  <div class="box">
    <card-title-cmp
      v-if="cms.title != null"
      :title="cms.title"
      :subtitle="cms.subtitle"
      class="title"
    />
    <div class="buttons">
      <div v-if="cms.story.heading != null" class="buttonHeader">
        {{ cms.story.heading }}
      </div>
      <card-button-h-cmp
        v-if="cms.story.one != null"
        :cms="cms.story.one"
        class="button"
      />
      <card-button-h-cmp
        v-if="cms.story.two != null"
        :cms="cms.story.two"
        class="button"
      />
      <card-button-h-cmp
        v-if="cms.story.three != null"
        :cms="cms.story.three"
        class="button"
      />
    </div>
    <card-signup-cmp v-if="cms.cta != null" :title="cms.cta" />
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
    cms: {
      type: Object,
      required: true,
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
