<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <div class="useTitle">Popular <strong class="hlt">use cases</strong></div>
    <div class="usesCases">
      <catalog-wide-cmp
        :img-sizes="[200, 375, 545, 640]"
        img-name="idfa_prompt"
        img-alt="Choose Better Data"
        img-type="jpg"
        title="Boost IDFA
      Opt-in Rates"
        subtitle="Difficulty level: 3. In this example, we walk
      through adding data rewards to maximize Apple&#39;s App
      Tracking Transparency opt-in rates."
        extra="Use data rewards to increase opt-ins →"
        href="https://docs.mytiki.com/docs/tiki-sdk-flutter-example-idfa"
        class="useCase"
      />
      <catalog-wide-cmp
        :img-sizes="[200, 1170]"
        img-name="tos"
        img-alt="Terms of Service Example"
        title="On-chain Terms of Service"
        subtitle="Difficulty level: 1. We walk through using TIKI to manage the most common form of user data consent —agreeing to the terms of service."
        extra="Manage user consent with TIKI →"
        href="https://docs.mytiki.com/docs/tiki-sdk-flutter-example-on-chain-tos"
        class="useCase"
      />
      <catalog-wide-cmp
        :img-sizes="[200, 520, 745, 919, 1085, 1269, 1400]"
        img-name="choose_better"
        img-alt="Choose Better Data"
        title="Allow Users to Pay for your Subscription with Data"
        subtitle=""
        extra="Coming Next Week"
        href="https://blog.mytiki.com"
        class="useCase"
      />
    </div>
  </div>
</template>

<script>
import CatalogWideCmp from '@/components/catalog/CatalogWideCmp'

export default {
  name: 'CatalogUseCmp',
  components: { CatalogWideCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.useTitle
  font-weight: bold
  color: $green-dark

.hlt
  font-weight: bold
  color: $green

@include for-phone
  .useTitle
    font-size: 2.25em
    margin: 0 auto 40px auto
    text-align: center

  .usesCases
    display: block
    width: fit-content
    margin: auto

  .useCase
    margin: 10px 10px

@include for-tablet
  .useTitle
    font-size: 2.25em
    margin: 0 0 40px 5%

  .usesCases
    display: flex
    align-items: flex-start
    justify-content: space-evenly
    flex-wrap: wrap

  .useCase
    margin: 10px 10px
</style>
