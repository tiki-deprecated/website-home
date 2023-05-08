/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import 'hello_tiki_plugin_method_channel.dart';
import 'hello_tiki_plugin_platform_interface.dart';

class HelloTikiPlugin {
  final MethodChannelHelloTikiPlugin methodChannelHelloTikiPlugin;

  HelloTikiPlugin()
      : methodChannelHelloTikiPlugin = MethodChannelHelloTikiPlugin();

  Future<String?> getPlatformVersion() {
    return HelloTikiPluginPlatform.instance.getPlatformVersion();
  }
}
