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
        <p>Change your mind, no problem, shut them off. You’re in charge.</p>
      </div>
    </div>
    <div class="howControlCmpTakeImgWrapper">
      <img
        sizes="(max-width: 772px) 100vw, 772px"
        srcset="
          ~/assets/images/control_w_200.png 200w,
          ~/assets/images/control_w_479.png 479w,
          ~/assets/images/control_w_772.png 772w
        "
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
  width: 100%

@include for-phone
  .howControlCmpTakeText, .howControlCmpTakeImgWrapper
    width: 100%

@include for-tablet
  .howControlCmpTakeText, .howControlCmpTakeImgWrapper
    width: 50%
</style>
