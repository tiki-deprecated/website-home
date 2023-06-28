//
//  admob_iosApp.swift
//  admob-ios
//
//  Created by Ricardo on 01/05/23.
//

import SwiftUI
import GoogleMobileAds
import TikiSdk
import UserMessagingPlatform

@main
struct admob_iosApp: App {
    
    init(){
        initTikiSdk()
    }
    
    var body: some Scene {
        WindowGroup {
            Button("Show ad"){
                loadAd()
            }
        }
    }
    
    func initTikiSdk(){
        do{
            try TikiSdk.config()
                .offer
                .permission(.tracking) // IMPORTANT
                .ptr("YOUR PTR")
                .reward("Reward")
                .bullet(text: "USAGE BULLET 1", isUsed: true)
                .bullet(text: "USAGE BULLET 2", isUsed: false)
                .bullet(text: "USAGE BULLET 3", isUsed: false)
                .use(usecases: [.personalization])
                .tag(.advertisingData)
                .description("Replace with a description of your data offer (up to 3 lines).")
                .terms("terms")
                .add()
                .onAccept{ _, _ in
                    checkUMPConsent()
                }
                .initialize(
                    publishingId: "PUBLISHING ID",
                    id: "USER ID", onComplete: {
                        try? TikiSdk.present()
                    })
        }catch{
            print(error)
        }
    }

    func checkUMPConsent(){
           let parameters = UMPRequestParameters()
           parameters.tagForUnderAgeOfConsent = false
           UMPConsentInformation.sharedInstance.requestConsentInfoUpdate(
               with: parameters,
               completionHandler: { error in
                   if(UMPConsentInformation.sharedInstance.consentStatus != .required) {
                       loadAd()
                   }else{
                       UMPConsentForm.load(
                        completionHandler: { form, loadError in
                            if loadError != nil {
                                let formStatus = UMPConsentInformation.sharedInstance.formStatus
                                    if formStatus == UMPFormStatus.available {
                                        UMPConsentForm.load(
                                            completionHandler: { form, loadError in
                                            if loadError != nil {
                                                print(error?.localizedDescription)
                                            }
                                          })
                              }
                            }
                       })
                   }
               })
       }
    
    func loadAd(){
        GADMobileAds.sharedInstance().start()
        let request = GADRequest()
        GADInterstitialAd.load(withAdUnitID: "ca-app-pub-3940256099942544/4411468910",
                    request: request,
          completionHandler: { ad, error in
            if let error = error {
              print("Failed to load interstitial ad with error: \(error.localizedDescription)")
              return
            }
            ad!.present(fromRootViewController: UIApplication.shared.windows.first!.rootViewController!)
          }
        )
    }
}


