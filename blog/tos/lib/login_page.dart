/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import 'package:flutter/material.dart';
import 'package:tiki_sdk_flutter/main.dart';
import 'package:uuid/uuid.dart';

import 'home_page.dart';

class LoginPage extends StatefulWidget {
  final TikiSdk tiki;

  const LoginPage(this.tiki, {Key? key}) : super(key: key);

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  String? oid;
  bool? isAgreed;
  String? user;

  @override
  void initState() {
    user = "user_${const Uuid().v4()}";
    widget.tiki
        .assignOwnership(user!, TikiSdkDataTypeEnum.point, ["user_id"],
            about: "You can put the Terms of Service the user agreed to here.")
        .then((oid) => this.oid = oid);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: const Text('Terms of Service Example')),
        body: Center(
            child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
              CheckboxListTile(
                  title: const Text("Do you agree to our Terms of Service?"),
                  value: isAgreed ?? false,
                  onChanged: (newValue) async {
                    await widget.tiki.modifyConsent(
                        oid!,
                        newValue == true
                            ? const TikiSdkDestination.all()
                            : const TikiSdkDestination.none());
                    setState(() => isAgreed = newValue);
                  },
                  controlAffinity: ListTileControlAffinity.leading),
              TextButton(
                  style: TextButton.styleFrom(
                      textStyle: const TextStyle(fontSize: 20),
                      minimumSize: const Size(150, 50),
                      foregroundColor: Colors.white,
                      backgroundColor: Colors.blue),
                  onPressed: isAgreed == true
                      ? () {
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) =>
                                      HomePage(widget.tiki, user!)));
                        }
                      : null,
                  child: const Text('Login'))
            ])));
  }
}
