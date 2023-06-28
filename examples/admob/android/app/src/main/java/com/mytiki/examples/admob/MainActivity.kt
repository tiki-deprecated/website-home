package com.mytiki.examples.admob

import android.os.Bundle
import android.util.Log
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.res.ResourcesCompat
import com.google.android.gms.ads.AdRequest
import com.google.android.gms.ads.LoadAdError
import com.google.android.gms.ads.MobileAds
import com.google.android.gms.ads.interstitial.InterstitialAd
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback
import com.google.android.ump.*
import com.mytiki.tiki_sdk_android.LicenseUsecase
import com.mytiki.tiki_sdk_android.TikiSdk
import com.mytiki.tiki_sdk_android.TitleTag
import com.mytiki.tiki_sdk_android.ui.Permission
import java.util.concurrent.TimeUnit


class MainActivity : AppCompatActivity() {

    private var consentInformation: ConsentInformation? = null
    private val tag = "MainActivity"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        findViewById<Button>(R.id.see_ad).setOnClickListener {
            loadAd()
        }

        TikiSdk
            .offer
            .ptr("YOUR PTR")
            .reward(ResourcesCompat.getDrawable(resources, R.drawable.reward, null)!!)
            .bullet("USAGE BULLET 1", true)
            .bullet("USAGE BULLET 2", false)
            .bullet("USAGE BULLET 3", false)
            .use(listOf(LicenseUsecase.PERSONALIZATION))
            .tag(TitleTag.ADVERTISING_DATA)
            .description("Replace with a description of your data offer (up to 3 lines).")
            .terms(this, "terms.md")
            .add()
        .onAccept{ _, _ ->
            initAdMob()
        }
        .init(this, "PUBLISHING ID","USER ID", onComplete = {
            TikiSdk.present(this)
        })

    }

    private fun initAdMob(){
        /* uncomment to debug UMP
        val debugSettings = ConsentDebugSettings.Builder(this)
            .setDebugGeography(ConsentDebugSettings.DebugGeography.DEBUG_GEOGRAPHY_EEA)
            .addTestDeviceHashedId("69F8934CC7A23E2776AC06317FAE7CFA")
            .build()
        */
        val params = ConsentRequestParameters
            .Builder()
            // .setConsentDebugSettings(debugSettings) // uncomment to debug UMP
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

    private fun loadAd() {
        MobileAds.initialize(this)
        val adRequest = AdRequest.Builder().build()
        InterstitialAd.load(this, "ca-app-pub-3940256099942544/1033173712", adRequest,
            object : InterstitialAdLoadCallback() {
                override fun onAdLoaded(interstitialAd: InterstitialAd) {
                    interstitialAd.show(this@MainActivity)
                }

                override fun onAdFailedToLoad(loadAdError: LoadAdError) {
                    Log.d(tag, loadAdError.toString())
                }
            })
    }

}