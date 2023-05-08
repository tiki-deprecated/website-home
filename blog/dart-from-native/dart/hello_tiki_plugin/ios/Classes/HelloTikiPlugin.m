#import "HelloTikiPlugin.h"
#if __has_include(<hello_tiki_plugin/hello_tiki_plugin-Swift.h>)
#import <hello_tiki_plugin/hello_tiki_plugin-Swift.h>
#else
// Support project import fallback if the generated compatibility header
// is not copied when this plugin is created as a library.
// https://forums.swift.org/t/swift-static-libraries-dont-copy-generated-objective-c-header/19816
#import "hello_tiki_plugin-Swift.h"
#endif

@implementation HelloTikiPlugin
+ (void)registerWithRegistrar:(NSObject<FlutterPluginRegistrar>*)registrar {
  [SwiftHelloTikiPlugin registerWithRegistrar:registrar];
}
@end
