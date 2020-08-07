<template>
  <div class="box">
    <card-title-cmp
      v-if="cms.title != null"
      :title="cms.title"
      :subtitle="cms.subtitle"
      class="title"
    />
    <card-video-cmp v-if="cms.youtube != null" :id="cms.youtube" class="vid" />
    <card-signup-cmp
      v-if="cms.cta != null"
      :title="cms.cta"
      @CardSignupCmpSubmit="cardSignupCmpSubmit"
    />
  </div>
</template>

<script>
import CardTitleCmp from '~/components/card/CardTitleCmp'
import CardVideoCmp from '~/components/card/CardVideoCmp'
import CardSignupCmp from '~/components/card/CardSignupCmp'

export default {
  name: 'CardUserCmp',
  components: { CardTitleCmp, CardVideoCmp, CardSignupCmp },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
  methods: {
    cardSignupCmpSubmit() {
      this.$emit('CardSignupCmpSubmit')
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

.vid
  margin-bottom: 1.5em
</style>
