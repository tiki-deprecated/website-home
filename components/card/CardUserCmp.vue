<template>
  <div class="box">
    <card-title-cmp
      v-if="title != null"
      :title="title"
      :subtitle="subtitle"
      class="title"
    />
    <card-video-cmp v-if="youtubeId != null" :id="youtubeId" class="vid" />
    <card-signup-cmp
      v-if="cta != null"
      :title="cta"
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
    youtubeId: {
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
