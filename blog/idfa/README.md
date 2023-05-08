---
title: Use Data Rewards to Boost IDFA Opt-in Rates
excerpt: "Difficulty level: 3.  In this example, we walk through how to use TIKI to add data rewards to maximize Apple's App Tracking Transparency (\"aka Ask App Not to Track\") opt-in rates."
category: 637e6f07266017008b61b9d2
parentDoc: 6398e046fff22900a5284a72
slug: tiki-sdk-flutter-example-idfa
hidden: false
order: 7
---

This example demonstrates using TIKI's data ownership infrastructure to improve iOS ATT/IDFA opt-in rates.

For the unfamiliar, in iOS 14.5 (April 2021), Apple rolled out a critical data permission change called [App Tracking Transparency](https://support.apple.com/en-us/HT212025), introducing three key [concepts](https://developer.apple.com/news/?id=ecvrtzt2):

1. When submitting your app for review, you must declare the various types of data collected/tracked.
2. Access to the device's advertising identifier (IDFA) requires explicit consent from the user via a system prompt.
3. Collection of device and user data to derive an alternative form of user fingerprint is forbidden

Before this mandatory change, IDFA consent had an 85% opt-in rate (users had to disable it under settings); after the change, the **opt-in rate plummeted to ~16%**.

While the numbers are staggering, the reasoning is straightforward. People are more aware and concerned about their data's use (or misuse) than ever before. Put yourself in the user's shoes; **why would anyone agree to be tracked when it's not clear what they'll get in return?**

This is precisely the type of problem TIKI was created to solve. Transparent rewards in exchange for data —discounts, loyalty points, premium content, whatever you want to offer as an incentive.


Below we walk through using TIKI to offer a data reward, collect (and manage) user consent, and record the data licensing contract. Let's jump in.

---

Now, let’s get coding. We’re going to do this example in Flutter/Dart, but if you want to follow along in Swift, shoot us a PR, and we’ll add it!

#### [Source Code →](https://github.com/tiki/examples/tree/main/flutter/idfa)

First things first, set up a new empty Flutter project. Now, let’s add our dependencies, [tiki_sdk_flutter](https://pub.dev/packages/tiki_sdk_flutter), [app_tracking_transparency](https://pub.dev/packages/app_tracking_transparency), and [app_settings](https://pub.dev/packages/app_settings).

*The app_tracking_transparency and app_settings libraries handle the iOS native code/interactions*

```
flutter pub add tiki_sdk_flutter
flutter pub add app_tracking_transparency
flutter pub add app_settings
```

## Setup Screens

Let's create a basic Home Page with a single button to request the IDFA consent via an [AlertDialog](https://api.flutter.dev/flutter/material/AlertDialog-class.html) and display the result.

#### home_page.dart
```
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {

  const HomePage({super.key});

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
          Text("IDFA: ${_idfa ?? "???"}"),
          ElevatedButton(
              onPressed:(){},
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
```

#### main.dart
```
import 'package:flutter/material.dart';
import 'package:idfa/home_page.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(MyApp(tikiIdfa));
}

class MyApp extends StatelessWidget {

  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'IDFA Demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: HomePage(),
    );
  }
}
```

Great, we've got ourselves a simple single-screen app.

![IDFA:???](https://user-images.githubusercontent.com/3769672/209273898-eab500db-68ac-4d26-a1d7-8182f89132ce.png)

## IDFA Helper Class

We're going to set up an IDFA helper class that wraps the TIKI SDK, adds in the necessary iOS calls, handles keeping user consent in sync with the device permissions, and executes the popup flow. The result is a single class that you call `init` on startup (in main) and then `get()` or `request()` as needed.

### Init

We start with a constructor and an init method. We pass into the constructor a `userId` representative of the user the IDFA corresponds to and the URL of the `backend` server that the user is consenting to use their IDFA.

In the init method, we build the `TikiSdk` object with an optional wallet `address`. If the `address` is null, a new wallet is automatically created. The `TikiSdkFlutterBuilder` requires an `apiId` which is free at [console.mytiki.com](https://console.mytiki.com)

#### tiki_idfa.dart
```
import 'package:flutter/material.dart';
import 'package:tiki_sdk_flutter/main.dart';

class TikiIdfa {
  final String _source;
  final String _backend;
  late final TikiSdk tiki;

  TikiIdfa(String userId, Uri backend)
      : _source = '${userId}_idfa',
        _backend = backend.toString();

  Future<TikiIdfa> init({String? address}) async {
	  TikiSdkFlutterBuilder builder = TikiSdkFlutterBuilder()
      ..apiId('YOUR API ID')
      ..origin('com.mytiki.example_idfa');
    if (address != null) builder.address(address);
    tiki = await builder.build();
    return this;
  }
}
```

Next, we want to add some logic to keep the user consent records synced with the corresponding device permission. A user can at anytime go into their phone's settings and turn on or off IDFA consent for an application. For example, if they've accepted a reward for sharing, you may choose to terminate the reward if they change their mind and opt out.

The way our sync will work is we check the current consent and permission statuses; if they don't match, we modify the consent record to match. First, we add two private methods to determine the statuses.

#### tiki_idfa.dart
```
...

import 'package:app_tracking_transparency/app_tracking_transparency.dart';

class TikiIdfa {
	static const String idfaDefault = '00000000-0000-0000-0000-000000000000';
	...

	Future<bool> _hasIdfaPermission() async {
    String idfa = await AppTrackingTransparency.getAdvertisingIdentifier();
    return idfa == idfaDefault ? false : true;
  }

	bool _hasIdfaConsent(ConsentModel? consent) =>
      consent == null || !consent.destination.paths.contains(_backend)
          ? false
          : true;

	...
}
```  

Next, we add a `sync(oid)` function to update the consent if the statuses are mismatched.

#### tiki_idfa.dart

```
...

class TikiIdfa {
	...

	Future<void> _sync(String oid) async {
	    ConsentModel? consent = tiki.getConsent(_source);
	    bool hasPermission = await _hasIdfaPermission();
	    bool hasConsent = _hasIdfaConsent(consent);
	    if (hasConsent != hasPermission) {
	      return _setIdfaConsent(oid, hasPermission,
	          destinationToModify: consent?.destination);
	    }
	  }

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

  ...
}
```

Finally, we call our sync method from `init` IF there is an existing data ownership record to modify the consent for.

#### tiki_idfa.dart

```
...

class TikiIdfa {
	...

	Future<TikiIdfa> init({String? address}) async {
		...
		String? oid = await _getOid();
		if (oid != null) await _sync(oid);
		return this;
	}

	Future<String?> _getOid() async {
		OwnershipModel? ownership = tiki.getOwnership(_source);
		if (ownership != null) {
		  return base64UrlEncode(ownership.transactionId!);
		}
		return null;
	}

	...
}
```

Nice!

### Get IDFA Value

While we're mucking around with consent syncing, we might as well add our `get` function. Likewise, whenever we want to get the IDFA value, we want to check and update, if necessary, the consent record.

#### tiki_idfa.dart

```
...

class TikiIdfa {
	...

	Future<String?> get() async {
		String? oid = await _getOid();
		if (oid != null) {
			await _sync(oid);
			return await AppTrackingTransparency.getAdvertisingIdentifier();
		}
		return null;
	}
	...
}
```

### Request IDFA Consent

Now, for the good stuff. Requesting consent! When IDFA consent is requested, we have four states to handle.

- User **HAS** already given consent **AND** device permissions —do nothing; return the IDFA value.



- User **HAS** already given consent, **BUT** device permission is disabled —show the user a popup explaining the situation and let them decide.



- User **HAS** not given consent, **BUT** the device permission is enabled —automatically update consent to match.



- User **HAS** not given consent, **AND** the device permission is disabled —show the user a popup and let them decide.

First, let's set up our popup screen flow. The initial popup explains the offer to the user. Users who accept the offer are shown the iOS permission popup. If the user changes their mind and selects to opt out, a third popup is displayed, alerting them to the issue with options to remedy it.

#### tiki_idfa.dart

```
...
import 'package:app_settings/app_settings.dart';

class TikiIdfa {
	...

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
	...
}
```

It's ugly af since I skipped all styling. Style it to your application and spiff it up with informative body content to really impress your users.

Now add the last piece, the `request` function, using the state logic from earlier.

#### tiki_idfa.dart

```
...

class TikiIdfa {
	...

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
	...
}
```

Boom. Now you can put your helper class to work.

## Add IDFA Helper to App

We start the app integration by initializing the helper class in main and passing it down to our Home Page. We're going to create a fake static `userId` called `TestUser.dfc4446c-6c70-4504-96bc-853ce0615323` and use a dummy backend URL `https://example.mytiki.com`. We're also going to use a static TIKI wallet address (`FAyqIORAWigam-BJa7Bu9d07CPLCsMpo0x1mczMkp-4`) for the demo, so we can relaunch over and over to test various states.

#### main.dart

```
...
import 'package:idfa/tiki_idfa.dart';

void main() async {
	...
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
			 ...
			 home: HomePage(tikiIdfa),
		);
	}
}
```

Next, on our home page, we add two different helper requests. First, we use the `get()` function with a [FutureBuilder](https://api.flutter.dev/flutter/widgets/FutureBuilder-class.html) to get the current IDFA value. Second, we add the `request(...)` function to the `onPressed` handler for the [ElevatedButton](https://api.flutter.dev/flutter/material/ElevatedButton-class.html). If the IDFA value is valid (consent + permission), we disable the request button.

```
...
import 'package:idfa/tiki_idfa.dart';

class HomePage extends StatefulWidget {
	final TikiIdfa tikiIdfa;

	const HomePage(this.tikiIdfa, {super.key});

	...
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
	...
```

Last but not least, we need to declare our permission in `info.plist` under `ios > Runner > info.plist`.

```
<key>NSUserTrackingUsageDescription</key>
<string>IDFA EXAMPLE</string>
```

That's it. Run it and press some buttons!

![IDFA Example](https://user-images.githubusercontent.com/3769672/209273954-f9c1f384-9f77-4285-a316-7a3b9954fad1.png)

---

Now what? We breezed past a couple of key TIKI features that you'll need in a production system.

## Adding a Data License

Users are trading their IDFA in exchange for a reward, with a signed, immutable record of the transaction —that's a contract. Now, you may (should) add some legal terms to the deal, namely how you intend to use the data, what happens to a user's reward if they change their mind, etc. We don't provide the license for you (that's legal's job, we write code), but we do provide some nifty hooks to attach Ts & Cs to the transaction record.

The `modifyConsent` function accepts a few additional parameters:

- **expiry**: choose an end date (if you want) for the agreement to terminate.
- **about**: a flexible text field to add either a pointer to your Ts & Cs or just embed the entire agreement.
- **reward**: a field to call out, emphasize, or define additional terms regarding the reward.
- **destination.uses**: a list of explicitly declared uses (or NOT uses) to be strictly enforced.

## Issuing Rewards and Using IDFA in Your Backend

This part is almost too easy. For starters, the `request` function returns the IDFA, so all you need to do is add an if statement.

```
String idfa = await widget.tikiIdfa.request(...);
if(idfa != TikiIdfa.idfaDefault){

  //call your reward issuance function

}
```

It's up to you to decide how you want to reward your users; for example, you can fire off a request to your backend saying give user XYZ a 10% coupon. Or, if you want to get fancy, make your reward terms require 30 days of IDFA consent. Simply relay the wallet address to your backend and wire up a function to check the consent in 30 days.

To pass the IDFA value to your backend (that's where you're going to get value from it), wrap your API call in TIKI's `applyConsent` function.

Yes, wrap your existing API call. You can place your backend calls to follow your reward function(s) post-request, but you don't have to. TIKI's `applyConsent`  resolves the latest user consent status for you. The example below uses our `userId` and `backend` URL from above.

```
await tiki.applyConsent(
    'TestUser.dfc4446c-6c70-4504-96bc-853ce0615323',
    TikiSdkDestination(['https://example.mytiki.com']),
    () {
        http.post(
            Uri.parse('https://example.mytiki.com'),
            body: jsonEncode(<String, String>{
                'userId':'TestUser.dfc4446c-6c70-4504-96bc-853ce0615323',
                'idfa': title}));
    };
```

---

Nice work! Looks like a few cocktails are in your future🍹.

#### [Source Code →](https://github.com/tiki/examples/tree/main/flutter/idfa)
