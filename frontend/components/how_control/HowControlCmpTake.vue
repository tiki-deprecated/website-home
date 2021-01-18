<template>
  <div class="howControlCmpTakeCnt">
    <div class="howControlCmpTakeText">
      <div class="howControlCmpTakeHeading">How do I take back control?</div>
      <div class="howControlCmpTakeBody">
        <p>By selling your data. When you sell your data:</p>
        <p>
          1) You’re taking away big companies’ power and literally their
          dollars. Their power is based on hoarding all of our data. Instead,
          sell it on the open market and that power evaporates.
        </p>
        <p>
          2) As the seller you make the rules. We’ve all seen the sign we
          reserve the right to refuse service to anyone. Exactly, you choose who
          can buy your data and for what reason.
        </p>
        <p>
          <b>Change your mind, no problem, shut them off. You’re in charge.</b>
        </p>
      </div>
    </div>
    <div class="howControlCmpTakeImgWrapper">
      <img
        src="~/assets/images/control_w_772.png"
        alt=""
        class="howControlCmpTakeImg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowControlCmpTake',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.howControlCmpTakeCnt
  display: flex
  flex-wrap: wrap
  width: 100%

.howControlCmpTakeImg
  height: 100%
  display: block
  margin: 0 auto

.howControlCmpTakeText
  font-family: $font-family-montserrat

.howControlCmpTakeHeading
  font-weight: 600

@include for-phone
  .howControlCmpTakeText
    width: 100%

  .howControlCmpTakeImgWrapper
    width: 100%

@include for-tablet
  .howControlCmpTakeText
    width: 45%
    margin: 0 auto
    font-size: 1vw

  .howControlCmpTakeHeading, .howControlCmpTakeBody
    width: 80%
    margin-left: auto
    margin-right: 0

  .howControlCmpTakeImgWrapper
    width: 45%
    height: 13vw
    margin: 0 auto

  .howControlCmpTakeHeading
    font-size: 1.25vw
</style>
