//
//  RageView.swift
//  MMA Cubicle
//
//  Created by Michael Audi on 4/11/23.
//

import SwiftUI
import GoogleMobileAds
import AppTrackingTransparency
import AdSupport

struct RageView: View {
    @State var progressValue: Float = 0
    @State var unlocked: String = "???"

    var body: some View {
        VStack {
            Text("UNLOCKED: " + unlocked)
            RageBar(value: $progressValue).frame(height: 20)
            HStack(alignment: .top) {
                VStack{
                    Text("Jeff")
                    Text("Spicoli")
                }
                Spacer()
                VStack{
                    Text("Spiked")
                    Text("Broom")
                }
                Spacer()
                VStack{
                    Text("Tie")
                    Text("Knife")
                }
                Spacer()
                VStack{
                    Text("Tyler")
                    Text("Durdin")
                }
                Spacer()
                VStack{
                    Text("ROI'd")
                    Text("Rage")
                }
            }.padding(.bottom, 50)
            AdViewRepresentable(adShown: {
                res in
                if(res) {
                    self.progressValue += 0.01
                    if(self.progressValue >= 0.95){
                        self.unlocked = "ROI'd Rage"
                    }else if (self.progressValue >= 0.8) {
                        self.unlocked = "Tyler Durdin"
                    }else if (self.progressValue >= 0.5) {
                        self.unlocked = "Tie Knife"
                    }else if (self.progressValue >= 0.3) {
                        self.unlocked = "Spiked Broom"
                    }else if (self.progressValue >= 0.05) {
                        self.unlocked = "Jeff Spicoli"
                    }
                }
            })
                .frame(height: 300)

        }.padding()
    }
}

struct RageView_Previews: PreviewProvider {
    static var previews: some View {
        RageView()
    }
}
