<template>
  <div class="faqCmpContentCnt">
    <div class="faqTitle">Your questions</div>
    <faq-cmp-q-a
      question="How much do I get paid?"
      answer="The amount that you get paid will depend on the accounts that you link and the amount of data you want to sell. To start, we estimate you can get paid up to **$10/month**. We believe we can grow this to over $100/month."
      class="faqCmpQA"
    />
    <faq-cmp-q-a
      question="How does TIKI work?"
      answer="TIKI allows you to sell your data. Usually, companies sell your data without your knowledge and you’re not compensated. With TIKI, **you choose which accounts to link** (like Facebook and Google), which data to sell, and who can buy it. You can stop, start, or change your settings at any point."
      class="faqCmpQA"
    />
    <faq-cmp-q-a
      question="How do I sign up?"
      answer="Our Beta is now live. Sign up to take one of the last remaining spaces! We will then let you know when we have reached our goal of 10,000 sign ups and can start getting you paid. "
      class="faqCmpQA"
    />
    <faq-cmp-q-a
      question="How does TIKI affect the accounts I link to it?"
      answer='It simply doesn’t. We’ve all seen those "Login with your Facebook or Google account" buttons. It works like that. Spotify, for example, uses Facebook to make it easy for you to follow your friends.'
      class="faqCmpQA"
    />
    <faq-cmp-q-a
      question="How secure is TIKI?"
      answer="We believe privacy is as important as security. We believe in real transparency; all of our code is public (no secrets or backdoors). We believe in minimizing risk by storing the least amount of data for the least amount of time. We believe that users should be in control of their data. You choose, not us.\
          \
          When every company (including FB) says security comes first, it feels hollow. So while yes, security comes first at TIKI, we also do things very differently because we mean it."
      class="faqCmpQA"
    />
    <faq-cmp-q-a
      question="Can my data be linked to me as an individual?"
      answer='No. Individual data is “de-individualized” so NO ONE ever sees any of your data. We package your data up into anonymized "datasets" - that is, groups of data for thousands of people where no individual can ever be recognized.'
      class="faqCmpQA"
    />
    <faq-cmp-q-a
      question="Are you making money off MY data then?"
      answer="TIKI allows you to make money by selling your data. We don’t charge you and you get 100% of the proceeds from each sale. Instead, we charge the buyers (businesses) a transaction fee for making it all happen. It is similar to how VISA charges businesses rather than you each time you swipe your credit card."
      class="faqCmpQA"
    />
    <faq-cmp-q-a
      question="But you are still selling my data?"
      answer="You choose to sell your data with TIKI. We’re just here to make it possible. You can sell as much as you’d like, or even none at all. You can use our SEE and CONTROL features for free. We believe that all people should be the primary decision-makers when it comes to their data."
      class="faqCmpQA"
    />
  </div>
</template>

<script>
import FaqCmpQA from '@/components/faq/FaqCmpQA'

export default {
  name: 'FaqCmpContent',
  components: { FaqCmpQA },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.faqCmpContentCnt
  position: relative
  margin: 0 auto

.faqTitle
  text-align: center
  font-family: $font-family-montserrat
  color: $blue-dark
  font-weight: 600

@include for-phone
  .faqTitle
    font-size: 6vw

  .faqCmpContentCnt
    width: 80%

@include for-tablet
  .faqTitle
    font-size: 1.5vw

  .faqCmpContentCnt
    width: 50%
</style>
