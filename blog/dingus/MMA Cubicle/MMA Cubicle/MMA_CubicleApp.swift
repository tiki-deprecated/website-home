//
//  MMA_CubicleApp.swift
//  MMA Cubicle
//
//  Created by Michael Audi on 4/11/23.
//

import SwiftUI
import UIKit
import GoogleMobileAds
import TikiSdk


class AppDelegate: NSObject, UIApplicationDelegate {
    func application(_ application: UIApplication,didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        GADMobileAds.sharedInstance().start(completionHandler: nil)
        GADMobileAds.sharedInstance().requestConfiguration.testDeviceIdentifiers = [ GADSimulatorID ]
        try? TikiSdk.config()
            .offer
                .ptr("A7A1C5AF-7153-4016-899C-0471CF27252D")
                .use(usecases: [LicenseUsecase.attribution])
                .tag(.deviceId)
                .reward("reward")
                .description("Trade us your phone's ad identifier for access to unique power ups and crush your opponets.")
                .terms("terms")
                .bullet(text: "Deliver personalized ads", isUsed: true)
                .bullet(text: "Sold to other companies", isUsed: false)
                .bullet(text: "Learn why ads induce rage", isUsed: false)
                .permission(.tracking)
                .add()
            .initialize(publishingId: "f3dbd181-1273-4be7-8a56-a9d258feccda", id: "f81f5e55-90fd-4fe4-a178-21f5222e4a3e")
        return true
    }
}

@main
struct MMA_CubicleApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate

    var body: some Scene {
        WindowGroup {
            HomeView()
        }
    }
}
