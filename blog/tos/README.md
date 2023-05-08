---
title: On-chain Terms of Service
excerpt: "Difficulty level: 1. In this example, we walk through using TIKI to manage the most common form of user data consent —agreeing to the terms of service."
category: 637e6f07266017008b61b9d2
parentDoc: 6398e046fff22900a5284a72
slug: tiki-sdk-flutter-example-on-chain-tos
hidden: false
order: 6
---

In this blog, we’re going to walk through using TIKI to manage the most common form of user data consent **—agreeing to the terms of service.** Why (and I’ll keep this short so we can get to building)?

For most applications, the ToS is the primary (often only) form of gaining user consent. Terms also change as business and regulatory needs shift. Meaning to avoid being sued, you must track which users agreed to what and when —definitely an annoyance since, as developers, we want to be building cool features, not tracking opt-ins. If enthralled by the “why,” read more [here](https://blog.mytiki.com/p/why-on-chain-consent).

---

Now, let’s get coding. We’re going to do this example in Flutter/Dart, but if you want to follow along in Swift/Kotlin, shoot us a PR, and we’ll add it!

#### [Source Code →](https://github.com/tiki/examples/tree/main/flutter/tos)

## Installation

First things first, set up a new empty Flutter project. Now, let’s add two dependencies, [tiki_sdk_flutter](https://pub.dev/packages/tiki_sdk_flutter) and [uuid](https://pub.dev/packages/uuid).

*Note: we’re going to use uuid to generate random user ids; it’s not required for tiki_sdk_flutter.*

```
flutter pub add tiki_sdk_flutter
flutter pub add uuid
```

## Setup Screens

We create two basic screens to mimic a simple login flow with ToS consent —login and home.

#### home_page.dart
```
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {

  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: const Text('Home')),
        body: SingleChildScrollView(
            child: Column(children: const [
          Center(child: Text('logged in')),
        ])));
  }
```

#### login_page.dart
```
import 'package:flutter/material.dart';

import 'home_page.dart';

class LoginPage extends StatefulWidget {

  const LoginPage({Key? key}) : super(key: key);

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  bool? isAgreed;

  @override
  void initState() {
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
                  onChanged: (newValue) {
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
                                  builder: (context) => HomePage()));
                        }
                      : null,
                  child: const Text('Login'))
            ])));
  }
}
```

#### main.dart
```
import 'package:flutter/material.dart';

import 'login_page.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {

  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ToS Demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const LoginPage(),
    );
  }
}
```

Alright, easy. We now have a simple ToS-based login-flow app. It should look roughly like this:

![image](https://user-images.githubusercontent.com/3769672/207441175-07a8a7a8-37f6-463b-9730-df1b45fdcfc7.png)


## Adding TIKI
First, we need to initialize the SDK and pass it down to our pages —flutter is hierarchical, with context passed from parent to child. Given this is a super simple app, we’ll do it explicitly with constructors. For production apps, use your favorite pattern (we like [provider](https://pub.dev/packages/provider)).

*Note: You’ll need an **API ID**; if you don’t already have one, create a free account at [console.mytiki.com](https://console.mytiki.com) to get yours.*

#### main.dart
```
...
import 'package:tiki_sdk_flutter/main.dart';
...

void main() async {
  ...

  TikiSdk tiki = await (TikiSdkFlutterBuilder()
        ..apiId("b213d6bd-ccff-45c2-805e-4f0062d4ad5e")
        ..origin("com.mytiki.example_flutter_tos"))
      .build();
  runApp(const MyApp(tiki));
}

class MyApp extends StatelessWidget {
  final TikiSdk tiki;

  const MyApp(this.tiki, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      ...
      home: LoginPage(tiki),
    );
  }
}
```

#### login_page.dart
```
...
import 'package:tiki_sdk_flutter/main.dart';
...

class LoginPage extends StatefulWidget {
  final TikiSdk tiki;

  const LoginPage(this.tiki, {Key? key}) : super(key: key);

  ...
}

...
```

#### home_page.dart
```
...
import 'package:tiki_sdk_flutter/main.dart';
...

class HomePage extends StatelessWidget {
  final TikiSdk tiki;

  const HomePage(this.tiki, {Key? key}) : super(key: key);

  ...
}
```

## Assigning Ownership
Now that the TIKI SDK is initialized, we need to connect a user with the specific version of the terms of service —we call this assigning ownership. Behind the scenes, the terms of service record is tokenized (NFT, don’t freak out) and issued to the user —hence ownership.

*Why an NFT? It can’t be changed (critical for your compliance), it’s transparent (again, compliance + users love that), and decentralized, so you’re not dependent on anyone.*

We add to the `initState()` function two things. First, we create a new random user id (since this is an example). Then we assign ownership to the ToS record to this user. We record the ownership record id (`oid`) for use in later transactions.

```
...
import 'package:uuid/uuid.dart';
...

class _LoginPageState extends State<LoginPage> {
  String? oid;
  String? user;
  ...

  @override
  void initState() {
    user = "user_${const Uuid().v4()}";
    widget.tiki
        .assignOwnership(user!, TikiSdkDataTypeEnum.point, ["user_id"],
            about: "You can put the Terms of Service the user agreed to here.")
        .then((oid) => this.oid = oid);
    super.initState();
  }

...
```

## Recording Consent

Next, we attach a corresponding consent record using the oid for the ownership record. We’ll even do this right inside the checkbox onChanged handler, so a new consent record is generated every time the user clicks the box (it’s a demo, after all)

*Note: TIKI executes transactions locally, making it lightning fast (<1ms).*

```
...
CheckboxListTile(
    ...
    onChanged: (newValue) async {
      await widget.tiki.modifyConsent(
          oid!,
          newValue == true
              ? const TikiSdkDestination.all()
              : const TikiSdkDestination.none());
      setState(() => isAgreed = newValue);
    },
    ...
)
```

For simplicity, we’re using `TikiSdkDestination.all()` and `TikiSdkDestination.none()`. In a production application, you should specify your backend paths and corresponding use cases as described in your Terms of Service. When you do so, TIKI’s `applyConsent` function handles resolving the user’s consent for you, so you don’t have to worry about staying in compliance.

That’s it! It’s really that easy.

---

## Viewing Records

As with any blockchain, you can always go straight to the block records, deserialize them and view each individual transaction. If you log in to the TIKI [console](https://console.mytiki.com), you’ll find a convenient link to all blocks for your account.

However, from the SDK we expose two convenient methods ``getOwnership`` and ``getConsent``. The handle all of the above for you, returning the latest ownership and consent for a particular source (in our case, the user_id).

For the demo, on log in, we get the ownership and consent records, printing them out in a simple table.

```
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
```

![image](https://user-images.githubusercontent.com/3769672/207441337-fe4ce27b-d5a0-4f13-bfbb-c254fd8c3e14.png)

Nice work! Now, help yourself to a tiki-style cocktail 🍹.

#### [Source Code →](https://github.com/tiki/examples/tree/main/flutter/tos)
