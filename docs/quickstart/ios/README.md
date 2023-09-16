# Quickstart - iOS

Add TIKI to an iOS project in minutes. Refer to our [quickstart guide](https://mytiki.com/docs/quickstart) for detailed instructions.

Before you get started, you'll need a **Publishing ID**. Sign up for free at [console.mytiki.com](https://console.mytiki.com).

## Clone the Repository
```shell
git clone https://github.com/tiki/tiki-dx.git
cd quickstart/ios
```

## Adding TIKI
Add the Swift Package repository: `https://github.com/tiki/tiki-sdk-ios`

_If you're unfamiliar with the Swift Package Manager, check out Apple's [instructions](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app)._

## Create an Offer
```
import SwiftUI
import TikiSdk

@main
struct app: App {
    
    init() {
      try? TikiSdk.config()
            .offer
                .ptr("3332bd1b-7b0a-4b0f-a4e1-7fb28d3524f9")
                .description("I can't wait to tell people about TIKI")
                .use(usecases: [LicenseUsecase.attribution])
                .bullet(text: "Learn how our ads perform ", isUsed: true)
                .bullet(text: "Reach you on other platforms", isUsed: false)
                .bullet(text: "Sold to other companies", isUsed: false)
                .tag(TitleTag("quickstart"))
                .reward("reward")
                .terms("terms.md")
                .add()
            .initialize(publishingId: "PUBLISHING ID", id: "muppet420")
    }
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .frame(maxWidth: .infinity, maxHeight: .infinity)
                .background(Color.white)
        }
    }
}
```

## Displaying the Offer
```
struct ContentView: View {
    var body: some View {
        VStack {
            Image("iconLogo").imageScale(.large)
            Text("Let's do this shit").padding(.bottom, 24)
            Button(action: {
                do{
                    try TikiSdk.present()
                }catch{
                    print(error)
                }
            }) {
                Text("Show Offer")
            }
            .foregroundColor(Color(red: 1, green: 0.722, blue: 0.133))
            .padding(12)
            .background(Color(red: 0.11, green: 0, blue: 0))
            .cornerRadius(8)
        }
    }
}
```

## Running the App
Just press run.
- Use the simulator if you added the TikiSdk Swift Package using the head of main (aka debug version)
- Use a physical device if you targeted a version or range of versions (aka release version)


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

