/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:hello_tiki/hello_tiki.dart';

import 'hello_tiki_plugin_platform_interface.dart';

class MethodChannelHelloTikiPlugin extends HelloTikiPluginPlatform {
  @visibleForTesting
  final methodChannel = const MethodChannel('hello_tiki_channel');

  MethodChannelHelloTikiPlugin() {
    methodChannel.setMethodCallHandler(methodHandler);
  }

  @override
  Future<String?> getPlatformVersion() async {
    final version =
        await methodChannel.invokeMethod<String>('getPlatformVersion');
    return version;
  }

  Future<void> methodHandler(MethodCall call) async {
    switch (call.method) {
      case "hello_tiki":
        HelloTiki().hello();
        break;
    }
  }
}
