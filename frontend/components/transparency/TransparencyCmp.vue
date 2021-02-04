<template>
  <div class="transparencyCnt">
    <div class="transparencyHeading">
      The highest level of transparency - all of our code is open source
    </div>
    <div class="transparencyBody">
      <p>
        Look, we’ve all been burned in the past, companies say they do one thing
        and then they do another. So instead not only are we
        <b>open sourcing all of our code</b>, and everything we do is
        transparent.
      </p>
      <p>
        We’ve been told by business leaders, investors, and experts its crazy,
        it will never work. “Everyone is just going to steal your hard work”.
        Maybe, but to us, trust is more important. We are accountable to you,
        not shareholders, businesses, or governments.
      </p>
      <p>
        <b
          >We’re building TIKI for all of us to take back control of our data
          before its too late.</b
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransparencyCmp',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.transparencyCnt
  font-family: $font-family-montserrat
  text-align: center
  background: $gray-xlight

.transparencyHeading
  font-weight: 600

@include for-phone
@include for-tablet
  .transparencyCnt
    padding: 4vw 0

  .transparencyHeading
    width: 30%
    margin: 0 auto
    font-size: 1.25vw

  .transparencyBody
    width: 75%
    margin: 3vw auto 0 auto
    font-size: 1vw
</style>
