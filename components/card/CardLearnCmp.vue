<template>
  <div class="box">
    <card-title-cmp
      v-if="cms.title != null"
      :title="cms.title"
      :subtitle="cms.subtitle"
      class="title"
    />
    <div class="meetButton">
      <card-button-h-cmp v-if="cms.meet != null" :cms="cms.meet" />
    </div>
    <div class="joinButton">
      <card-button-h-cmp v-if="cms.join != null" :cms="cms.join" />
    </div>
    <card-title-cmp
      v-if="cms.follow.title != null"
      :title="cms.follow.title"
      :subtitle="cms.follow.subtitle"
      class="title"
    />
    <div class="buttons">
      <card-button-v-cmp
        v-if="cms.follow.button.one != null"
        :cms="cms.follow.button.one"
        class="button"
      />
      <card-button-v-cmp
        v-if="cms.follow.button.two != null"
        :cms="cms.follow.button.two"
        class="button"
      />
    </div>
    <card-title-cmp
      v-if="cms.tech.title != null"
      :title="cms.tech.title"
      :subtitle="cms.tech.subtitle"
      class="title"
    />
    <div class="tech">
      <card-button-v-cmp
        v-if="cms.tech.button.one != null"
        :cms="cms.tech.button.one"
        class="button"
      />
      <card-button-v-cmp
        v-if="cms.tech.button.two != null"
        :cms="cms.tech.button.two"
        class="button"
      />
      <card-button-v-cmp
        v-if="cms.tech.button.three != null"
        :cms="cms.tech.button.three"
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
