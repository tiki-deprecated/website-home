//
//  D2N_ExampleApp.swift
//  D2N Example
//
//  Created by Michael Audi on 12/5/22.
//

import SwiftUI
import Flutter
import FlutterPluginRegistrant
import hello_tiki_plugin

class FlutterDependencies: ObservableObject {
    let flutterEngine = FlutterEngine(name: "my flutter engine")
    var helloTikiPlugin: SwiftHelloTikiPlugin

    init(){
        flutterEngine.run()
        let registrar = flutterEngine.registrar(forPlugin: "HelloTikiPlugin")
        helloTikiPlugin = SwiftHelloTikiPlugin(registrar: registrar!)
    }

    @main
    struct D2N_ExampleApp: App {
        @StateObject var flutterDependencies = FlutterDependencies()
        var body: some Scene {
            WindowGroup {
                ContentView(plugin: flutterDependencies.helloTikiPlugin)
            }
        }
    }
}
