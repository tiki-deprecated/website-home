//
//  ContentView.swift
//  MMA Cubicle
//
//  Created by Michael Audi on 4/11/23.
//

import SwiftUI
import TikiSdk

struct HomeView: View {
    @State var showRageView: Bool = false

    var body: some View {
        NavigationView{
            VStack {
                if(!showRageView){
                    Text("All Hands")
                    Text("Marketing Meeting")
                        .padding(.bottom, 30)
                    Image("door").onTapGesture {
                        TikiSdk.instance.onAccept({_,_ in
                            showRageView = true
                        })
                        try? TikiSdk.present()
                    }
                    Text("Don't do it...").padding(.top, 30)
                }else if(showRageView){
                   RageView()
                }
            }
            .padding()
            .frame(maxWidth: Double.infinity, maxHeight: Double.infinity)
            .background(Color.white)
        }
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
