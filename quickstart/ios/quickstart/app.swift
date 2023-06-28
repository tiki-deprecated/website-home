//
// Copyright (c) TIKI Inc.
// MIT license. See LICENSE file in root directory.
//

import SwiftUI

@main
struct app: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .frame(maxWidth: .infinity, maxHeight: .infinity)
                .background(Color.white)
        }
    }
}

struct ContentView: View {
    var body: some View {
        VStack {
            Image("iconLogo").imageScale(.large)
            Text("Let's do this shit").padding(.bottom, 24)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
