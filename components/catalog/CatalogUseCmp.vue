<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <div class="useTitle">Popular <strong class="hlt">use cases</strong></div>
    <div class="usesCases">
      <catalog-wide-cmp
        :img-sizes="[417]"
        img-name="coming_soon"
        img-alt="Coming Soon"
        title="Increase user opt-in rates for data access."
        subtitle="Create data rewards and incentive programs contingent on data access."
        cta="How to add rewards for IDFA Permission →"
        href="https://blog.mytiki.com"
        class="useCase"
      />
      <catalog-wide-cmp
        :img-sizes="[417]"
        img-name="coming_soon"
        img-alt="Coming Soon"
        title="Increase user opt-in rates for data access."
        subtitle="Create data rewards and incentive programs contingent on data access."
        cta="How to add rewards for IDFA Permission →"
        href="https://blog.mytiki.com"
        class="useCase"
      />
      <catalog-wide-cmp
        :img-sizes="[417]"
        img-name="coming_soon"
        img-alt="Coming Soon"
        title="Increase user opt-in rates for data access."
        subtitle="Create data rewards and incentive programs contingent on data access."
        cta="How to add rewards for IDFA Permission →"
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
