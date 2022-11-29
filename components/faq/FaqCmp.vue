<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="faqWrapper">
    <div class="faqs">
      <faq-item-cmp id="10492802309015" class="itemCmp" />
      <faq-item-cmp id="10493498185239" class="itemCmp" />
      <faq-item-cmp id="10495636425239" class="itemCmp" />
      <faq-item-cmp id="10496614759703" class="itemCmp" />
      <faq-item-cmp id="10493260549015" class="itemCmp" />
      <faq-item-cmp id="10496456738711" class="itemCmp" />
      <faq-item-cmp id="10496220652823" class="itemCmp" />
      <faq-item-cmp id="10495858819351" class="itemCmp" />
      <faq-item-cmp id="10495907899287" class="itemCmp" />
      <faq-item-cmp id="10496107265047" class="itemCmp" />
      <utils-btn-cmp
        txt="See More"
        link="https://help.mytiki.com"
        class="faqMore"
        :bkg-color="btnBkg"
        :txt-color="btnTxt"
      />
    </div>
    <picture class="faqImg">
      <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        srcset="
          ~/assets/images/png/faq_pineapple_w_200.png   200w,
          ~/assets/images/png/faq_pineapple_w_785.png   785w,
          ~/assets/images/png/faq_pineapple_w_1400.png 1400w
        "
        src="~/assets/images/png/faq_pineapple_w_1400.png"
        alt="Do you have a question?"
        class="faqImgImg"
      />
    </picture>
  </div>
</template>

<script>
import theme from 'assets/styles/_export.scss'
import FaqItemCmp from '@/components/faq/FaqItemCmp'
import UtilsBtnCmp from '@/components/utils/UtilsBtnCmp'

export default {
  name: 'FaqCmp',
  components: { FaqItemCmp, UtilsBtnCmp },
  data: function () {
    return {
      btnTxt: theme.white,
      btnBkg: theme.purple,
    }
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

@include for-tablet
  .itemCmp
    margin: 10px 0

  .faqImgImg
    width: 100%

  .faqImg
    width: 50%
    max-width: 500px
    display: block

  .faqWrapper
    display: flex
    align-items: flex-start
    justify-content: space-between

  .faqMore
    display: block
    margin: 40px auto

@include for-phone
  .itemCmp
    margin: 10px 0

  .faqImgImg
    width: 100%

  .faqImg
    max-width: 350px
    margin-bottom: 50px
    display: block

  .faqWrapper
    display: flex
    flex-wrap: wrap-reverse

  .faqMore
    display: block
    margin: 40px auto

  .faqs
    margin: auto
</style>
