<template>
  <div>
    <div class="title">How we secure your data</div>
    <div class="body">
      <div class="text">TIKI is all about data privacy.</div>
      <div class="text">
        Your information is encrypted, secured, and will never be shared with
        anyone. It will only be used to communicate with you about our launch.
        Of course, our cloud, servers, and code are as secure as humanly (or
        machinely) possible.
      </div>
      <div class="text">
        This means we will never give your info to third parties or services,
        ever. We use SendGrid to deliver (SMTP) emails and their
        <b class="link" @click="sendGridClick">policy</b>
        is "We never sell your recipient email addresses."
      </div>
    </div>
    <nuxt-link to="/privacy" class="policy">Our privacy policy</nuxt-link>
    <div class="github" @click="githubClick">Our code</div>
  </div>
</template>

<script>
export default {
  name: 'HomePrivacyContentCmp',
  methods: {
    githubClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('Github', {
        props: { location: 'Popup' },
      })
      const win = window.open('https://github.com/tiki', '_blank')
      win.focus()
    },
    sendGridClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('SendGrid', {
        props: { location: 'Popup' },
      })
      const win = window.open(
        'https://sendgrid.com/policies/security/',
        '_blank'
      )
      win.focus()
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.title
  font-family: $font-family-montserrat
  color: $blue-dark
  font-weight: 600

.body
  font-family: $font-family-montserrat
  color: $blue-dark

.policy, .github, .link
  font-family: $font-family-nunito
  color: $blue
  font-weight: 700

.github, .link
  text-decoration: underline
  cursor: pointer

@include for-phone
  .title
    margin-top: 6vw
    font-size: 5vw

  .body
    margin-top: 6vw

  .text
    margin: 3vw 0

  .policy
    margin: 10vw 0 0 0
    font-size: 3.5vw
    display: block

  .github
    margin: 3vw 0 3vw 0
    font-size: 3.5vw
    display: block

@include for-tablet
  .title
    margin-top: 1vw
    font-size: 1.75vw

  .body
    margin-top: 2vw
    font-size: 1.25vw

  .text
    margin: 1vw 0

  .policy
    margin: 3vw 0 0 0
    font-size: 1.25vw
    display: block

  .github
    margin: 1vw 0 1vw 0
    font-size: 1.25vw
    display: block
</style>
