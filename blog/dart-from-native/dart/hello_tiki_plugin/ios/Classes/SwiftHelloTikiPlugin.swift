import Flutter
import UIKit

public class SwiftHelloTikiPlugin: NSObject, FlutterPlugin {
    var channel: FlutterMethodChannel

    public init(registrar: FlutterPluginRegistrar) {
        channel = FlutterMethodChannel(name: "hello_tiki_channel", binaryMessenger: registrar.messenger())
        super.init()
        registrar.addMethodCallDelegate(self, channel: channel)
    }

    public static func register(with registrar: FlutterPluginRegistrar) {
        let instance = SwiftHelloTikiPlugin(registrar: registrar)
    }

    public func handle(_ call: FlutterMethodCall, result: @escaping FlutterResult) {
        result("iOS " + UIDevice.current.systemVersion)
    }

    public func sayHello(){
        channel.invokeMethod("hello_tiki", arguments:  nil)
    }
}
