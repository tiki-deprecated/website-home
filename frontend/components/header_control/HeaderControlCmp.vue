<template>
  <div class="headerControlCnt">
    <div class="headerControlText">
      <div class="headerControlHeading">
        A single app to help you take back control of your data.
      </div>
      <div class="headerControlSubheading">
        You no longer have to worry about how your data is being used. With
        TIKI, you can be the boss of your data, all with a few simple clicks
      </div>
    </div>
    <div class="headerControlFormWrapper">
      <header-control-cmp-form class="headerControlCmpForm" />
    </div>
  </div>
</template>

<script>
import HeaderControlCmpForm from '@/components/header_control/HeaderControlCmpForm'

export default {
  name: 'HeaderControlCmp',
  components: { HeaderControlCmpForm },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.headerControlCnt
  display: flex
  flex-wrap: wrap
  width: 100%
  background: $gray-xxlight

.headerControlText
  font-family: $font-family-montserrat
  color: $black

@include for-phone
  .headerControlText,.headerControlCmpForm
    width: 100%

@include for-tablet
  .headerControlText,.headerControlFormWrapper
    width: 50%

  .headerControlHeading
    font-size: 2vw
    width: 60%
    margin: 7vw auto 0 auto

  .headerControlSubheading
    font-size: 1vw
    width: 60%
    margin: 1vw auto

  .headerControlCmpForm
    margin: 2vw auto
    width: 80%
</style>
