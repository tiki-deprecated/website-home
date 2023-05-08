/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:tiki_sdk_flutter/main.dart';

class HomePage extends StatelessWidget {
  final TikiSdk tiki;
  final String user;

  const HomePage(this.tiki, this.user, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    OwnershipModel? ownership = tiki.getOwnership(user);
    ConsentModel? consent = tiki.getConsent(user);

    return Scaffold(
        appBar: AppBar(title: const Text('Home')),
        body: SingleChildScrollView(
            child: Column(children: [
          namedField(
              'oid',
              ownership?.transactionId != null
                  ? base64Encode(ownership!.transactionId!)
                  : null),
          namedField('source', ownership?.source),
          namedField('origin', ownership?.origin),
          namedField('about', ownership?.about),
          namedField('contains', ownership?.contains.join(",")),
          namedField('type', ownership?.type.val),
          namedField(
              'cid',
              consent?.transactionId != null
                  ? base64Encode(consent!.transactionId!)
                  : null),
          namedField('destination', consent?.destination.toString()),
          namedField('reward', consent?.reward, onNull: 'no reward'),
          namedField('expiry', consent?.expiry?.toIso8601String(),
              onNull: 'never')
        ])));
  }

  Widget namedField(String name, String? value, {String onNull = 'Not Set'}) =>
      Padding(
          padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 20),
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(name,
                style:
                    const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            const Text(': ',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            Flexible(
                child:
                    Text(value ?? onNull, style: const TextStyle(fontSize: 20)))
          ]));
}
