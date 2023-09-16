# TIKI <> AdMob Integration

Integrate TIKI with AdMob to increase your eCPM rates by improving user tracking permission opt-ins (ad personalization).

### Requires

Before starting, you should have the following:
- A basic understanding of Android app development with Kotlin
- An [AdMob account](https://admob.google.com/) with [AdMob Android SDK](https://developers.google.com/admob/android/quick-start) integrated into your Android app.
- A [TIKI account](https://console.mytiki.com), with a project and corresponding API keys.


### How it works

The TIKI SDK Android can be used to increase the user acceptance of the Android Advertising ID usage. AdMob uses [UMP](https://developers.google.com/interactive-media-ads/ump/android/quick-start) to inform the user about activity tracking, and ask their consent.

In this example, we present a compiling offer to the user before UMP prompt. If the user accepts the offer, TIKI creates a licence and shows the user the required UMP prompt. 

## Get Started
1. Configure TIKI SDK with an offer that describes why the app needs to track ads ID.

   ```
    TikiSdk
      .offer
      .ptr("AdTrackingRewarded")
      .reward(ResourcesCompat.getDrawable(resources, R.drawable.offer_img, null)!!)
      .bullet("Learn how our ads perform ", true)
      .bullet("Reach you on other platforms", false)
      .bullet("Sold to other companies", false)
      .use(listOf(
              LicenseUsecase.ATTRIBUTION), listOf("mycompany.com/api/tracking"))
      .tag(TitleTag.ADVERTISING_DATA)
      .description("Share your IDFA (kind of like a serial # for your phone) to get better ads.")
      .terms(this, "terms.md")
      .duration(365, TimeUnit.DAYS)
      .add()
   ```
   Note: Check [our docs](https://mytiki.com/docs/creating-an-offer) for details on the `offer` parameters.

2. Initialize AdMob and check consent information with the User Messaging Platform (UMP).

   Now we need to configure AdMob depending on the user decision of allowing or not allowing tracking. Non-personalized ads do not use device ad tracking id but still track user information through other sources. To comply with local regulatory demands, like GDPR, the user **still needs to consent** that the app collects anonymous data.

   With the new versions of the Google AdMob SDK, it is not recommended that the app tracks user consent by itself. That means that an active License in TIKI SDK cannot replace the Google UMP framework. As stated in [Google AdMob SDK docs](https://developers.google.com/admob/flutter/privacy?hl=en#display-message):
   > "Using alternative ways of checking the consent status—such as checking a cache your app utilizes or looking for a consent string in storage—are strongly discouraged as the set of ad technology partners could have changed since the user last consented."


   ```
    private fun initAdMob(){
        val params = ConsentRequestParameters
            .Builder()
            .build()

        consentInformation = UserMessagingPlatform.getConsentInformation(this)
        consentInformation!!.requestConsentInfoUpdate(this, params,
            {
                val consent = consentInformation!!.consentStatus
                if (consentInformation!!.isConsentFormAvailable) {
                    this.loadForm()
                }
            },
            {
                Log.e(tag, it.toString())
            })
    }

    private fun loadForm() {
        // Loads a consent form. Must be called on the main thread.
        UserMessagingPlatform.loadConsentForm(
            this,
            { it ->
                if (consentInformation!!.consentStatus == ConsentInformation.ConsentStatus.REQUIRED) {
                    it.show(this) { error ->
                        if(error != null) {
                            Log.e(tag, error.message)
                        }
                        if (
                            consentInformation!!.consentStatus != ConsentInformation.ConsentStatus.OBTAINED){
                            // handle no consent
                        }
                    }
                }
            },
            {
                Log.e(tag, it.toString())
            }
        )
    }
   ```

3. Add the `onAccept` callback to initialize AdMob. It is called after the user decides to opt in.

   ```
    TikiSdk
      .offer
      // ... offer config
      .add()
      .onAccept{ _, _ ->
         initAdMob()
      }
   ```

4. Configure and initialize the TIKI SDK with your publishing ID from TIKI Console and your internal user ID. After the initialization is complete, call runApp to build the UI. Use the following code snippet:

   ```
    TikiSdk
      .offer
      // ... offer config
      .add()
      .onAccept{ _, _ ->
         initAdMob()
      }
      .init(this, "<PUBLISHING ID>", "<USER ID>", onComplete = {
      TikiSdk.present(this)
   })
   ```

5. Replace your current ad prompt with the TIKI SDK `present` method. In this example we are calling the method after the TIKI SDK initializes. This method will display the TIKI SDK pre-built UI, letting the user decide whether to license their tracking ID and record the immutable result with TIKI. Once the user makes a decision, the `onAccept` callback will be called, and the user will have to go through the UMP form if required. Add the `onComplete` callback to call `TikiSdk.present(context)`

   ```
    TikiSdk
      .offer
      // ... offer config
      .add()
      .onAccept{ _, _ ->
         initAdMob()
      }
      .init(this, "<PUBLISHING ID>", "<USER ID>", onComplete = {
      TikiSdk.present(this)
   })
   ```

   Here's the full code snippet for configuring and initializing the TIKI SDK:

   ```
     TikiSdk
         .offer
         .ptr("AdTrackingRewarded")
         .reward(ResourcesCompat.getDrawable(resources, R.drawable.offer_img, null)!!)
         .bullet("Learn how our ads perform ", true)
         .bullet("Reach you on other platforms", false)
         .bullet("Sold to other companies", false)
         .use(listOf(
                 LicenseUsecase.ATTRIBUTION), listOf("mycompany.com/api/tracking"))
         .tag(TitleTag.ADVERTISING_DATA)
         .description("Share your IDFA (kind of like a serial # for your phone) to get better ads.")
         .terms(this, "terms.md")
         .duration(365, TimeUnit.DAYS)
         .add()
     .onAccept{ _, _ ->
         initAdMob()
     }
     .init(this, "<PUBLISHING ID>", "<USER ID>", onComplete = {
         TikiSdk.present(this)
     })
   ```

6. **OPTIONAL** You can use the TIKI SDK `guard` method to check if the user still has a valid License before showing ads. If the user doesn't have a valid license, you can prompt them with the TIKI SDK prompt. Use the following code snippet:

```
   TikiSdk.guard(
      "AdTrackingRewarded", 
      listOf(LicenseUsecase.ATTRIBUTION), 
      listOf("mycompany.com/api/tracking"), {
       // LICENSE IS ACTIVE
       // showPersonalizedAds
      },
      {
       // LICENSE IS DENIED
       // CALL TikiSdk.present()
      }
   }
```
