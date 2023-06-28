/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import 'package:flutter/material.dart';
import 'package:idfa/home_page.dart';
import 'package:idfa/tiki_idfa.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  TikiIdfa tikiIdfa = await TikiIdfa(
          'TestUser.dfc4446c-6c70-4504-96bc-853ce0615323',
          Uri.parse('https://example.mytiki.com'))
      .init(address: 'FAyqIORAWigam-BJa7Bu9d07CPLCsMpo0x1mczMkp-4');
  runApp(MyApp(tikiIdfa));
}

class MyApp extends StatelessWidget {
  final TikiIdfa tikiIdfa;

  const MyApp(this.tikiIdfa, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'IDFA Demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: HomePage(tikiIdfa),
    );
  }
}
