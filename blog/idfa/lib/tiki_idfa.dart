/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import 'dart:convert';

import 'package:app_settings/app_settings.dart';
import 'package:app_tracking_transparency/app_tracking_transparency.dart';
import 'package:flutter/material.dart';
import 'package:tiki_sdk_flutter/main.dart';

class TikiIdfa {
  static const String idfaDefault = '00000000-0000-0000-0000-000000000000';

  final String _source;
  final String _backend;
  late final TikiSdk tiki;

  TikiIdfa(String userId, Uri backend)
      : _source = '${userId}_idfa',
        _backend = backend.toString();

  Future<TikiIdfa> init({String? address, bool autoSync = true}) async {
    TikiSdkFlutterBuilder builder = TikiSdkFlutterBuilder()
      ..apiId('b213d6bd-ccff-45c2-805e-4f0062d4ad5e')
      ..origin('com.mytiki.example_idfa');
    if (address != null) builder.address(address);
    tiki = await builder.build();
    String? oid = await _getOid();
    if (oid != null && autoSync) await _sync(oid);
    return this;
  }

  Future<void> sync() async {
    String? oid = await _getOid();
    if (oid != null) return _sync(oid);
  }

  Future<void> _sync(String oid) async {
    ConsentModel? consent = tiki.getConsent(_source);
    bool hasPermission = await _hasIdfaPermission();
    bool hasConsent = _hasIdfaConsent(consent);
    if (hasConsent != hasPermission) {
      return _setIdfaConsent(oid, hasPermission,
          destinationToModify: consent?.destination);
    }
  }

  Future<String?> get({bool autoSync = true}) async {
    String? oid = await _getOid();
    if (oid != null) {
      if (autoSync) await _sync(oid);
      return await AppTrackingTransparency.getAdvertisingIdentifier();
    }
    return null;
  }

  Future<String> request(
    Future<void> Function(AlertDialog) showPopup,
    void Function() dismissPopup,
  ) async {
    String oid = await _getOid() ??
        await tiki
            .assignOwnership(_source, TikiSdkDataTypeEnum.point, ['IDFA']);
    ConsentModel? consent = tiki.getConsent(_source);
    bool hasPermission = await _hasIdfaPermission();
    bool hasConsent = _hasIdfaConsent(consent);

    if (hasConsent && !hasPermission) {
      hasPermission = await _popupFlow(
          'Re-accept IDFA Permissions',
          'If you do not re-accept you will lose your [reward]',
          showPopup,
          dismissPopup);
      await _setIdfaConsent(oid, hasPermission,
          destinationToModify: consent?.destination);
    } else if (!hasConsent && hasPermission) {
      await _setIdfaConsent(oid, hasPermission,
          destinationToModify: consent?.destination);
    } else if (!hasConsent && !hasPermission) {
      hasPermission = await _popupFlow(
        'Trade your IDFA data?',
        "In exchange you will get [reward]",
        showPopup,
        dismissPopup,
      );
      await _setIdfaConsent(oid, hasPermission,
          destinationToModify: consent?.destination);
    }

    return await AppTrackingTransparency.getAdvertisingIdentifier();
  }

  Future<String?> _getOid() async {
    OwnershipModel? ownership = tiki.getOwnership(_source);
    if (ownership != null) {
      return base64UrlEncode(ownership.transactionId!);
    }
    return null;
  }

  Future<bool> _hasIdfaPermission() async {
    String idfa = await AppTrackingTransparency.getAdvertisingIdentifier();
    return idfa == idfaDefault ? false : true;
  }

  bool _hasIdfaConsent(ConsentModel? consent) =>
      consent == null || !consent.destination.paths.contains(_backend)
          ? false
          : true;

  Future<void> _setIdfaConsent(
    String oid,
    bool hasConsent, {
    TikiSdkDestination? destinationToModify,
  }) async {
    List<String> paths = destinationToModify?.paths ?? [];
    hasConsent ? paths.add(_backend) : paths.remove(_backend);
    TikiSdkDestination destination =
        TikiSdkDestination(paths, uses: destinationToModify?.uses ?? []);
    await tiki.modifyConsent(oid, destination);
  }

  Future<bool> _popupFlow(
    String title,
    String body,
    Future<void> Function(AlertDialog) showPopup,
    void Function() dismissPopup,
  ) async {
    bool didAccept = false;
    await showPopup(AlertDialog(
      title: Text(title),
      content: Text(body),
      actions: [
        TextButton(onPressed: dismissPopup, child: const Text('Deny')),
        TextButton(
            onPressed: () {
              didAccept = true;
              dismissPopup();
            },
            child: const Text('Accept'))
      ],
    ));
    if (didAccept) {
      TrackingStatus status =
          await AppTrackingTransparency.requestTrackingAuthorization();
      if (status != TrackingStatus.authorized) {
        await showPopup(AlertDialog(
            title: const Text("Oops! Your permissions don't match"),
            content: const Text(
                "You said yes to [reward] but the setting is disabled. Open App Settings to fix."),
            actions: [
              TextButton(
                  onPressed: () => AppSettings.openAppSettings(),
                  child: const Text('App Settings')),
              TextButton(
                  onPressed: dismissPopup,
                  child: const Text('I dont want [reward]'))
            ]));
      } else {
        return true;
      }
    }
    return false;
  }
}
