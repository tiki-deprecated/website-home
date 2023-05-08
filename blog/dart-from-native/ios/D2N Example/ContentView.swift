//
//  ContentView.swift
//  D2N Example
//
//  Created by Michael Audi on 12/5/22.
//

import SwiftUI
import hello_tiki_plugin


struct ContentView: View {
    var helloTikiPlugin: SwiftHelloTikiPlugin

    init(plugin: SwiftHelloTikiPlugin){
        helloTikiPlugin = plugin
    }

    var body: some View {
        VStack {
            Button("Say Hello in Dart") {
                helloTikiPlugin.sayHello()
            }
        }
        .padding()
    }
}
