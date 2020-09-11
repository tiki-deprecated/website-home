<template>
  <div class="utilsTitleSubtitleExtendedCmpCnt">
    <utils-title-subtitle-cmp
      v-if="title != null || subtitle != null"
      :title="title"
      :subtitle="subtitle"
      class="utilsTitleSubtitleCmp"
    />
    <div v-if="extended != null" class="utilsTitleSubtitleExtendedCmpExtended">
      {{ extended }}
    </div>
  </div>
</template>

<script>
import UtilsTitleSubtitleCmp from '~/components/utils/UtilsTitleSubtitleCmp'

export default {
  name: 'UtilsTitleSubtitleExtendedCmp',
  components: { UtilsTitleSubtitleCmp },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: null,
    },
    extended: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style scoped lang="sass">
.utilsTitleSubtitleExtendedCmpExtended
  color: $text-light
  font-size: small
  word-break: break-word
  overflow: hidden
  font-weight: normal
  letter-spacing: 0.2ch
  margin-top: 1.5em
</style>
