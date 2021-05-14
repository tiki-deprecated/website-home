<template>
  <div class="privacyPage">
    <nuxt-link to="/">
      <utils-svg-cmp name="utils/logo" class="headerLogo" />
    </nuxt-link>
    <div class="privacyTitle">Privacy Notice</div>
    <div class="privacyDate">05/11/2021</div>
    <div class="privacyBody">
      <div class="privacyLine">
        Thank you for your interest in TIKI. As a privacy-friendly company, we
        are glad you’re reading our privacy notice. We believe strongly in the
        principles of privacy and transparency, which should be evident if
        you’ve gotten this far. We publish our codebase, we publish the
        statistics our website collects, and because our approach is quite
        different from others, we have created this Privacy Notice to explain
        how it is that we collect so little personal data and, for the little we
        do collect, how we use that data.
      </div>
      <div class="privacyLine">
        If you have questions after reading this notice, please contact us at
        privacy@mytiki.com. And, for a deep dive into how TIKI handles data,
        creates anonymous aggregate cohorts, and gets you paid when your
        summarized data is used, see
        <a
          class="privacyLink"
          href="https://medium.com/mytiki/tiki-proposed-architecture-25d746933dd6?source=friends_link&sk=16d9465a4a151a10558d6e934d29ca02"
          >How It Works</a
        >.
      </div>
      <div class="privacyHeading">Privacy and Your Information</div>
      <div class="privacyLine">
        TIKI respects and values both the information you share with us and your
        privacy. We will not sell your personal data. For those unfamiliar with
        the term personal data, here is the European legal
        <a class="privacyLink" href="https://gdpr.eu/eu-gdpr-personal-data/"
          >definition</a
        >, which is commonly adopted by other jurisdictions. In layman's terms,
        it's any data that can be used to identify you either directly or
        indirectly.
      </div>
      <div class="privacyHeading">Scope of the Notice</div>
      <div class="privacyLine">
        This Privacy Notice covers all information we receive when you use our
        mobile app (App) and when you access our website mytiki.com (Site). This
        Notice also covers any personal data you send us via email. Any other
        communications tools used, such as Discord, LinkedIn, or Twitter, are
        governed by the privacy statement of the respective service provider.
        This policy does not cover any other information received by TIKI.
      </div>
      <div class="privacyHeading">How We Collect and Use Information</div>
      <div class="privacyLine">
        TIKI has two main platforms, so to speak: we have the App, which
        individual consumers use, and we have browser-based tools that an
        organization seeking to purchase insight or sentiment data would access.
        Because these operate differently, we’ve separate the explanations here.
      </div>
      <div class="privacyLine"><b class="bold">Via the App</b></div>
      <div class="privacyLine">
        We collect no, repeat, no identifiable data about our individual users
        through the App.
      </div>
      <div class="privacyLine">
        When you open the App for the first time, you are prompted for your
        email address, which will be your ‘user name’ when using the App in the
        future. Your email address never leaves the App and your device; it is
        not provided to us at TIKI. Upon creating your account, the App will
        present you with a private encryption ‘key’, which you must have to
        access the crypto wallet we create on your behalf. We never receive that
        information. You access your wallet via the App. Each time you open the
        App, you will receive a one-time password, so there is no need to
        remember your password.
      </div>
      <div class="privacyLine">
        As we explain in detail in
        <a
          class="privacyLink"
          href="https://medium.com/mytiki/tiki-proposed-architecture-25d746933dd6?source=friends_link&sk=16d9465a4a151a10558d6e934d29ca02"
          >How It Works</a
        >, the App captures purchase details and such from those third party
        accounts you choose to link. The App creates the abstracts or summaries
        of your personal data (social media ‘likes’ and purchase receipts) and
        matches those summaries with cohorts of similar information. When this
        abstracted information is uploaded to a cohort, yours is one of many,
        many records and as such highly unlikely to be identifiable to you. The
        App includes with each upload from your device an identifier associated
        with your crypto wallet so that we know which account to pay when an
        organization accesses a cohort.
      </div>
      <div class="privacyLine">
        Again, from the App, TIKI receives no personal data.
      </div>
      <div class="privacyLine"><b>Via the Site</b></div>
      <div class="privacyLine">
        Besides organizations seeking to access data graphs consisting of
        insights or sentiment details, our Site is typically used by those who
        have created a basic profile so they can offer feedback on improvements
        and such.
      </div>
      <div class="privacyLine">
        The Site collects three types of data, the Contact Information you may
        provide, Anonymous Site Statistics, and Anonymous Infrastructure
        Metrics. When we say anonymous, we mean data that cannot be traced back
        to you—no personal data, no identifying characteristics of any kind.
      </div>
      <div class="privacyLine">
        <ul>
          <li>
            <b>Contact Information:</b> If you choose to provide your personal
            data (email address, phone number, or otherwise), it may only be
            used to deliver important TIKI updates such as feature previews,
            early beta invites, or other notable programs.
          </li>
          <li>
            <b>Anonymous Site Statistics:</b> We collect the following
            <a class="privacyLink" href="https://plausible.io/mytiki.com"
              >anonymous data</a
            >
            to improve business operations, content, and performance of the
            Site.
          </li>
          <li>
            <b>Anonymous Infrastructure Metrics:</b> We collect various
            anonymous data on the infrastructure powering the Site for security,
            maintenance, and improvements. Examples might be errors, load times,
            or cache hits—official
            <a class="privacyLink" href="https://github.com/tiki/website"
              >infrastructure configuration</a
            >.
          </li>
        </ul>
      </div>
      <div class="privacyLine">
        Unlike most sites, we do not use cookies or any other variety of
        ‘tracker’. Hence, no annoying popups and, more importantly, no creepy
        tracking of you.
      </div>
      <div class="privacyHeading">Controlling Your Data</div>
      <div class="privacyLine">
        TIKI’s very mission is to help you control your data. To the extent that
        any personal data is captured within the App, it stays within the App on
        your device. You control the third party accounts that you connect or
        disconnect to the App and thus the data summaries that are included in
        any cohort. Because of our belief in transparency, you can see what
        these summaries are.
      </div>
      <div class="privacyLine">
        On the Site, the only personal data is Contact Information. You have the
        right to access, update, or delete any of your personal data that we
        hold (Contact Information). If you would like to perform any of these
        actions or if you would like your data to be suppressed from future
        communications, you may do so via the Site or by contacting us at
        <a class="privacyLink" href="mailto:privacy@mytiki.com"
          >privacy@mytiki.com</a
        >
        for assistance.
      </div>
      <div class="privacyHeading">Securing your Information</div>
      <div class="privacyLine">
        To ensure that all the information we process is secure, we have put in
        place commercially suitable administrative, physical, and technical to
        safeguard the information we collect on our Site—specific
        <a class="privacyLink" href="https://github.com/tiki">implementation</a>
        details and upload to any data graph.
      </div>
      <div class="privacyLine">
        Nonetheless, the transmission of information via the Internet is not
        completely secure and therefore we cannot guarantee the security of data
        sent to us electronically on our Site, and transmission of such data is
        therefore entirely at your own risk.
      </div>
      <div class="privacyHeading">Third Parties</div>
      <div class="privacyLine">
        Our entire business model is dedicated to not sharing personal data with
        any third parties. Organizations purchasing reports or access to data
        graphs see only the cohorts and even within each cohort individual data
        elements have been abstracted to limit the ability of anyone to link
        data to a person.
      </div>
      <div class="privacyLine">
        We may engage service providers to help us run TIKI as we grow, and they
        would be under strict confidentiality obligations and restrictions on
        processing any data. And even then, recall that the only identifiable
        data we hold is your Contact Information and someone who uses the App
        but has not registered on the Site would never have provided TIKI these
        details.
      </div>
      <div class="privacyLine">
        It is always possible, we suppose, that we may get a request from law
        enforcement for access to our system or that TIKI as a business is sold
        to another company, but those are limited scenarios in which we might
        have to disclose the little information we hold.
      </div>
      <div class="privacyLine">
        If you have any questions, concerns, or complaints about our Site,
        please let us know as soon as possible at
        <a class="privacyLink" href="mailto:privacy@mytiki.com"
          >privacy@mytiki.com</a
        >. Please return to review this Notice occasionally, as we may change it
        from time to time.
      </div>
    </div>
    <utils-footer-cmp class="footerCmp" />
  </div>
</template>

<script>
import UtilsFooterCmp from '../components/utils/footer/UtilsFooterCmp'
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'
export default {
  name: 'Privacy',
  components: { UtilsFooterCmp, UtilsSvgCmp },
  mounted() {
    this.$plausible.trackPageview()
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.privacyPage
  background: $tan-light

::v-deep .headerLogo.svg
  fill: $purple

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
  color: $orange
  font-weight: 600
  text-decoration: none

.privacyHeading
  color: $purple
  font-weight: 600

.bold
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

  .privacyHeading
    margin: 4vw 0
    font-size: 5vw

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

  .privacyHeading
    margin: 1.5vw 0
    font-size: 1.25vw

  .bold
    font-size: 1vw
</style>
