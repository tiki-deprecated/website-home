<template>
  <div class="faqCmpQACnt">
    <div class="faqCmpQATitle">{{ question }}</div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="faqCmpQAAnswer" v-html="sanitize" />
    <a v-if="moreLink != null" :href="moreLink" class="faqCmpQAMoreLink">
      <div class="faqCmpQAMoreLinkText">Read more</div>
      <utils-svg-cmp name="sketch/arrow" class="faqCmpQAMoreLinkIcon" />
    </a>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'FaqCmpContent',
  components: { UtilsSvgCmp },
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    moreLink: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    sanitize() {
      return this.answer
        .replace(/\*\*(.*?)\*\*/gm, '<b>$1</b>')
        .replace(/\\[\r\n]\s+/gm, '<br>')
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.faqCmpQATitle
  font-family: $font-family-montserrat
  font-weight: 600
  color: $blue-dark

.faqCmpQAAnswer
  font-family: $font-family-montserrat
  color: $blue-dark

.faqCmpQAMoreLink
  display: flex
  align-items: center
  width: fit-content
  margin: 0 0 0 auto
  cursor: pointer

.faqCmpQAMoreLinkText
  color: $blue
  font-family: $font-family-koara
  font-weight: 700

::v-deep .faqCmpQAMoreLinkIcon.svg
  fill: $blue

.faqCmpQAMoreLink, .faqCmpQAMoreLink:hover, .faqCmpQAMoreLink:visited, .faqCmpQAMoreLink:link, .faqCmpQAMoreLink:active
  text-decoration: none

@include for-phone
  .faqCmpQACnt
    margin-top: 10vw

  .faqCmpQATitle
    font-size: 5vw

  .faqCmpQAAnswer
    font-size: 4vw
    margin-top: 3vw
    margin-bottom: 6vw

  .faqCmpQAMoreLinkText
    font-size: 3.5vw
    margin-right: 1.5vw

  ::v-deep .faqCmpQAMoreLinkIcon.svg
    height: 4vw

@include for-tablet
  .faqCmpQACnt
    margin-top: 1.5vw

  .faqCmpQATitle
    font-size: 1.25vw

  .faqCmpQAAnswer
    font-size: 1vw
    margin: 0.75vw 0

  .faqCmpQAMoreLinkText
    font-size: 0.9vw
    margin-right: 0.5vw

  ::v-deep .faqCmpQAMoreLinkIcon.svg
    height: 1.2vw
</style>
