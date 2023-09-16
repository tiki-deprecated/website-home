# Quickstart - Flutter

Add TIKI to a Flutter project in minutes. Refer to our [quickstart guide](https://mytiki.com/docs/quickstart) for detailed instructions.

Before you get started, you'll need a **Publishing ID**. Sign up for free at [console.mytiki.com](https://console.mytiki.com).

## Clone the Repository
```shell
git clone https://github.com/tiki/tiki-dx.git
cd quickstart/flutter
```

## Adding TIKI
Install the dependency using Flutter

```
flutter pub add tiki_sdk_flutter
```

This will add a line like this to your package's `pubspec.yaml` (and run an implicit `flutter pub get`):

```
dependencies:
  tiki_sdk_flutter: ^2.1.6
```

## Create an Offer
```
import 'package:tiki_sdk_flutter/tiki_sdk.dart';

Future<void> main() async {
  await TikiSdk.config()
      .offer
         .ptr("3332bd1b-7b0a-4b0f-a4e1-7fb28d3524f9")
         .description("I can't wait to tell people about TIKI")
         .use([LicenseUsecase.attribution()])
         .bullet("Learn how our ads perform", true)
         .bullet("Reach you on other platforms", false)
         .bullet("Sold to other companies", false)
         .tag(TitleTag.custom("quickstart"))
         .reward(Image.asset("assets/images/reward.png"))
         .terms("assets/terms.md")
         .add()
      .initialize("PUBLISHING ID", "muppet420");
  runApp(const MyApp());
}
```

## Displaying the Offer
```
class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
          Image.asset("assets/images/doc-logo.png"),
          const Padding(
              padding: EdgeInsets.symmetric(vertical: 10.0),
              child: Text("Let's do this shit")),
          ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor:
                    const Color(0xFF1C0000), // background (button) color
                foregroundColor:
                    const Color(0xFFFFCC33), // foreground (text) color
              ),
              onPressed: () => TikiSdk.present(context),
              child: const Text("Show Offer"))
        ]));
  }
}
```

## Running the App
Just press run.

## Get your license from the API
First you'll need an API Key (they're also free), just open back up the [TIKI Console](https://console.mytiki.com). Open your project and under Private Keys click

1. Exchange your API Key for an Access Token
    ```shell
    curl -G --request POST \
    --url 'https://mytiki.com/api/authorize' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --header 'accept: application/json' \
    --data-urlencode 'grant_type=client_credentials' \
    --data-urlencode 'scope=index' \
    --data-urlencode 'client_id=<API KEY ID>' \
    --data-urlencode 'client_secret=<API KEY SECRET>' \
    ```

   From the response, copy the `access_token` field

2. Retrieve the license record

   ```shell
   curl --request POST \
     --url 'https://mytiki.com/api/license/list?maxResults=100' \
     --header 'accept: application/json' \
     --header 'authorization: Bearer <ACCESS TOKEN>' \
     --header 'content-type: application/json' \
     --data '
    {
    "tags": [
        "custom:quickstart"
        ]
    }
    '
   ```

   You should get back something like:

   ```json
   {
    "approxResults":1,
      "results":[
        {
          "id":"cu4yNsQCA9I7s8UgCi0M-XWw5wzdZT_s1bz9mdCaQ4M",
          "ptr":"FJGgbIVAqeMhUMPBk7zQ/RT4Qwkywqz2NQfKCpV3TvQ=",
          "tags":[
            "custom:quickstart"
          ],
          "uses":[
            {
              "usecase":"attribution"
            }
          ]
        }
      ]
    }
   ```
   Want to see the full License and Title records? Use the `id` field from the List Licenses response and call [Get License](https://mytiki.com/reference/get-license). Then grab the `title` field from the Get License response and call [Get Title](https://mytiki.com/reference/get-title).

