<template>
  <div class="privacyPage">
    <nuxt-link to="/">
      <utils-svg-cmp name="tiki/logo" class="headerLogo" />
    </nuxt-link>
    <div class="privacyTitle">Privacy Policy</div>
    <div class="privacyDate">09/24/2020</div>
    <div class="privacyBody">
      <div class="privacyLine">
        TIKI is committed to protecting and preserving your privacy.
      </div>
      <div class="privacyLine">
        This page informs you of our policies regarding the collection, use, and
        disclosure of data we receive from the use of mytiki.com ("Site").
      </div>
      <div class="privacyLine">
        Our Site does not collect any personal data except contact information
        if you choose to provide it. We do not share any personal data.
      </div>
      <div class="privacyLine">
        For those unfamiliar with the term personal data, here is the official
        legal
        <a class="privacyLink" href="https://gdpr.eu/eu-gdpr-personal-data/"
          >definition</a
        >. In layman's terms, it's any data that can be used to identify you
        either directly or indirectly—for example, an email address or a name.
      </div>
      <div class="privacyLine">
        By using this Site, you consent to the privacy practices and use of data
        that you provide us in accordance with this Privacy Policy. We do update
        this Privacy Policy from time to time, so please review this Privacy
        Policy regularly. If we materially alter our Privacy Policy, we will
        notify you of such changes by posting a notice on our Site and, if
        applicable, using the contact information you provided. Your continued
        use of the Site will be deemed your agreement that your data may be used
        in accordance with the new policy. If you do not agree with the changes,
        then you should stop using the Site, and you should notify us that you
        do not want your information used in accordance with the changes.
      </div>
      <div class="privacyLine">
        Unlike most sites, we do not use cookies. Hence, no annoying popups and,
        more importantly, no creepy tracking of you.
      </div>
      <div class="privacyLine">
        This Site collects three types of data, the Contact Information you may
        provide, Anonymous Site Statistics, and Anonymous Infrastructure
        Metrics. When we say anonymous, we mean data that cannot be traced back
        to you—no personal data, no identifying characteristics of any kind.
      </div>
      <div class="privacyLine">
        Contact Information: If you choose to provide your contact information
        (email address, phone number, or otherwise), it may only be used to
        deliver important TIKI updates such as feature previews, early beta
        invites, or other notable programs.
      </div>
      <div class="privacyLine">
        You have the right to access, update, or delete any of your personal
        data that we hold (Contact Information). If you would like to perform
        any of these actions, please contact us at
        <a class="privacyLink" href="mailto:hello@mytiki.com)"
          >hello@mytiki.com</a
        >.
      </div>
      <div class="privacyLine">
        Anonymous Site Statistics: We collect the following
        <a class="privacyLink" href="https://plausible.io/mytiki.com"
          >anonymous data</a
        >
        to improve business operations, content, and performance of the Site.
      </div>
      <div class="privacyLine">
        Anonymous Infrastructure Metrics: We collect various anonymous data on
        the infrastructure powering the Site for security, maintenance, and
        improvements. Examples might be errors, load times, or cache
        hits—official
        <a class="privacyLink" href="https://github.com/tiki/website"
          >infrastructure configuration</a
        >.
      </div>
      <div class="privacyLine">
        To ensure that your information is secure, we have put in place
        commercially suitable physical, electronic, and managerial procedures to
        safeguard and secure the information we collect on our Site—specific
        <a class="privacyLink" href="https://github.com/tiki/website"
          >implementation details</a
        >.
      </div>
      <div class="privacyLine">
        Nonetheless, the transmission of information via the Internet is not
        completely secure and therefore we cannot guarantee the security of data
        sent to us electronically on our Site, and transmission of such data is
        therefore entirely at your own risk.
      </div>
      <div class="privacyLine">
        If you have any questions, concerns, or complaints about our Site,
        please let us know as soon as possible at
        <a class="privacyLink" href="mailto:hello@mytiki.com"
          >hello@mytiki.com</a
        >.
      </div>
    </div>
    <footer-cmp class="footerCmp" />
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'
import FooterCmp from '~/components/footer/FooterCmp'
export default {
  name: 'Privacy',
  components: { FooterCmp, UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.privacyPage
  background: $yellow-xxlight

::v-deep .headerLogo.svg
  fill: $black-dark

.privacyTitle
  font-family: $font-family-koara
  color: $purple
  text-align: center
  font-weight: 600

.privacyDate
  font-family: $font-family-montserrat
  color: $purple
  text-align: center

.privacyBody
  font-family: $font-family-montserrat
  color: $black-dark
  text-align: left

.privacyLink
  color: $purple
  font-weight: 600

@include for-phone
  .privacyPage
    width: 100%

  ::v-deep .headerLogo.svg
    height: 8vw
    padding: 4vw 0 0 4vw

  .privacyTitle
    margin-top: 8vw
    font-size: 8vw

  .privacyDate
    margin-top: 2vw
    font-size: 6vw

  .privacyBody
    margin: 8vw auto
    width: 90%

  .privacyLine
    margin: 4vw 0

@include for-tablet
  .privacyPage
    width: 100%

  ::v-deep .headerLogo.svg
    height: 2vw
    padding: 1.5vw 0 0 1.5vw

  .privacyTitle
    margin-top: 1vw
    font-size: 2.25vw

  .privacyDate
    margin-top: 0.75vw
    font-size: 1.25vw

  .privacyBody
    margin: 3vw auto
    width: 75%

  .privacyLine
    margin: 1.5vw 0
</style>
