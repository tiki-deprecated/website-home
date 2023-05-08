//
//  AdViewRepresentable.swift
//  MMA Cubicle
//
//  Created by Michael Audi on 4/11/23.
//

import UIKit
import SwiftUI

struct AdViewRepresentable: UIViewControllerRepresentable {
    var adShown: (Bool) -> Void

    init(adShown: @escaping (Bool) -> Void) {
        self.adShown = adShown
    }

    func makeUIViewController(context: Context) -> UIViewController {
        let viewController = AdViewController()
        viewController.registerCallback(callback: adShown)
        return viewController
      }

    func updateUIViewController(_ uiViewController: UIViewController, context: Context) { }
}
