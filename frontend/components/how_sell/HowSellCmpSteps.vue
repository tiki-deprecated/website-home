<template>
  <div class="howSellCmpStepsCnt">
    <img
      :src="require(`~/assets/images/png/control/${img}.png`)"
      class="howSellCmpStepsImg"
      alt=""
    />
    <div class="howSellCmpStepsText">
      <div class="howSellCmpStepsTitle">{{ title }}</div>
      <div class="howSellCmpStepsBody">{{ body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowSellCmpSteps',
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.howSellCmpStepsText
  text-align: center

.howSellCmpStepsImg
  margin: 0 auto
  display: block

.howSellCmpStepsTitle
  font-weight: 600

@include for-phone
@include for-tablet
  .howSellCmpStepsText
    margin-top: 1vw
    font-size: 0.9vw

  .howSellCmpStepsBody
    margin-top: 1vw

  .howSellCmpStepsImg
    height: 10vw
</style>
