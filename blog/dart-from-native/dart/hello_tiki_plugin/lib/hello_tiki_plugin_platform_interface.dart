/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import 'package:plugin_platform_interface/plugin_platform_interface.dart';

import 'hello_tiki_plugin_method_channel.dart';

abstract class HelloTikiPluginPlatform extends PlatformInterface {
  /// Constructs a HelloTikiPluginPlatform.
  HelloTikiPluginPlatform() : super(token: _token);

  static final Object _token = Object();

  static HelloTikiPluginPlatform _instance = MethodChannelHelloTikiPlugin();

  /// The default instance of [HelloTikiPluginPlatform] to use.
  ///
  /// Defaults to [MethodChannelHelloTikiPlugin].
  static HelloTikiPluginPlatform get instance => _instance;

  /// Platform-specific implementations should set this with their own
  /// platform-specific class that extends [HelloTikiPluginPlatform] when
  /// they register themselves.
  static set instance(HelloTikiPluginPlatform instance) {
    PlatformInterface.verifyToken(instance, _token);
    _instance = instance;
  }

  Future<String?> getPlatformVersion() {
    throw UnimplementedError('platformVersion() has not been implemented.');
  }
}
