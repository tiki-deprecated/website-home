# Quickstart - JavaScript/Html

Add TIKI to a pure HTML/JS/CSS project in minutes. Refer to our [quickstart guide](https://mytiki.com/docs/quickstart) for detailed instructions.

Before you get started, you'll need a **Publishing ID**. Sign up for free at [console.mytiki.com](https://console.mytiki.com).

## Clone the Repository
```shell
git clone https://github.com/tiki/tiki-dx.git
cd quickstart/javascript
```

## Adding TIKI
```html
<body>
    <div class="welcome">
        <a href="https://mytiki.com">
            <img alt="TIKI" src="https://cdn.mytiki.com/assets/icon-logo.svg" />
        </a>
        <h1>Let&#39;s do this shit</h1>
    </div>
    <!-- check http://npmjs.com/package/@mytiki/tiki-sdk-js for the latest version -->
    <script src="https://unpkg.com/@mytiki/tiki-sdk-js@1.0.4/dist/index.js"></script>
</body>
```

## Create an Offer
```html
<body>
    <div class="welcome">
        <a href="https://mytiki.com">
            <img alt="TIKI" src="https://cdn.mytiki.com/assets/icon-logo.svg" />
        </a>
        <h1>Let&#39;s do this shit</h1>
    </div>
    <!-- check http://npmjs.com/package/@mytiki/tiki-sdk-js for the latest version -->
    <script src="https://unpkg.com/@mytiki/tiki-sdk-js@1.0.4/dist/index.js"></script>
    <script>
        window.TikiSdk.config()
          .offer
            .ptr("3332bd1b-7b0a-4b0f-a4e1-7fb28d3524f9")
            .description("I can't wait to tell people about TIKI")
            .use({ usecases:[TikiSdk.LicenseUsecase.attribution()] })
            .bullet({ text: 'Learn how our ads perform', isUsed: true })
            .bullet({ text: 'Reach you on other platforms', isUsed: false })
            .bullet({ text: 'Sold to other companies', isUsed: false })
                .tag(TikiSdk.TitleTag.custom("quickstart"))
                .reward('reward.png')
                .terms('terms.md')
                .add()
            .initialize('PUBLISHING ID', 'muppet420')
    </script>
</body>
```

## Displaying the Offer
```html
<body>
    <div class="welcome">
        <a href="https://mytiki.com">
            <img alt="TIKI" src="https://cdn.mytiki.com/assets/icon-logo.svg" />
        </a>
        <h1>Let&#39;s do this shit</h1>
        <button onclick="TikiSdk.present()">Show Offer</button>
    </div>
    <!-- check http://npmjs.com/package/@mytiki/tiki-sdk-js for the latest version -->
    <script src="https://unpkg.com/@mytiki/tiki-sdk-js@1.0.4/dist/index.js"></script>
    <script>
        window.TikiSdk.config()
          .offer
            .ptr("3332bd1b-7b0a-4b0f-a4e1-7fb28d3524f9")
            .description("I can't wait to tell people about TIKI")
            .use({ usecases:[TikiSdk.LicenseUsecase.attribution()] })
            .bullet({ text: 'Learn how our ads perform', isUsed: true })
            .bullet({ text: 'Reach you on other platforms', isUsed: false })
            .bullet({ text: 'Sold to other companies', isUsed: false })
                .tag(TikiSdk.TitleTag.custom("quickstart"))
                .reward('reward.png')
                .terms('terms.md')
                .add()
            .initialize('PUBLISHING ID', 'muppet420')
    </script>
</body>
```

## Running the webpage
Many IDEs now include ways to serve a local website for testing and debugging. Feel free to that, or launch it from your Terminal (requires [Node](https://nodejs.org)).

```shell
npm install
npx http-server -o -c-1 -p8042
```

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

