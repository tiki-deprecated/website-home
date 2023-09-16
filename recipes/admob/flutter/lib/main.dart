import 'dart:io';

import 'package:flutter/material.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:tiki_sdk_flutter/tiki_sdk.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await TikiSdk.config()
      .offer
      .reward(Image.asset("lib/assets/images/reward.png"))
      .ptr("YOUR PTR")
      .bullet("USAGE BULLET 1", true)
      .bullet("USAGE BULLET 2", false)
      .bullet("USAGE BULLET 3", false)
      .use([LicenseUsecase.personalization()])
      .tag(TitleTag.advertisingData())
      .description(
          "Replace with a description of your data offer (up to 3 lines).")
      .terms("lib/assets/terms.md")
      .permission(Permission.appTrackingTransparency)
      .add()
      .onAccept((_, __) => _initAdMob())
      .initialize("PUBLISHING ID", "USER ID",
          onComplete: () => runApp(const MaterialApp(
              title: 'TIKI AdMob Example',
              home: Scaffold(body: HomeWidget()))));
}

class HomeWidget extends StatelessWidget {
  const HomeWidget({super.key});

  @override
  Widget build(BuildContext context) {
    Future.delayed(Duration.zero, () => TikiSdk.present(context));
    return Center(
        child: ElevatedButton(
            onPressed: () => _showAd(), child: const Text("Show Ad")));
  }
}

void _initAdMob() {
  ConsentDebugSettings debugSettings = ConsentDebugSettings();
  ConsentRequestParameters params =
      ConsentRequestParameters(consentDebugSettings: debugSettings);
  ConsentInformation.instance.requestConsentInfoUpdate(params, () async {
    if (await ConsentInformation.instance.isConsentFormAvailable()) {
      _loadUmpForm();
    }
  }, (formError) => debugPrint(formError.message));
}

void _loadUmpForm() {
  ConsentForm.loadConsentForm((ConsentForm consentForm) async {
    var status = await ConsentInformation.instance.getConsentStatus();
    if (status == ConsentStatus.required) {
      consentForm.show((FormError? formError) => _loadUmpForm());
    }
  }, (formError) => debugPrint(formError.message));
}

void _showAd() {
  MobileAds.instance.initialize();
  final adUnitId = Platform.isAndroid
      ? 'ca-app-pub-3940256099942544/1033173712'
      : 'ca-app-pub-3940256099942544/4411468910';

  InterstitialAd.load(
      adUnitId: adUnitId,
      request: const AdRequest(),
      adLoadCallback: InterstitialAdLoadCallback(
        onAdLoaded: (ad) {
          ad.show();
        },
        onAdFailedToLoad: (LoadAdError error) {
          debugPrint('InterstitialAd failed to load: $error');
        },
      ));
}
