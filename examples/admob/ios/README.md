# TIKI <> AdMob Integration

Integrate TIKI with AdMob to increase your eCPM rates by improving user tracking permission opt-ins (ad personalization).

### Requires

Before starting, you should have the following:
- A basic understanding of iOS app development using Swift
- An [AdMob account](https://admob.google.com/) with [AdMob iOS SDK](https://developers.google.com/admob/ios/quick-start) integrated into your iOS app.
- A [TIKI account](https://console.mytiki.com), with a project and corresponding API keys.


### How it works

The TIKI SDK iOS can be used to increase the user acceptance of the mandatory App Tracking Transparency (ATT) prompt in iOS. AdMob uses [UMP](https://developers.google.com/interactive-media-ads/ump/ios/quick-start) to inform the user about activity tracking, and ask their consent.
In this example, we present a compiling offer to the user before UMP prompt. If the user accepts the offer, TIKI creates a licence and shows the user the required UMP prompt. 

## Get Started

1. Configure TIKI SDK with an offer that requires the tracking permission. This ensures that TIKI SDK only creates a License if the user has allowed tracking.

   ```swift
       TikiSdk.config()
            .offer
                .permission(.tracking) // IMPORTANT
                .ptr("AdTrackingRewarded")
                .reward("offerImage") 
                .bullet(text: "Learn how our ads perform ", isUsed: true)
                .bullet(text: "Reach you on other platforms", isUsed: false)
                .bullet(text: "Sold to other companies", isUsed: false)
                .use(usecases: [LicenseUsecase(LicenseUsecaseEnum.attribution)], destinations: ["mycompany.com/api/tracking"])
                .tag(.advertisingData)
                .description("Share your IDFA (kind of like a serial # for your phone) to get better ads.")
                .terms("terms") 
                .duration(365 * 24 * 60 * 60)
                .add()
   ```
   Note: Check [TIKI SDK iOS docs](https://mytiki.com/docs/creating-an-offer) for details on the `offer` parameters.

2. Check consent information with the User Messaging Platform (UMP).

   Now we need to configure AdMob depending on the user decision of allowing or not allowing tracking. Non-personalized ads do not use device ad tracking id (IDFA) but still track user information through other sources. To comply with local regulatory demands, like GDPR, the user **still needs to consent** that the app collects anonymous data. 
   
   With the new versions of the Google AdMob SDK, it is not recommended that the app tracks user consent by itself. That means that an active License in TIKI SDK cannot replace the Google UMP framework. As stated in [Google AdMob SDK docs](https://developers.google.com/admob/ios/privacy?hl=en#display-message): 
   > "Using alternative ways of checking the consent status—such as checking a cache your app utilizes or looking for a consent string in storage—are strongly discouraged as the set of ad technology partners could have changed since the user last consented."

   
   ```
   func checkUMPConsent(){
        let parameters = UMPRequestParameters()
        parameters.tagForUnderAgeOfConsent = false
        UMPConsentInformation.sharedInstance.requestConsentInfoUpdate(
            with: parameters,
            completionHandler: { error in
                if error != nil {
                    // Handle the error.
                } else {
                    if(UMPConsentInformation.sharedInstance.consentStatus == .required) {
                        // Consent is required, show UMP form.
                    } else {
                        // Consent is not required. 
                    }
                }
            })
    }
   ```
   Note: Check [our docs](https://mytiki.com/docs/creating-an-offer) for details on the `offer` parameters.

3. Add the `onAccept` and `onDecline` callbacks. These callbacks are called after the user decides to opt in or not. Either decision the user makes, it needs to go through the UMP consent flow as per AdMob docs.

   ```
       TikiSdk.config()
            .offer
                // ... 
                // offer details
                // ...
                .add()
            .onAccept{ _, _ in
                checkUMPConsent()
            }
   ```

   These callbacks will trigger after the user accepts or declines the license offer presented by the TIKI SDK. The `onAccept` callback will initiate the UMP form flow by calling the `checkUMPConsent()` function. Similarly, the `onDecline` callback will also call the `checkUMPConsent()` function to handle the user's decision.

4. Configure and initialize the TIKI SDK with your publishing ID from TIKI Console and your internal user ID. Use the following code snippet:

   ```
    TikiSdk.config()
        .offer
            // offer details and onAccept callback
            // ...
            .onDecline{ _, _ in
                showDefaultAds()
            }
        .initialize(
            publishingId: "<PUBLISHING ID>",
            id: "<USER ID>")
   ```

5. Replace your current ATT prompt with the TIKI SDK `present` method. This method will display the TIKI SDK pre-built UI, letting the user decide whether to license their tracking ID and record the immutable result with TIKI. Once the user makes a decision, the `onAccept` or `onDecline` callbacks will be called, and the user will have to go through the UMP form if required. Use the following code snippet:

   ```
    TikiSdk.present()
   ```

   Here's the full code snippet for configuring and initializing the TIKI SDK:

   ```
    TikiSdk.config()
        .offer
            .permission(.tracking) // IMPORTANT
            .ptr("AdTrackingRewarded")
            .reward("offerImage") 
            .bullet(text: "Learn how our ads perform ", isUsed: true)
            .bullet(text: "Reach you on other platforms", isUsed: false)
            .bullet(text: "Sold to other companies", isUsed: false)
            .use(usecases: [LicenseUsecase(LicenseUsecaseEnum.attribution)], destinations: ["mycompany.com/api/tracking"])
            .tag(.advertisingData)
            .description("Share your IDFA (kind of like a serial # for your phone) to get better ads.")
            .terms("terms") 
            .duration(365 * 24 * 60 * 60)
            .add()
        .onAccept{ _, _ in
            checkUMPConsent()
        }
        .initialize(
            publishingId: "<PUBLISHING ID>",
            id: "<USER ID>")
   ```

6. **OPTIONAL** You can use the TIKI SDK `guard` method to check if the user still has a valid License before showing ads. If the user doesn't have a valid license, you can prompt them with the TIKI SDK prompt. Use the following code snippet:

   ```
    await TikiSdk.guard(
        ptr: "AdTrackingRewarded",
        usecases: [LicenseUsecase.attribution],
        destinations: ["mycompany.com/api/tracking"],
        onPass: showPersonalizedAds,
        onFail: {_ in TikiSdk.present()})
   ```
