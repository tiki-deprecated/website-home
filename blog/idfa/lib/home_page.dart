/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import 'package:flutter/material.dart';
import 'package:idfa/tiki_idfa.dart';

class HomePage extends StatefulWidget {
  final TikiIdfa tikiIdfa;

  const HomePage(this.tikiIdfa, {super.key});

  @override
  State<StatefulWidget> createState() => _HomePage();
}

class _HomePage extends State<HomePage> {
  String? _idfa;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: const Text('IDFA Example')),
        body: Center(
            child: Column(mainAxisSize: MainAxisSize.min, children: [
          FutureBuilder<String?>(
            future: widget.tikiIdfa.get(),
            builder: (BuildContext context, AsyncSnapshot<String?> snapshot) {
              _idfa = snapshot.data;
              return Text("IDFA: ${_idfa ?? "???"}");
            },
          ),
          ElevatedButton(
              onPressed: _idfa == null || _idfa == TikiIdfa.idfaDefault
                  ? () async {
                      String idfa = await widget.tikiIdfa.request(
                        (dialog) => showPopup(context, dialog),
                        () => Navigator.of(context).pop(),
                      );
                      setState(() {
                        _idfa = idfa;
                      });
                    }
                  : null,
              child: const Text("Request IDFA"))
        ])));
  }

  Future<void> showPopup(BuildContext context, AlertDialog dialog) {
    return showDialog<void>(
        context: context,
        barrierDismissible: true,
        builder: (BuildContext context) {
          return dialog;
        });
  }
}
